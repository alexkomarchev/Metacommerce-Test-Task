import {useContext, useEffect, useReducer, useRef, useState} from 'react';
import {Box, TextField, Typography} from "@mui/material";
import {getCreatedAt} from "../../../shared/Time";
import {Context} from "../../../context";
import {getRandomId} from "../../../shared/getRandomId";
import {INote} from "../../../entities/entities";

const initialState: INote = {
    body: '',
    createdAt: '',
    id: 0,
};

function reducer(state: INote, action: any) {
    switch (action.type) {
        case 'setBody':
            return {...state, body: action.payload};
        case 'setCreatedAt':
            return {...state, createdAt: action.payload};
        default:
            throw new Error();
    }
}

const EditField = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const {notes, currentNote} = useContext(Context)

    useEffect(() => {

        if (currentNote !== null) {
            const note = notes?.filter(note => note.id === currentNote)[0]

            dispatch({type: 'setBody', payload: note!.body})
            dispatch({type: 'setCreatedAt', payload: note!.createdAt})

        }
    }, [currentNote])


    useEffect(() => {
        if (notes !== null) {
            localStorage.setItem('notes', JSON.stringify([...notes, {
                body: state.body,
                createdAt: state.createdAt,
                id: refId
            }]))
            return
        }

        localStorage.setItem('notes', JSON.stringify([{
            body: state.body,
            createdAt: state.createdAt,
            id: refId
        }]))
    }, [state.body])

    const {current: refId} = useRef<number>(getRandomId())

    const {current: refTime} = useRef<string>(getCreatedAt())

    return (
        <Box>
            <Typography sx={{
                color: 'gray',
                margin: '5px auto',
                textAlign: 'center'
            }}>{refTime}</Typography>
            <TextField
                value={state.body}
                onChange={(e) => dispatch({type: 'setBody', payload: e.target.value})}
                inputProps={{
                    style: {
                        color: 'white',
                    }
                }}
                sx={{
                    "& fieldset": {border: 'none'},
                }}
                focused={false}
                fullWidth
                multiline
            />
        </Box>
    );
};

export default EditField;
