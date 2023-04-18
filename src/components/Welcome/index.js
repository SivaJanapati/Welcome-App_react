import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: false}))
  }

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribe: true}))
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bgColor">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>
        {isSubscribe ? (
          <button className="button" type="button" onClick={this.onSubscribe}>
            Subscribe
          </button>
        ) : (
          <button className="button" type="button" onClick={this.onSubscribed}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
