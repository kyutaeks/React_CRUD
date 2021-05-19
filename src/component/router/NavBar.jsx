import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Login from '../user/Login';

const NavBar = () => {
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={style}>
            React User Application
          </Typography>
          <Link href="/login" color='#fff' >Login</Link>
          {/* <Button color="inherit" href="">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const style = {
  flexGrow: 1
}

export default NavBar;