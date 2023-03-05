import React, {useContext} from 'react';
import {Box} from "@mui/material";
import {INote} from "../../../entities/entities";
import {getCreatedAtHours} from "../../../shared/Time";
import {Context} from "../../../context";

const NoteBox = ({id, body, createdAt}: INote) => {

    const title = body?.substring(0, 10) || ''

    const {pickCurrentNote} = useContext(Context)

    return (
        <Box
            onClick={() => pickCurrentNote!(id!)}
            sx={{
                width: 250,
                height: 220,
                cursor: 'pointer',
                margin: 3,
                color: 'white',
                overflowX: "hidden",
            }}>
            <Box sx={{
                height: 140,
                borderRadius: 3,
                padding: 1,
                backgroundColor: '#1e1e1e'
            }}>
                {body}
            </Box>
            <Box sx={{textAlign:'center'}}>
                <Box sx={{mt: 1, fontWeight: 'bold'}}>{title ? title : 'Нет заголовка'}</Box>
                <Box sx={{color: 'gray'}}>{getCreatedAtHours(createdAt!)}</Box>
            </Box>


        </Box>
    );
};

export default NoteBox;
