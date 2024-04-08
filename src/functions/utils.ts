import { ensureFile, exists } from '@std/fs';
import { join } from '@std/path';

export async function createDatabase(
    path: string,
    name = 'index',
): Promise<void> {
    const cwd = Deno.cwd();
    const filepath = join(cwd, path, `${name}.database.json`);

    await ensureFile(filepath);

    const isFileCreated = await exists(path);

    if (isFileCreated) {
        await Deno.writeTextFile(filepath, '{}');
    }
}
