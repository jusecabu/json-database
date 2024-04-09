import { getTable } from '@functions';

import type { FilterItem, TableItem } from '@types';

export async function getItem(
    filepath: string,
    name: string,
    value: FilterItem<TableItem>,
): Promise<TableItem | undefined> {
    const table = await getTable(filepath, name);
    const item = table.find((it) =>
        JSON.stringify(it) === JSON.stringify(value)
    );

    return item;
}
