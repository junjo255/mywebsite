import React, { Component } from 'react'

import LogoPage from './components/LogoPage.jsx'
import Countdown from './components/Countdown.jsx'
// import PdfViewer from './components/PdfViewer.jsx'


export class App extends Component {
  render() {
    return (
      <div>
        
        <LogoPage />

        <div className="phraseWeb">website getting</div>
        
        <div className="phraseSoon">ready to launch in</div>
        <Countdown date={`2019-04-24T00:00:00`} />
        {/* <PdfViewer /> */}
       
      </div>
    )
  }
}

export default App
