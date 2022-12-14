import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {changeContent} from "../../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";

const FilmsContent = () => {
    const dispatch = useDispatch();
    const [contentState, setContentState] = useState('')
    const {status,error,data} = useSelector((store) => store.cinema)
    useEffect(() => {
        dispatch(changeContent(contentState))
    }, [contentState])
    let genreData = data.map((item) => item.content ).flat().filter((item,idx,arr) => arr.map(item => item.desc).indexOf(item.desc) === idx)


    return (
        <Box className="films__filter-box" sx={{minWidth: 150}} style={{position:"relative"}}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Содержание</InputLabel>
                <Select style={{color: 'white'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={contentState}
                        label="fasf"
                        onChange={(e) => setContentState(e.target.value)}
                >
                    <MenuItem className="films__filter-item" value="">По умолчанию</MenuItem>
                    {
                            genreData.map((item) => (

                                    <MenuItem className="films__filter-item" value={item.desc}>{item.desc}</MenuItem>

                                )
                            )
                        }
                </Select>
            </FormControl>
        </Box>
    );
};

export default FilmsContent;