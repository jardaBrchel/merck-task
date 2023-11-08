import {CovidDataResponse} from './api.model';
import {PieChartItem} from '../components/PieChart';
import {LineChartItem} from '../components/LineChart';

export const getVariationsFromResponse = (response: CovidDataResponse[]): PieChartItem[] => {
    const variants = (response || [])
        .filter((item: CovidDataResponse) => item.variants?.length)[0]?.variants
        .filter(variant => variant.newWeeklyPercentage > 1)
        .map(variant => ({
            id: variant.variant,
            value: variant.newWeeklyPercentage
        }));

    return variants || [];
};

export const getHospitalisationsFromResponse = (response: CovidDataResponse[]): LineChartItem[] => {
    const cases = (response || [])
        .filter((item: CovidDataResponse) => item.hospitalCasesWeekly > 0)
        .map(item => ({
            x: item.date,
            y: item.hospitalCasesWeekly
        }));

    return cases || [];
};
