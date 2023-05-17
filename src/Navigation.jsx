import { Avatar, Box, Button, Container, Divider, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export default function Navigation() {
  return (
    <div className='side-bar'>
   
     <Avatar sx={{ width: 100, height: 100, p: 5, m: 2 }} />
     <Box sx={
            {
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                alignItems: "left",
                width: "100%",
                pl: "0.7rem"

            }  
     }>
        <Typography variant="h4" component="h4" gutterBottom sx={{paddingLeft: 2}}>
        User Name
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom sx={{paddingLeft: 2}}>
            Designer
        </Typography>
        </Box>
        <Box className = "buttons" >
            <Button variant="text" href="#text-buttons" sx={{display : "flex", justifyContent: "left" }} startIcon={<CottageOutlinedIcon/>}>
                Home
            </Button>
            <Button variant="text" href="#text-buttons"  sx={{display : "flex", justifyContent: "left" }} startIcon={<DashboardIcon/>}>
                Dashboard
            </Button> 
            <Button variant="text" href="#text-buttons"  sx={{display : "flex", justifyContent: "left" }} startIcon={<LayersIcon/>}>
                Projects
            </Button>
            <Button variant="text" href="#text-buttons"  sx={{display : "flex", justifyContent: "left" }} startIcon={<AssignmentIcon/>}>
                Tasks
            </Button>
            <Button variant="text" href="#text-buttons"  sx={{display : "flex", justifyContent: "left" }} startIcon={<AssessmentIcon/>}>
                Reporting 
            </Button>
            <Button variant="text" href="#text-buttons"  sx={{display : "flex", justifyContent: "left" }} startIcon= {<PeopleAltIcon/>} >
                Users
            </Button>
            <Box sx={{
                position: "absolute",
                bottom: "0",
                width: "12vw",            
            }} >
                <Divider sx={{marginTop: "1rem", marginBottom: "1rem"}}/>

                <Button variant="text" href="#text-buttons"  sx={{display : "flex", justifyContent: "left" }}>
                     Notifications
                </Button>
                <Button variant="text" href="#text-buttons"  sx={{display : "flex", justifyContent: "left" }}>
                Support 
                </Button>
                <Button variant="text" href="#text-buttons"  sx={{display : "flex", justifyContent: "left" }}>
                     Settings
                </Button>
            </Box>
            </Box>
        

    
    </div>

  )
}
