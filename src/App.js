import { CssBaseline, Grid } from '@material-ui/core';
import React from 'react';
import Header from './components/Header/Header';
import ListItem from './components/ListItem/ListItem';
import Map from './components/Map/Map';
function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid container item xs={12} md={4}>
          <ListItem/>
        </Grid>
        <Grid container item xs={12} md={8}>
          <Map/>
        </Grid>
      </Grid>
      
    </>
  );
}

export default App;
