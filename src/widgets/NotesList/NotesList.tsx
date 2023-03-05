import {Box, Container, Typography} from "@mui/material";
import ChangeDisplay from "./features/ChangeDisplay";
import Delete from "./features/Delete";
import List from "./features/List";

const NotesList = () => {
    return (
        <Container sx={{
            backgroundColor: "#222327",
            width: "420px",
            borderRadius: "25px 0px 0px 25px",
            padding: 2
        }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <ChangeDisplay/>
                <Delete/>
            </Box>
            <Typography sx={{color: 'gray', fontWeight: '600', margin: '15px 10px 10px 0px'}}>Сегодня</Typography>
            <List/>
        </Container>
    );
};

export default NotesList;
