export type TableItem = {
    id: string;
    [x: string]: unknown;
};

export class Table<Type extends TableItem> {
    constructor() {}
}
