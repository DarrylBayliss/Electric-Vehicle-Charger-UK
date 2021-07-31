import React, { Component } from 'react'
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%'
}

export class MapView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      electricPoints: []
    }
  }

  render () {
    const electricPoints = this.state.electricPoints

    return (
      <Map>
        google={this.props.google}
        zoom={5}
        style={mapStyles}
        initialCenter={
          {
            lat: 53.4105800,
            lng: -2.9779400
          }
        }
        { electricPoints.map(electricPoint =>
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
