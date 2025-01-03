import React from 'react';
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
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.main
    }
}));

export default function Navbar() {
    const theme = useTheme();

    return (
        <Box className="top-0 grid grid-cols-2 md:grid-cols-3 gap-4 h-16 border border-yellow-300">
            <Box className={`px-4 box-border text-start place-content-center font-bold text-xl text-[${theme.palette.secondary.dark}]`}>jerry.id</Box>
            <Box className="px-4 box-border place-content-center grid grid-flow-col">
            <Paper
                component="form"
                sx={{
                    p: '2px 2px 2px 2px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 380,
                    backgroundColor: theme.palette.secondary.light,
                    color: theme.palette.secondary.main,
                    boxShadow: 'none',
                    borderRadius: '25px'
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
                        color: '#000000',
                    }}
                    placeholder="Search for songs, artists or albums"
                    inputProps={{ 'aria-label': 'search google maps' }}
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
            </Box>
            <Box className="px-4 box-border grid grid-flow-col gap-4 justify-end">
            <Stack spacing={2} direction="row" alignItems="center">
                <CustomButton size="medium" variant="outlined">Sign in</CustomButton>
                <CustomButton size="medium" variant="outlined">Sign up</CustomButton>
            </Stack>
            </Box>
        </Box>
    );
}
