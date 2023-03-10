import {Box} from "@mui/material";
import Note from "./Note";
import {useContext} from "react";
import {Context} from "../../../context";

const List = () => {

    const {searchNotes} = useContext(Context)

    return (
        <Box sx={{borderTop: 1, borderColor: 'gray', height: '90%', overflowY: 'scroll'}}>
            {searchNotes?.map(note => <Note
                key={note.id} id={note.id} body={note.body} createdAt={note.createdAt}/>)}
        </Box>
    );
};

export default List;
