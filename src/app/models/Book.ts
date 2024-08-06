export interface Book {
    id?: string;
    bookName: string;
    description: string;
    author: string;
    price: number;
    releaseDate: Date;
    active?: boolean;
}
