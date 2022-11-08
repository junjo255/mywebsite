import React, {Component} from 'react'

import LogoPage from './components/LogoPage.jsx'
import Countdown from './components/Countdown.jsx'

export class App extends Component {
    render() {
        return (
            <div id="mainContainer">

                <div className="container">
                    <LogoPage/>
                </div>

                <div className="container">
                    <div className="wrapper">
                        <ul>
                            <li className="linkedin">
                                <a href="#">
                                    <i
                                        className="fa fa-linkedin fa-2x"
                                        aria-hidden="true"/>
                                </a>
                            </li>
                            <li className="github">
                                <a href="#">
                                    <i
                                        className="fa fa-github fa-2x"
                                        aria-hidden="true"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="phraseWeb">2022 FIFA World Cup</div>

                    <div className="phraseSoon">starts in</div>
                    <Countdown date={`2022-11-21T00:00:00`}/>
                </div>
            </div>
        )
    }
}

export default App
