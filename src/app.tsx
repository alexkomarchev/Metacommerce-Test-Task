import {Container} from "@mui/material";
import NotesList from "./widgets/NotesList/NotesList";
import Markdown from "./widgets/Markdown/Markdown";
import {Context} from "./context";
import React, {useEffect, useState} from "react";
import {INotes} from "./entities/entities";
import {getRandomId} from "./shared/getRandomId";
import {getCreatedAt} from "./shared/Time";

function App() {

    const [currentNote, setCurrentNote] = useState<number | null>(null)

    const [notes, setNotes] = useState<INotes>(JSON.parse(localStorage.getItem('notes') || ''))

    useEffect(() => {
        let notesString = localStorage.getItem("notes")

        if (notesString !== null) {
            setNotes(JSON.parse(notesString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const pickCurrentNote = (id: number) => {
        setCurrentNote(id)
    }

    const updateNote = (body: string): void => {
        setNotes(notes!.map(note => {
            if (note.id === currentNote) {
                note.body = body
            }
            return note
        }))
    }

    const deleteNote = (): void => {
        if (!currentNote) {
            return
        }

        setNotes(notes!.filter(note => note.id !== currentNote))
        setCurrentNote(null)
    }

    const addNote = (): void => {
        const id = getRandomId()
        setCurrentNote(id)
        setNotes([...notes!, {id, body: '', createdAt: getCreatedAt()}])
    }

    return (
        <Context.Provider value={{
            pickCurrentNote,
            updateNote,
            addNote,
            deleteNote,
            notes,
            currentNote,

        }}>
            <Container maxWidth="xl" sx={{display: "flex", height: "90vh"}}>
                <NotesList/>
                <Markdown/>
            </Container>
        </Context.Provider>
    )
}

export default App
