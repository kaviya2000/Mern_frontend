import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import '..Css/Design.css'

export function Header() {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
       
            <AppBar position="static">
                <Toolbar className='align'>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/'>Design</Link>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/test'>Title</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/contact'>Content</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/todo'>Todo</Link>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
        



        </div>
    );
}