import React, { Component } from 'react'
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react'

export class MapView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      electricPoints: []
    }
  }

  render () {
    return (
      <Map google={this.props.google} zoom={14}>

      { this.state.electricPoints.map(electricPoint =>
        <Marker key={electricPoint.ChargeDeviceId}
        name={electricPoint.ChargeDeviceName}
        position={{ lat: electricPoint.ChargeDeviceLocation.Latitude, lng: electricPoint.ChargeDeviceLocation.Longitude }}/>
      )
      }
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('')
})(MapView)
