import { createTheme } from "@mui/material";
export const theme = createTheme({
    palette: {
        primary: {
            main: "#1a1a1a",
        },
        secondary: {
            main: "#f5a623",
          },
          error: {
            main: "#d93025",
          },
            warning: {
            main: "#f5a623",
            },
        typography: {
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,

        },
        components: {
            MuiButton: {
              styleOverrides: {
                root: {
                  display: "flex",
                  textTransform: "none",
                  textAlign: "right",
                  fontSize: "2rem",
                  alignItems: "center",
                  justifyContent: "left",
                  padding: "5px 20px ",
                  width: "100%",
                
                },
              },
            },

    },


   

}


});

export default theme;
