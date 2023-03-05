import {Container, Typography} from "@mui/material";

type Text = {
    body:string
    changeMode:() => void
}
const MarkDownText = ({body,changeMode}:Text) => {

    return (
        <Container onClick={() => changeMode()}>
            <Typography sx={{color:'white'}}>{body}</Typography>
        </Container>
    );
};

export default MarkDownText;
