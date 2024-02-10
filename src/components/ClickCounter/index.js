// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="Head">
          The Button has been clicked
          <br /> <span className="counter-value">{count}</span> times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <div className="button-container">
          <button
            type="button"
            className="Button"
            onClick={this.onIncrementCount}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
