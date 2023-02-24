import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/circles.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
            <img src={logo} alt="Book Store App" height="50px" className={classes.image} />
            <strong >BooK-IT</strong>
          </Typography>
          <div className={classes.grow} />
          <div>
            <button type="button" class="btn btn-outline-light text-dark btn-sm" data-bs-toggle="modal" data-bs-target="#signInModal">Sign-In</button>
          </div>

          <div className="modal fade" id="signInModal">
            <div className="modal-dialog modal-sm modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Modal Heading</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  Modal body..
                </div>
                <div className="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>

          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
