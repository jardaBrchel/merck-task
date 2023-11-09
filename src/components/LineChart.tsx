import { ChartRenderer } from './ChartRenderer';
import {trpc} from '../utils/trpc';
import {getHospitalisationsFromResponse} from '../api/api.utils';

export type LineChartItem = { x: string; y: number };
export const LineChartId = 'line-chart';

export function LineChart() {
    // Get data from API
    const chartData = trpc.getChartData.useQuery();

    if (chartData.isLoading) return <span>Loading...</span>;
    if (!chartData.data) return <span>No data</span>;

    const data = getHospitalisationsFromResponse(chartData.data);
    const renderChart = setUpChart( data );

    return (
        <ChartRenderer
            render={(container) => renderChart(container)}
        />
    );
}

const setUpChart = ( data: LineChartItem[]) => {
    return async function renderChart(container: HTMLDivElement) {
        const AntvG2 = await import('@antv/g2');
        const chart = new AntvG2.Chart({
            container: container,
            autoFit: true,
        });

        chart.data(data);
        chart.scale('y', {
            alias: 'Hospitalisations',
        });
        chart
            .line()
            .position('x*y').color('y', ['#019875']);
        chart.render();

        return chart;
    };
}
