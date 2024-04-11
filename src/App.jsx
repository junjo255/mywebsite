import React, {Component} from 'react'

import LogoPage from './components/LogoPage.jsx'
import Countdown from './components/Countdown.jsx'

export class App extends Component {
    render() {
        return (
            <div id="mainContainer">

                <div id="container">
                    <LogoPage/>

                    <div className="wrapper">
                        <ul>
                            <li className="linkedin">
                                <a href="https://www.linkedin.com/in/jun-jo/">
                                    <i
                                        className="fa fa-linkedin fa-2x"
                                        aria-hidden="true"/>
                                </a>
                            </li>
                            <li className="github">
                                <a href="https://github.com/junjo255">
                                    <i
                                        className="fa fa-github fa-2x"
                                        aria-hidden="true"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="phraseWeb">2026 FIFA World Cup</div>

                    <div className="phraseSoon">starts in</div>
                    <Countdown date={`2026-06-11T00:00:00`}/>
                </div>

            </div>
        )
    }
}

export default App
