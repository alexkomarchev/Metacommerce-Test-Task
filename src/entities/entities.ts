export interface INote {
    id: number | null,
    body: string | null,
    createdAt: string | null,

}

export type INotes = INote[] | null

export interface IContext {
    pickCurrentNote: ((id?: number) => void) | null
    notes: INotes | null
    searchNotes:INotes | null,
    currentNote?: number | null,
    updateNote: ((body?: string) => void) | null,
    addNote: (() => void) | null,
    deleteNote: (() => void) | null,
    display: Display,
    displayChange:((view:Display) => void ) | null,
    searchNote:((text:string) => void) | null,
}

export type Display = 'list' | 'box'
