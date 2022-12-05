import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {changeYear} from "../../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";

const FilmsYear = () => {

    const dispatch = useDispatch()
    const {data} = useSelector((store) => store.cinema)
    const [year, setYear] = useState('');
    let genreData = data.flat().filter((item,idx,arr) => arr.map(item => item.year).indexOf(item.year) === idx)
    let ats = genreData.map((item) => item.year)
    let years = ats.sort((a,b) =>a-b)
    useEffect(() => {
        dispatch(changeYear(year))
    },[year]);
    return (
        <Box className="films__filter-box" style={{position:"relative"}} sx={{ minWidth: 120 }}>
            <FormControl style={{position:"relative"}} fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Все годы</InputLabel>
                <Select style={{color: 'white',position:"relative"} }
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year}
                        label="fasf"
                        onChange={(e) => setYear(e.target.value)}
                >
                        <MenuItem className="films__filter-item" value={""}>По умолчанию</MenuItem>
                        {
                            years.map((item) => (
                                    <MenuItem className="films__filter-item" value={item}>{item}</MenuItem>
                                )
                            ).reverse()
                        }


                </Select>
            </FormControl>
        </Box>
    );
};

export default FilmsYear;