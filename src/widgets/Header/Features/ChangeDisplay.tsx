import {Box} from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useContext} from "react";
import {Display} from "../../../entities/entities";
import {Context} from "../../../context";


const ChangeDisplay = () => {

    const {displayChange, display, pickCurrentNote} = useContext(Context)
    const DisplayChange = (display: Display) => {
        displayChange!(display)
    }

    return (
        <Box sx={{display: "flex"}}>
            <Box onClick={() => DisplayChange('list')}>
                <FormatListBulletedIcon
                    sx={{
                        color: "#888",
                        fontSize: 29,
                        cursor: "pointer",
                        backgroundColor: `${display === 'list' && "#afafaf"}`,
                        borderRadius: 2,
                        marginRight: 1,
                        padding: "3px"
                    }}
                />
            </Box>
            <Box onClick={() => DisplayChange('box')}>
                <WidgetsIcon sx={{
                    color: "#888",
                    fontSize: 29,
                    cursor: "pointer",
                    backgroundColor: `${display === 'box' && "#afafaf"}`,
                    borderRadius: 2,
                    padding: "3px"
                }}/>
            </Box>
            {display === 'box' && <Box onClick={() => pickCurrentNote!(-1)}>
                <ArrowBackIosIcon sx={{
                    color: "#888",
                    fontSize: 29,
                    cursor: "pointer",
                    borderRadius: 2,
                    padding: "3px",
                    marginLeft: 2,
                }}/>
            </Box>}
        </Box>
    );
};

export default ChangeDisplay;
