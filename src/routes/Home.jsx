import React from 'react'

import Container from '../components/Container'
import Searchbar from '../components/Searchbar'
import Grid from '../components/Grid'

export default function Home() {
    
  return (
  <Container>
    <h1>Discover Playlists</h1>
    <Searchbar />
    <Grid>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </Grid>
  </Container>
  )
  
  
}
