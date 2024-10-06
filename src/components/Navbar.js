import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mihajlo Mitić
                </Typography>
                <Button color='inherit' component={Link} to="/">Home</Button>
                <Button color='inherit' component={Link} to="/education">Education</Button>
                <Button color='inherit' component={Link} to="/experience">Experience</Button>
                <Button color='inherit' component={Link} to="/projects">Projects</Button>
                <Button color='inherit' component={Link} to="/skills">Skills</Button>
                <Button color='inherit' component={Link} to="/about">About</Button>
                <Button color='inherit' component={Link} to="/contact">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;