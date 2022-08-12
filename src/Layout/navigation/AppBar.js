import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link, useNavigate } from 'react-router-dom'
import { navItems } from '../../helpers/navItems';
import logo from '../../Assets/imgs/unify-logo-min.png';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(1),
        width: '50%',
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

// loop through both arrays and match them up to keep the correct link
const pages = ['Home', 'Netflix', 'Hulu', 'Amazon Prime', 'Disney Plus', 'Genres','Saves'];
const links = ['/', `../streaming/${navItems[0].name}/${navItems[0].id}`, `../streaming/${navItems[1].name}/${navItems[1].id}`,
    `../streaming/${navItems[2].name}/${navItems[2].id}`, `../streaming/${navItems[3].name}/${navItems[3].id}`, `/showall`, `/saves`
]

const ResponsiveAppBar = ({setSearch}) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    let navigate = useNavigate()
    const handleKeyDown = (event) => {

        if(event.key === 'Enter'){
            if(!event.target.value) return 
            setSearch(event.target.value)
            navigate("/search", {replace: true})
            event.target.value = ''
        }
    }
    return (
        <Box sx={{width: '100%'}}> 
            <AppBar position="static" sx={{ backgroundColor: '#e71d60'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                            UNIFY
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                          
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                
                            }}
                        >
                                {
                                    pages.map((page, i) => {
                                        const pageLinks = links[i]
                                        return (
                                            <Link style={{ textDecoration: 'none' }} to={`${pageLinks}`}> <Button
                                                key={page}
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'black', display: 'block', }}
                                            >
                                                {page}
                                            </Button> </Link>
                                        )
                                    })
                                }
                         
                        </Menu>
                    </Box>
                    
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        UNIFY
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {
                            pages.map((page, i) => {
                                const pageLinks = links[i]
                                return (
                                    <Link style={{textDecoration: 'none'}} to={`${pageLinks}`}> <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button> </Link> 
                                )
                            })
                        }
                    </Box>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onKeyDown={handleKeyDown}
                        />
                    </Search>
                </Toolbar>
            </Container>
        </AppBar>
        </Box> 
    );
};
export default ResponsiveAppBar;

