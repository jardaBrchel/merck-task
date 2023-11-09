import { ChartRenderer } from './ChartRenderer';
import {getVariationsFromResponse} from '../api/api.utils';
import {trpc} from '../utils/trpc';

export type PieChartItem = { id: string; value: number };
export const PieChartId = 'pie-chart';

export function PieChart() {
  // Get data from API
  const chartData = trpc.getChartData.useQuery();

  if (chartData.isLoading) return <span>Loading...</span>;
  if (!chartData.data) return <span>No data</span>;

  const data = getVariationsFromResponse(chartData.data);

  const renderChart = setUpChart( data );
  return (
    <ChartRenderer
      render={(container) => renderChart(container)}
    />
  );
}

const setUpChart = ( data: PieChartItem[]) => {
  return async function renderChart(container: HTMLDivElement) {
    const AntvG2 = await import('@antv/g2');
    const chart = new AntvG2.Chart({
      container: container,
      autoFit: true,
      height: 400,
      options: {
        responsive: true,
        type: 'pie',
        data: data,
      }
    });

    chart.coordinate('theta', {
      innerRadius: 0.6,
    });
    chart.tooltip({
      showMarkers: false,
    });
    chart
        .interval()
        .adjust('stack')
        .position('value')
        .color('id', ['#019875', '#48B39D', '#007A63', '#FFC857', '#322F20', '#E8F1F2', '#075E54'])
    chart.render();

    return chart;
  };
}
