import {Box, Typography} from "@mui/material";
import List from "./features/List";
import React, {useContext} from "react";
import {Context} from "../../context";

const NotesList = () => {

    const {display} = useContext(Context)

    return (
        <Box sx={{width: 425, backgroundColor: '#222327', padding: 2,borderRadius:'0px 0px 0px 20px'}}>
            <Typography
                sx={{color: 'gray', fontWeight: '600', margin: '0px 10px 10px 0px'}}>Сегодня</Typography>
            {display === 'list' && <List/>}
        </Box>
    );
};

export default NotesList;
