import React, { Component } from 'react';
import { AppleMaps } from 'react-apple-mapkitjs';

class Map extends Component {

    constructor(props) {
      super(props);

      this.state = {
        electricPoints: []
      }

      this.getElectricPoints = this.getElectricPoints.bind(this)
    }

    render() {
      return (
        <AppleMaps 
        token="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRNQk43VDlaMlgifQ.eyJpYXQiOjE2MTkzNjY0MDAsImV4cCI6MTYyMDA4NjQwMCwiaXNzIjoiM0NZTEZUVDNCSCJ9.9F_uQF3Jt-fKzVY3DX_lPFt17lK2rcdTOvHXMfQKmSvz0GIXoqDHYZPceEiZWO65EDtGITBjaFvManyrAYjHMQ"/>
      )
    }
  }

  export default Map