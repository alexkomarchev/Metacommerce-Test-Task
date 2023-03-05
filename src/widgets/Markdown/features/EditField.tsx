import {useContext, useEffect, useReducer, useRef} from 'react';
import {Box, TextField, Typography} from "@mui/material";
import {Context} from "../../../context";
import {INote} from "../../../entities/entities";

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

    const {notes, currentNote, updateNote} = useContext(Context)

    const inpRef = useRef<HTMLInputElement>()

    const note = notes?.filter(note => note.id === currentNote)[0]

    const initialState: INote = {
        body: note!.body,
        createdAt: note!.createdAt,
        id: note!.id,
    };

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        inpRef.current?.focus()
        if (currentNote !== null) {
            dispatch({type: 'setBody', payload: note!.body})
            dispatch({type: 'setCreatedAt', payload: note!.createdAt})

        }

    }, [currentNote])

    useEffect(() => {
        updateNote!(state.body)
    }, [state.body])

    return (
        <Box>
            <Typography sx={{
                color: 'gray',
                margin: '5px auto',
                textAlign: 'center'
            }}>{state.createdAt}</Typography>
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
                autoFocus
                fullWidth
                multiline
            />
        </Box>
    );
};

export default EditField;
