import {Container, Typography} from "@mui/material";
import {useContext} from "react";
import Edit from "./features/Edit";
import EditField from "./features/EditField";
import {Context} from "../../context";


const Markdown = () => {

    const {currentNote} = useContext(Context)

    return (
        <Container sx={{
            backgroundColor: "#1e1e1e",
            width: "1000px",
            height: "100%",
            borderRadius: "0px 25px 25px 0px",
            borderLeft: 1,
            padding: 2
        }}>
            <Edit/>
            {currentNote ? <EditField/> : <Typography sx={{color:'gray',textAlign:'center',margin:' auto'}}>Выберите или создайте заметку</Typography>}
        </Container>
    );
};

export default Markdown;
