import {Box, Typography} from "@mui/material";
import {INote} from '../../../entities/entities'
import {useContext} from "react";
import {Context} from "../../../context";
import {getCreatedAtHours} from "../../../shared/Time";

const Note = ({id, body, createdAt}: INote) => {

    const {pickCurrentNote} = useContext(Context)

    const title = body?.substring(0,10) || ''

    const dopText = body?.substring(10) || ''

    console.log(body)

    return (
        <Box
            onClick={() => pickCurrentNote!(id!)}
            sx={{
                cursor: 'pointer',
                backgroundColor: '#464646',
                paddingTop: 2,
                paddingBottom: 2,
                paddingRight: 4,
                paddingLeft: 4,
                marginTop: 1,
                borderRadius: 3,
                overflowX:"hidden",
                maxHeight:150
            }}>
            <Typography sx={{color: 'white', fontWeight: '600'}}>{title ? title : 'Нет заголовка'}</Typography>
            <Box sx={{display: 'flex'}}>
                <Typography sx={{color: 'white', fontWeight: '600', fontSize: 15}}>{getCreatedAtHours(createdAt!)}</Typography>
                <Typography sx={{marginLeft: 1, color: 'gray', fontSize: 15}}>{dopText ? dopText: 'Нет дополнительного текста'}</Typography>
            </Box>
        </Box>
    );
};

export default Note;
