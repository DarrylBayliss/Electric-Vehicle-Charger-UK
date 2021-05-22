import React, { Component } from 'react'
import { Map } from 'react-mapkit'

class MapView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      electricPoints: []
    }
  }

  render () {
    return (
      <Map tokenOrCallback="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRNQk43VDlaMlgifQ.eyJpYXQiOjE2MjA0ODk0NTcsImV4cCI6MTY1MjAyNTQ1NywiaXNzIjoiM0NZTEZUVDNCSCJ9.wPCZsJLYa8H_vHsTzJ_j00O-rZUOOj2aIRwepHOOGfiv3pcLmjyYkZYnZwVy5NGSkangdjWJftgjc0h29hh7kw"/>
    )
  }
}

export default MapView
