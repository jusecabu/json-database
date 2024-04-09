export type TableItem = {
    id: string;
    [x: string]: unknown;
};

export type FilterItem<Type extends TableItem> = {
    [Key in keyof Type]?: Type[Key];
};
