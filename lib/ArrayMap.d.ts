declare type ArrayData<T = any> = {
    [k: string]: T;
};
declare class ArrayList {
    length: number;
    private data;
    private checkIndex;
    private deleteLastItem;
    push<T>(value: T): void;
    pop(): any;
    get(index: number): any | Error;
    delete(index: number): void | Error;
}
