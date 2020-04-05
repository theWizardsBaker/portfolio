import React, { useEffect } from 'react';


export default class EMDR extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imageSize: 50,
      width: 0,
      position: 0,
    }
    this.getWindowWidth = this.getWindowWidth.bind(this)
  }

  componentDidMount() {
    this.getWindowWidth()
    window.addEventListener('resize', this.getWindowWidth)
    //80bpm
    const bpm = (80/60)

    const interval = setInterval(() => {
      let endScreen = this.state.width - this.state.imageSize
      this.setState({ position: this.state.position > 0 ? 0 : endScreen })
    }, (1/bpm) * 1000);

    return () => clearInterval(interval);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowWidth)
  }

  getWindowWidth() {
    this.setState({ width: window.innerWidth })
  }

  render() {
    return (
      <div className="emdr">
        <div className="emdr-container">
          <img src={'/squirrel.png'}
               className="emdr-image"
               name="squirrel"
               style={{ left: this.state.position }}
               height={this.state.imageSize}
               width={this.state.imageSize}
               />
        </div>
      </div>
    )
  }

}
