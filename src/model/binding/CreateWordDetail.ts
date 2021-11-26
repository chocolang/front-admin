export interface CreateWordDetail {
    name: string;
    level: number;
    point: number;
    description: string;
    synonyms?: Array<string>;
}