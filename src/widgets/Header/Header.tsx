import React, {useContext} from 'react';
import ChangeDisplay from "./Features/ChangeDisplay";
import Delete from "./Features/Delete";
import Edit from "./Features/Edit";
import {Box} from "@mui/material";
import {Context} from "../../context";
import SearchNote from "./Features/SearchNote";

const Header = () => {

    const {display} = useContext(Context)


    return (
        <Box sx={{display: 'flex', width: '100%', flex: 1, height: 70}}>
            <Box sx={{
                display: 'flex',
                width: 400,
                backgroundColor: '#222327',
                padding: 2,
                justifyContent: 'space-between',
                borderRadius:'20px 0 0 0'
            }}>
                <ChangeDisplay/>
                <Delete/>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent:'space-between',
                width: 910,
                backgroundColor: display === 'list' ? '#1e1e1e' : '#222327',
                padding: 2,
                borderRadius:'0px 20px 0 0'
            }}>
                <Edit/>
                <SearchNote/>
            </Box>
        </Box>
    );
};

export default Header;
