import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '../styles/globals.css';
import PropTypes from 'prop-types';
import { deepOrange } from '@mui/material/colors';
import { StateProvider, useStateValue } from '../utils/reducers/StateProvider';
import GlobalAlertBar from '../components/GlobalAlertBar';
import Header from '../components/HeaderStateDemo';
import reducer from '../utils/reducers/reducer';
import CustomStyledCheckbox from '../components/CustomCheckboxDemo';
import { darkTheme, lightTheme, ThemeContext } from '../styles/theme';

export const initialState = {
  user: null,
  token: null,
  themeMode: 'dark',
  alertMessage: null,
  alertType: 'none',
  alertOpen: false,
};

function App(props) {
  const { Component, pageProps } = props;

  const [{ themeMode }] = useStateValue();
  let modeStorage = themeMode;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  console.log('App loaded');
  if (typeof window !== 'undefined') {
    modeStorage = sessionStorage.getItem('themeMode');
    if (modeStorage) {
      const ds = modeStorage;
      initialState.themeMode = ds;
    }
  }

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  React.useEffect(() => {
    // Update the background color based on the initial theme mode
    document.body.style.backgroundColor = themeMode === 'dark' ? deepOrange[900] : '#fff';
  }, [themeMode]);

  return (
    <StateProvider
      initialState={initialState}
      reducer={reducer}
    >
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={theme}>
          <Header>
            <title>ThemeTemplate</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Header>

          <CustomStyledCheckbox />

          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <GlobalAlertBar />
        </ThemeContext.Provider>
      </ThemeProvider>
    </StateProvider>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
