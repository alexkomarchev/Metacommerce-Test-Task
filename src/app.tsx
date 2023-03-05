import {Container} from "@mui/material";
import NotesList from "./widgets/NotesList/NotesList";
import Markdown from "./widgets/Markdown/Markdown";
import {Context} from "./context";
import React, {useEffect, useState} from "react";

function App() {

    const [currentNote, setCurrentNote] = useState<number | null>(null)

    const [notes, setNotes] = useState(null)

    console.log(currentNote)

    useEffect(() => {
        let notesString = localStorage.getItem("notes")

        if (notesString !== null) {
            setNotes(JSON.parse(notesString))
        }
    }, [])

    const pickCurrentNote = (id: number) => {
        setCurrentNote(id)
    }

    return (
        <Context.Provider value={{
            pickCurrentNote,
            notes,
            currentNote
        }}>
            <Container maxWidth="xl" sx={{display: "flex", height: "90vh"}}>
                <NotesList/>
                <Markdown/>
            </Container>
        </Context.Provider>
    )
}

export default App
