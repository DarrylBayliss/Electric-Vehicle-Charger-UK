import React, { Component, Fragment } from 'react'
import { Map, Marker } from 'react-mapkit'
import NavBar from '../components/NavBar'

class MapView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      electricPoints: []
    }
  }

  componentDidMount () {
    this.getElectricPoints()
      .then(response => response.json())
      .then(latestElectricPoints => this.setState({ electricPoints: latestElectricPoints.ChargeDevice }))
      .catch(error => console.log(error))
  }

  async getElectricPoints () {
    return await fetch('http://localhost:3001/electricPoints')
  }

  render () {
    return (
      <Fragment>
        <NavBar/>
        <Map tokenOrCallback="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRNQk43VDlaMlgifQ.eyJpYXQiOjE2MjA0ODk0NTcsImV4cCI6MTY1MjAyNTQ1NywiaXNzIjoiM0NZTEZUVDNCSCJ9.wPCZsJLYa8H_vHsTzJ_j00O-rZUOOj2aIRwepHOOGfiv3pcLmjyYkZYnZwVy5NGSkangdjWJftgjc0h29hh7kw">

        {
        this.state.electricPoints.map(electricPoint => (
          <Marker key={electricPoint.ChargeDeviceId}
          latitude={Number(electricPoint.ChargeDeviceLocation.Latitude)}
          longitude={Number(electricPoint.ChargeDeviceLocation.Longitude)}
          title={electricPoint.ChargeDeviceName} />
        ))
        }
        </Map>
      </Fragment>
    )
  }
}

export default MapView
