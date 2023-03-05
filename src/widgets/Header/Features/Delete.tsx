import DeleteIcon from '@mui/icons-material/Delete';
import {Box} from "@mui/material";
import {useState} from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const Delete = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box
                onClick={() => handleOpen()}
                sx={{
                    color: "#888",
                    fontSize: 30,
                    cursor: "pointer",
                    borderRadius: 2,
                    marginRight: 1,
                    padding: "3px"
                }}>
                <DeleteIcon/>
            </Box>
            <ConfirmDeleteModal open={open} handleClose={handleClose}/>
        </>

    );
};
export default Delete;
