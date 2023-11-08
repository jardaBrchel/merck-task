import {ApiParamStructure, ApiResponse, CovidDataResponse} from './api.model';

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

export async function getChartData() {
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
