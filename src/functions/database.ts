import { join } from '@std/path';
import { ensureFile, exists } from '@std/fs';

import type { DatabaseData, TableItem } from '@types';

export async function createDatabase(
    path: string,
    name = 'main',
): Promise<string> {
    const filename = `${name}.database.json`;
    const filepath = join(path, filename);
    const isFileCreated = await exists(filepath);

    if (!isFileCreated) {
        await ensureFile(filepath);
        await Deno.writeTextFile(filepath, '{}');
    }

    return filepath;
}

export async function createTable(
    filepath: string,
    name: string,
): Promise<void> {
    let fileData = await Deno.readTextFile(filepath);
    const data = JSON.parse(fileData);
    data[name] = [];
    fileData = JSON.stringify(data, null, 4);

    await Deno.writeTextFile(filepath, fileData);
}

export async function getDatabase(filepath: string): Promise<DatabaseData> {
    const fileData = await Deno.readTextFile(filepath);
    const data = JSON.parse(fileData);

    return data;
}

export async function setDatabase(
    filepath: string,
    data: unknown,
): Promise<void> {
    const fileData = JSON.stringify(data);

    await Deno.writeTextFile(filepath, fileData);
}

export async function getTable(
    filepath: string,
    name: string,
): Promise<TableItem[]> {
    const data = await getDatabase(filepath);
    const table = data[name];

    return table;
}

export async function setTable(
    filepath: string,
    name: string,
    tableData: TableItem[],
): Promise<void> {
    const data = await getDatabase(filepath);
    data[name] = tableData;

    await setDatabase(filepath, data);
}
