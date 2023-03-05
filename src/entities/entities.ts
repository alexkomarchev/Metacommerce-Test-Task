export interface INote {
    id: number,
    body: string,
    createdAt: string,

}

export type INotes = INote[] | null


export interface IContext {
    pickCurrentNote: ((id?: number) => void) | null
    notes: INotes | null
    currentNote?: number | null,
    updateNote: ((body?: string) => void) | null,
    addNote: (() => void) | null,
    deleteNote:(() => void) | null,
}
