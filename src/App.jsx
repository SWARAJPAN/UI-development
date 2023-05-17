import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Container, ThemeProvider, Typography } from '@mui/material'
import theme from './Theme/themeMUI'
import Navigation from './Navigation'
import MainContent from './MainContent'

function App() {
    return (
    
        <ThemeProvider theme={theme}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "stretch",
                height: "100vh",
                width: "100vw",
                backgroundColor: "#f5f5f5",
                overflow: "hidden",
                fontFamily: "Roboto",
                fontSize: "24px",
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 500,
                fontWeightBold: 700,
            }}> 
                <Navigation />
                <MainContent />
            </Box>
        </ThemeProvider>
        
  )
}

export default App
