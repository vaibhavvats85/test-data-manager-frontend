export interface TableDetails{
    table: string;
    column_number: number;
    record_number: number;
    created_date:string;
    update_date: string;
    columns?: any[];
}

export interface TestConnection {
    connect: boolean;
}