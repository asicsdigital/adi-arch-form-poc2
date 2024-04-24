'use client';

import React from 'react';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '../../components/dist';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", Helvetica, Arial, sans-serif'
  }
});

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
