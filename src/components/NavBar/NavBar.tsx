import { AppBar, MenuItem, Toolbar } from "@mui/material"
import styled from "styled-components"


const NavBar = () => {

    const StyleToolbar = styled(Toolbar)(() => ({
        display: 'flex',
        justifyContent: 'space-evenly'
        }))

return(
    <>
        <AppBar position="absolute">
            <StyleToolbar>
                <MenuItem>
                    About
                </MenuItem>
                <MenuItem>
                    Skills
                </MenuItem>
                <MenuItem>
                    Project
                </MenuItem>
            </StyleToolbar>
        </AppBar>
    </>
)

}

export default NavBar