import { assert } from '@std/assert';
import { createDatabase, createTable } from '@functions';

const databaseName = 'test';
const filepath = 'test/main.database.json';
const tableName = 'users';

Deno.test('Check if JSON file is created', async (): Promise<void> => {
    await createDatabase(databaseName);

    const data = await Deno.readTextFile(filepath);

    await Deno.remove(filepath);

    assert(data.includes('{}'));
});

Deno.test('Check is table in JSON file is created', async (): Promise<void> => {
    await createDatabase(databaseName);
    await createTable(filepath, tableName);

    const data = await Deno.readTextFile(filepath);

    await Deno.remove(filepath);

    assert(data.includes(`"${tableName}": []`));
});
