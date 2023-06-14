import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';
import { useStateValue } from '../utils/reducers/StateProvider';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.checkbox.main, // Use the checkbox color from the palette
  '&.Mui-checked': {
    color: theme.palette.checkbox.main, // Use the checkbox color from the palette when checked
  },
}));

export default function CustomStyledCheckbox() {
  const [{ themeMode }] = useStateValue();

  const ctheme = createTheme({
    palette: {
      themeMode,
      checkbox: {
        main: themeMode === 'dark' ? green[200] : grey[500], // Use different colors based on the theme mode
      },
    },
  });

  return (
    <ThemeProvider theme={ctheme}>
      <CustomCheckbox defaultChecked />
    </ThemeProvider>
  );
}
