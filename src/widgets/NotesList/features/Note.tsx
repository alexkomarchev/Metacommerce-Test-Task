import {Box, Typography} from "@mui/material";
import {INote} from '../../../entities/entities'
import {useContext} from "react";
import {Context} from "../../../context";
import {getCreatedAtHours} from "../../../shared/Time";

const Note = ({id, body, createdAt}: INote) => {

    const {pickCurrentNote} = useContext(Context)

    return (
        <Box
            onClick={() => pickCurrentNote!(id)}
            sx={{
                cursor: 'pointer',
                backgroundColor: '#464646',
                paddingTop: 2,
                paddingBottom: 2,
                paddingRight: 4,
                paddingLeft: 4,
                marginTop: 1,
                borderRadius: 3
            }}>
            <Typography sx={{color: 'white', fontWeight: '600'}}>{body.substring(0,20)}</Typography>
            <Box sx={{display: 'flex'}}>
                <Typography sx={{color: 'white', fontWeight: '600', fontSize: 15}}>{getCreatedAtHours(createdAt)}</Typography>
                <Typography sx={{marginLeft: 1, color: 'gray', fontSize: 15}}>{body}</Typography>
            </Box>
        </Box>
    );
};

export default Note;
