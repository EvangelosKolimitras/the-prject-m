

import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'


/**
 * Main config theme
 * @param props 
 */
const PRJCTmTheme = (props: any) => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#ffffff"
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default PRJCTmTheme;