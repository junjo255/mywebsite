import React, { Component } from 'react'

import LogoPage from './components/LogoPage.jsx'
import Countdown from './components/Countdown.jsx'

export class App extends Component {
  render() {
    return (
      <div>
        
        <LogoPage />

      <div className="wrapper">
          <ul>
              <li className="facebook"><a href="#"><i className="fa fa-facebook fa-2x" aria-hidden="true"/></a>
              </li>
              <li className="twitter"><a href="#"><i className="fa fa-twitter fa-2x" aria-hidden="true"/></a>
              </li>
              <li className="instagram"><a href="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"/></a>
              </li>
              <li className="google"><a href="#"><i className="fa fa-google fa-2x" aria-hidden="true"/></a></li>
              <li className="whatsapp"><a href="#"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"/></a>
              </li>
          </ul>
      </div>
        <div className="phraseWeb">2022 FIFA World Cup</div>
        
        <div className="phraseSoon">starts in</div>
        <Countdown date={`2022-11-21T00:00:00`} />
      </div>
    )
  }
}

export default App
