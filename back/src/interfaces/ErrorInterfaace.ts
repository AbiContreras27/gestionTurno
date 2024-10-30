export interface PostgresError {
    detail?: string,
    code: number
}

export interface ErrorResponse {
    message: string,
    details?: string,
    code?: number
}