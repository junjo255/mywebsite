import React, { Component } from 'react'

import LogoPage from './components/LogoPage.jsx'
import Countdown from './components/Countdown.jsx'

export class App extends Component {
  render() {
    return (
      <div>
        
        <LogoPage />

        <div className="phraseWeb">2022 FIFA World Cup</div>
        
        <div className="phraseSoon">starts in</div>
        <Countdown date={`2022-11-21T00:00:00`} />
      </div>
    )
  }
}

export default App
