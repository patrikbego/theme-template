import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, ThemeProvider, styled,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { deepOrange, grey } from '@mui/material/colors';
import { useStateValue } from '../utils/reducers/StateProvider';
import { darkTheme, lightTheme } from '../styles/theme';

const CustomAppBar = styled(AppBar)(
  ({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
    // backgroundColor: theme.palette.mode === 'dark' ? grey[800] : deepOrange[500],
    backgroundColor: theme.palette.primary.main,
  }),
);

export default function Header() {

  const [{ themeMode }, dispatch] = useStateValue();

  const changeTheme = () => {
    console.log('changing theme', themeMode);
    dispatch({
      type: 'SET_THEME',
      themeMode: themeMode === 'light' ? 'dark' : 'light',
    });
  };

  const htheme = themeMode === 'light' ? lightTheme : darkTheme;

  const iconButtonStyle = {
    backgroundColor: themeMode === 'dark' ? grey[900] : deepOrange[500],
  };

  return (
    <ThemeProvider theme={htheme}>
      <CustomAppBar theme={htheme} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <IconButton color="inherit" onClick={changeTheme} style={iconButtonStyle} data-testid="theme-change-button">
            {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Toolbar>
      </CustomAppBar>
    </ThemeProvider>
  );
}
