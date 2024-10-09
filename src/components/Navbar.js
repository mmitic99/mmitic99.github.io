import { AppBar, Box, Button, Collapse, IconButton, List, ListItem, ListItemButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from "@mui/material/useMediaQuery";

const navElements = ['Home', 'Education', 'Experience', 'Projects', 'Skills', 'About', 'Contact']

export default function Navbar() {
    const small = useMediaQuery("(max-width:750px)");
    const full = useMediaQuery("(min-width:750px)");

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    return (<div>
        <AppBar position="static">
            <Toolbar >
                {small && (
                    <>
                        <List 
                            sx={{
                                width: '100%'
                            }}>
                            <ListItem secondaryAction={
                                <ListItemButton
                                size="large"
                                onClick={handleClick}
                                color="inherit">
                                    <MenuIcon/>
                                </ListItemButton>
                            }>
                                <Typography variant="h6" nowrap sx={{ flexGrow: 1 }}>
                                    Mihajlo Mitić
                                </Typography>
                            </ListItem>
                            <Collapse
                                in = {open}
                                timeout = "auto"
                                unmountOnExit
                            >
                                <List>
                                    {navElements.map((el) => (    
                                        <ListItem disablePadding>
                                            {el == 'Home' ? 
                                            <ListItemButton color='inherit' component={Link} to='/' onClick={handleClick}>{el}</ListItemButton>:
                                            <ListItemButton color='inherit' component={Link} to={'/'+ el.toLowerCase()} onClick={handleClick}>{el}</ListItemButton>}
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>

                        </List>
                    </>
                )}

                {full && (
                    <>                    
                        <Typography variant="h6" nowrap sx={{ flexGrow: 1, textDecoration: "none", boxShadow: "none", color: "inherit" }} component={Link} to="/">
                            Mihajlo Mitić
                        </Typography>

                        {navElements.map((el) => (
                            el == 'Home' ? 
                            <Button color='inherit' component={Link} to='/'>{el}</Button>:
                            <Button color='inherit' component={Link} to={'/'+ el.toLowerCase()}>{el}</Button>
                        ))}
                    </>
                )}

            </Toolbar>
        </AppBar></div>
    );
};

/*


                



*/