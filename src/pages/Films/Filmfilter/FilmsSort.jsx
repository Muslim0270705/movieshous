import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {changeGenre} from "../../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";

const FilmsSort = () => {
    const dispatch = useDispatch();
    const [genreState, setGenreState] = useState('')
    const {data} = useSelector((store) => store.cinema)
    useEffect(() => {
        dispatch(changeGenre(genreState))
    }, [genreState])

    let genreData = data.map((item) => item.genre ).flat().filter((item,idx,arr) => arr.map(item => item.desc).indexOf(item.desc) === idx)

    console.log(genreData)
    return (
        <Box className="films__filter-box" sx={{minWidth: 150}}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Жанр</InputLabel>
                <Select style={{color: 'white'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={genreState}
                        label="fasf"
                        onChange={(e) => setGenreState(e.target.value)}
                >
                    <MenuItem className="films__filter-item" value={""}>По умолчанию</MenuItem>
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

export default FilmsSort;