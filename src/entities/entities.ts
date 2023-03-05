export interface INote {
    id: number,
    body: string,
    createdAt: string,

}

export type INotes = INote[]


export interface IContext {
    pickCurrentNote: ((id?: number) => void) | null
    notes: INote[] | null
    currentNote?: number | null
}
