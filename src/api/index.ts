import {ApiParamStructure, ApiResponse, CovidDataResponse} from './api.model';
import { kv } from "@vercel/kv";
import {PieChartId} from '../components/PieChart';
import {LineChartId} from '../components/LineChart';

export async function fetchData(
    structure: ApiParamStructure,
) {
    const url = new URL('https://api.coronavirus.data.gov.uk/v1/data');

    url.searchParams.append('structure', JSON.stringify(structure));

    url.searchParams.append(
        'filters',
        'areaName=England;areaType=nation'
    );

    return fetch(url).then((res) => res.json());
}

export async function getChartData(): Promise<CovidDataResponse[]> {
    const structure = {
        date: 'date',
        variants: 'variants',
        hospitalCasesWeekly: 'hospitalCasesWeekly',
    };

    const response = (await fetchData(
        structure,
    )) as ApiResponse<CovidDataResponse>;

    return response.data;
}

export async function getLikes(): Promise<{ 'pie-chart': boolean; 'line-chart': boolean }> {
    const pieChartLikes = await kv.get<boolean>(PieChartId);
    const lineChartLikes = await kv.get<boolean>(LineChartId);

    return {
        'pie-chart': pieChartLikes || false,
        'line-chart': lineChartLikes || false,
    };
}

export async function putLikes({id, value}: { id: string, value: boolean }) {
    await kv.set(id, value);
}
