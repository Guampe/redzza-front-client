import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Profile from '../components/profile/Profile';


class editar extends Component { 
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item sm={4} xs={12}>
        <Profile />
        </Grid>
        <Grid item sm={8} xs={12}>
          
        </Grid>
      </Grid>
    );
  }
}


export default (editar);


/*

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Profile from '../components/profile/Profile';


import { connect } from 'react-redux';


class editar extends Component {
 
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
        
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

editar.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps)(editar);

*/