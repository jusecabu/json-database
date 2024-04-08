import { Table, type TableItem } from './table.ts';
import { createDatabase } from '../functions/utils.ts';

export class Database {
    constructor(private readonly path: string, private readonly name: string) {}

    async table<Type extends TableItem>(): Promise<Table<Type>> {
        const { path, name } = this;

        await createDatabase(path, name);

        return new Table<Type>();
    }
}
