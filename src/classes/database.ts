import { Table } from '@classes';
import { createDatabase, createTable } from '@functions';

import type { TableItem } from '@types';

class Database {
    constructor(
        private readonly filepath: string,
    ) {}

    async table<Type extends TableItem>(
        name: string,
    ): Promise<Table<Type>> {
        const { filepath } = this;

        await createTable(filepath, name);

        return new Table<Type>(filepath, name);
    }
}

export class File {
    static async init(path: string, filename?: string): Promise<Database> {
        const filepath = await createDatabase(path, filename);

        return new Database(filepath);
    }
}
