import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useContext} from "react";
import {Context} from "../../../context";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 280,
    color: 'white',
    backgroundColor: '#464646',
    p: 4,
    outline: 'none',
    borderRadius: '10px'
};

interface IConfirmDeleteModal {
    open: boolean,
    handleClose: () => void
}

export default function ConfirmDeleteModal({open, handleClose}: IConfirmDeleteModal) {

    const {deleteNote, currentNote} = useContext(Context)

    return (
        <Modal
            open={open}
            onClose={() => handleClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {currentNote ? 'Хотите удалить эту заметку ?' : 'Сначала выберите заметку'}
                </Typography>
                {currentNote && <Box sx={{display: 'flex', justifyContent: 'space-around', mt: 1}}>
                    <Button onClick={() => handleClose()} variant='outlined'>Отменить</Button>
                    <Button onClick={() => {
                        deleteNote!()
                        handleClose()
                    }} color='error' variant='contained'>Удалить</Button>
                </Box>}
            </Box>
        </Modal>
    );
}
