import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: '',
    },
    marginRight: theme.spacing(0),
    marginLeft: 1,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    '&:hover': {
        color: 'green'
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function SearchInput({setHomepageSearch, homepageSearch}) {
    let navigate = useNavigate();



    const handleKeyDown = event => {
        

        if (event.key === 'Enter') {

            setHomepageSearch(event.target.value)
            navigate("/search", { replace: true });
            event.target.value = ''
              
        }
    };
    return (
        <Box sx={{ marginTop: '3rem', padding: '1rem' }}>
            <Box sx={{ flexGrow: 1, width: '100%'}}>
                <Search sx={{ backgroundColor: '#e5eaf5' }}>
                    <SearchIconWrapper >
                        <SearchIcon sx={{ color: 'black', zIndex: 10}} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onKeyDown={handleKeyDown}
                    />
                </Search>
            </Box>
        </Box>
    );
}