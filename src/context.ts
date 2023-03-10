import {createContext} from "react";
import {IContext} from "./entities/entities";

export const Context = createContext<IContext>({
    notes: null,
    searchNotes:null,
    pickCurrentNote:null,
    currentNote:null,
    updateNote:null,
    addNote:null,
    deleteNote:null,
    display:'list',
    displayChange:null,
    searchNote:null,
})
