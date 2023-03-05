import {Box, Container, Typography} from "@mui/material";
import ChangeDisplay from "../Header/Features/ChangeDisplay";
import Delete from "../Header/Features/Delete";
import List from "./features/List";
import React, {useContext} from "react";
import {Context} from "../../context";
import NotesBoxList from "./features/NotesBoxList";

const NotesList = () => {

    const {display} = useContext(Context)

    return (
        <Box sx={{width: 425, backgroundColor: '#222327', padding: 2}}>
            <Typography
                sx={{color: 'gray', fontWeight: '600', margin: '0px 10px 10px 0px'}}>Сегодня</Typography>
            {display === 'list' && <List/>}
        </Box>
    );
};

export default NotesList;
