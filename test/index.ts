import { assert } from '@std/assert';
import { createDatabase } from '../src/functions/utils.ts';

Deno.test('Database JSON file is created', async (): Promise<void> => {
    await createDatabase('test');

    const data = await Deno.readTextFile('test/index.database.json');

    await Deno.remove('test/index.database.json');

    assert(data.includes('{}'));
});
