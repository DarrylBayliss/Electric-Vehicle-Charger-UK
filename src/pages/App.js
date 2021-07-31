import React, { Component, Fragment } from 'react'
import MapView from '../components/MapView.js'
import NavBar from '../components/NavBar.js'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      search: '',
      electricPoints: []
    }

    this.onSearchButtonTapped = this.onSearchButtonTapped.bind(this)
  }

  async getElectricPoints () {
    return await fetch('http://localhost:3001/electricPoints')
  }

  async getElectricPointsForTown (town) {
    return await fetch(`http://localhost:3001/electricPoints?town=${town}`)
  }

  onSearchButtonTapped (searchText) {
    this.setState({ electricPoints: [] })
    this.getElectricPointsForTown(searchText)
      .then(response => response.json())
      .then(latestElectricPoints => this.setState({ electricPoints: latestElectricPoints.ChargeDevice }))
      .catch(error => console.log(error))
  }

  render () {
    return (
      <div>
      <Fragment>
      <NavBar onSearchButtonTapped={this.onSearchButtonTapped}/>
      <MapView electricPoints={this.state.electricPoints}/>
      </Fragment>
      </div>
    )
  }
}

export default App
