import React, {useContext} from 'react';
import {Context} from "../../../context";
import {Box} from "@mui/material";
import NoteBox from "./NoteBox";

const NotesBoxList = () => {

    const {searchNotes, display} = useContext(Context)

    return (
        <Box sx={{
            display: 'flex',
            width: display === 'list' ? 1000 : '100%',
            backgroundColor: display === 'list' ? '#1e1e1e' : '#222327'
        }}>
            {searchNotes?.map(note => <NoteBox
                key={note.id} id={note.id} body={note.body} createdAt={note.createdAt}/>)}
        </Box>
    );
};

export default NotesBoxList;
