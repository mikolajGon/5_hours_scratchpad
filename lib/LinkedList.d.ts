declare type Pointer = number | null;
declare type LinkedListNode<T> = {
    next: Pointer;
    value: T;
};
declare type LinkedListData<T> = {
    [k: number]: LinkedListNode<T>;
};
declare class LinkedList {
    length: number;
    private _head;
    private _data;
    private _getPointer;
    private _getValuesPointersByIndex;
    delete<T>(index: number): T | void;
    get<T>(index: number): T | void;
    pop<T>(): T | void;
    push<T>(value: T): void;
}
