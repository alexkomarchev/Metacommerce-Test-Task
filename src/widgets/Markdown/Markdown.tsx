import {Box, Typography} from "@mui/material";
import React, {useContext} from "react";
import EditField from "./features/EditField";
import {Context} from "../../context";


const Markdown = () => {

    const {currentNote, display} = useContext(Context)

    return (
        <Box sx={{
            width: display === 'list' ? 1000 : '100%',
            borderRadius:'0px 0 20px 0',
            backgroundColor:display === 'list' ? '#1e1e1e' : '#222327',
            overflowY: 'scroll'}}>
            {currentNote ? <EditField/> :
                <Typography sx={{color: 'gray', textAlign: 'center', margin: ' auto'}}>Выберите или создайте
                    заметку</Typography>}
        </Box>
    );
};

export default Markdown;
