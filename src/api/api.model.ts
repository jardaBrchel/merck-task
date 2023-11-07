export type ApiResponse<T> = { data: T[] };

export type ApiParamStructure = {
    [key: string]: string;
};

export type Variant = {
    variant: string;
    cumWeeklySequenced: number,
    newWeeklyPercentage: number,
}

export type CovidDataResponse = {
    date: string;
    hospitalCasesWeekly?: number;
    variants?: Variant[];
};
