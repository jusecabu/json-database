import { Item } from '@classes';

import type { TableItem } from '@types';

export class Table<Type extends TableItem> {
    constructor(private readonly path: string, private readonly name: string) {}

    async get(): Promise<Item> {
        return new Item();
    }
}
