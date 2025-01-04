import React, { useState } from 'react';
import {
    Box,
    Button,
    Stack,
    styled,
    useTheme,
    Paper,
    InputBase,
    IconButton,
    Tooltip
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import LoginIcon from '@mui/icons-material/Login';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    height: '40px',
    ":hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main
    }
}));

const CustomIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.secondary.main,
    ":hover": {
        color: theme.palette.white,
        backgroundColor: theme.palette.secondary.main
    }
}));

const SearchBar = ({ theme, focus, setFocus }) => {
    return (
        <Paper
            component="form"
            className='w-[350px] lg:w-[500px]'
            sx={{
                p: '2px 2px 2px 2px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.secondary.main,
                boxShadow: 'none',
                borderRadius: '25px',
                border: focus ? `2px solid ${theme.palette.secondary.dark}` : 'none'
            }}
        >
            <Tooltip title="Search" arrow>
                <CustomIcon
                    type="button"
                    aria-label="search"
                    onClick={() => alert('Search')}
                >
                    <SearchIcon />
                </CustomIcon>
            </Tooltip>
            <InputBase
                sx={{
                    ml: 1,
                    flex: 1,
                    color: '#000000'
                }}
                placeholder="Search for songs, artists or albums"
                inputProps={{ 'aria-label': 'search google maps' }}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}

            />
            <Tooltip title="Browse" arrow>
                <CustomIcon
                    type="button"
                    aria-label="browse"
                    onClick={() => alert('Browse')}
                >
                    <AutoAwesomeMotionIcon />
                </CustomIcon>
            </Tooltip>
        </Paper>
    );
};

const Logo = ({ theme }) => {
    return (
        <IconButton
            sx={{
                color: theme.palette.white,
                backgroundColor: theme.palette.secondary.main,
                ':hover': {
                    color: theme.palette.white,
                    backgroundColor: theme.palette.secondary.main
                }
            }}
            type="button"
            aria-label="home"
            onClick={() => alert('Home')}
        >
            <SubscriptionsIcon />
        </IconButton>
    );
}

export default function Navbar() {
    const theme = useTheme();

    const [focus, setFocus] = useState(false);

    return (
        <Box className="top-0 grid grid-cols-3 gap-4 h-16 border border-yellow-300">
            <Box className={`px-4 box-border text-start place-content-center font-bold text-xl text-[${theme.palette.secondary.dark}]`}>
               <Logo theme={theme} />
            </Box>
            <Box className="hidden md:grid px-4 box-border place-content-center grid-flow-col">
                <SearchBar
                    theme={theme}
                    focus={focus}
                    setFocus={setFocus}
                />
            </Box>
            <Box className="hidden md:grid px-4 box-border grid-flow-col gap-4 justify-end">
                <Stack direction="row" alignItems="center">
                    <Tooltip title="Login" arrow>
                        <CustomIcon
                            type="button"
                            aria-label="login"
                            onClick={() => alert('Login')}
                        >
                            <LoginIcon />
                        </CustomIcon>
                    </Tooltip>
                </Stack>
            </Box>
        </Box>
    );
}
