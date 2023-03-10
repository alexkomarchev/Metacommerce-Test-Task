import {Box} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import {useContext} from "react";
import {Context} from "../../../context";


const Edit = () => {

    const {addNote, pickCurrentNote} = useContext(Context)

    return (
        <Box sx={{width: '150px', display: 'flex', justifyContent: 'space-between'}}>
            <Box onClick={() => {
                pickCurrentNote!()
                addNote!()
            }}>
                <EditIcon sx={{
                    color: "#888",
                    fontSize: 29,
                    cursor: "pointer",
                    borderRadius: 2,
                    marginRight: 1,
                    padding: "3px"
                }}
                />
            </Box>
            <Box>
                <FormatColorTextIcon sx={{
                    color: "#888",
                    fontSize: 29,
                    cursor: "pointer",
                    borderRadius: 2,
                    marginRight: 1,
                    padding: "3px"
                }}/>
            </Box>
        </Box>
    );
};

export default Edit;
