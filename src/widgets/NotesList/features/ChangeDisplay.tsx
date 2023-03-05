import {Box} from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WidgetsIcon from '@mui/icons-material/Widgets';
import {useState} from "react";

type Display = 'list' | 'box'

const ChangeDisplay = () => {

    const [display, setDisplay] = useState<Display>("list")

    const DisplayChange = (display: Display) => {
        setDisplay(display)
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
        </Box>
    );
};

export default ChangeDisplay;