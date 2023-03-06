import {Box, Container} from "@mui/material";
import {Context} from "./context";
import {useEffect, useState} from "react";
import {Display, INotes} from "./entities/entities";
import {getRandomId} from "./shared/getRandomId";
import {getCreatedAt} from "./shared/Time";
import Header from "./widgets/Header/Header";
import NotesList from "./widgets/NotesList/NotesList";
import Markdown from "./widgets/Markdown/Markdown";
import NotesBoxList from "./widgets/NotesList/features/NotesBoxList";


function App() {

    const [currentNote, setCurrentNote] = useState<number | null>(null)

    const [notes, setNotes] = useState<INotes | null>(localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes') || '') : null)

    const [searchNotes, setSearchNotes] = useState(notes)

    useEffect(() => setSearchNotes(notes), [notes])

    const [display, setDisplay] = useState<Display>("list")

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

        if (id === -1) {
            setCurrentNote(null)
            return
        }

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

        if (notes === null) {
            setNotes([{id, body: '', createdAt: getCreatedAt()}])
            return
        }

        setNotes([...notes!, {id, body: '', createdAt: getCreatedAt()}])
    }

    const displayChange = (view: Display): void => {
        setDisplay(view)
    }

    const searchNote = (text: string): void => {
        if (text.trim() === '') {
            console.log('yes')
        }
        setSearchNotes(notes!.filter(note => note.body?.toLowerCase().includes(text.toLowerCase())))

    }


    return (
        <Context.Provider value={{
            pickCurrentNote,
            updateNote,
            addNote,
            deleteNote,
            displayChange,
            searchNote,
            searchNotes,
            display,
            notes,
            currentNote,

        }}>
            <Container maxWidth="xl" sx={{height: "80vh", width: 1420}}>
                <Header/>
                <Box sx={{display: 'flex', height: "700px"}}>
                    {display === 'list' && <NotesList/>}
                    {(display === 'box' && currentNote === null) ? <NotesBoxList/> : <Markdown/>}
                </Box>
            </Container>
        </Context.Provider>
    )
}

export default App
