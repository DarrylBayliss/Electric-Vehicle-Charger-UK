import React, { Component, Fragment } from 'react'

class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      search: ''
    }

    this.onHandleSearch = this.onHandleSearch.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput (event) {
    this.setState({ search: event.target.value })
  }

  onHandleSearch (event) {
    this.props.onSearchButtonTapped(this.state.search)
  }

  render () {
    return (
        <Fragment>
          <div style={navStyle}>
            <h1 style={itemStyle}>Electric Vehicle Charger UK</h1>
            <input style={itemStyle} text="text" placeholder={'London'} value={this.state.search} onInput={this.updateInput}></input>
            <button style={itemStyle} onClick={this.onHandleSearch}>Search </button>
            <button style={itemStyle}>About</button>
          </div>
        </Fragment>
    )
  }
}

const navStyle = {
  width: 'auto',
  display: 'flex',
  alignItems: 'center'
}

const itemStyle = {
  float: 'left',
  marginLeft: '10em'
}

export default NavBar
