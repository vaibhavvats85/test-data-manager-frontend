export interface TestDataRequest {
    hosturl: string;
    username: string;
    password: string;
    connect: boolean;
    databasename: string;
    noOfRecords: number;
    date_column: string;
    id: string;
    table: string;
}