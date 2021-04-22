import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';
import img from"./img.png";
import "./Navbar.css";
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import { Avatar } from '@material-ui/core';


class Navbar extends Component {
  render() {
    const { classes, authenticated } = this.props;
    return (
      <AppBar>
                                    
        <Toolbar>

          <div className="imageRedzza">
              <img src={img} margin="left" height="20px" alt="redzza"/>      
          </div>



          <div className="nav-container">
          {authenticated ? ( 
            
        
            <Fragment>
               
                <SearchIcon/><input type="text" />
                  

              <PostScream />
              <Link to="/">
                <MyButton tip="Home"> 
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
              
              


              <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/editar"
            >
              Editar Mi Perfil
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/editar"
            >
              <Avatar margin="rigth" height="20px"/>
                    
              </Button>
            </Fragment>
            

          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
          </div>

         
        </Toolbar>
        
        
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});


export default connect(mapStateToProps)(Navbar);