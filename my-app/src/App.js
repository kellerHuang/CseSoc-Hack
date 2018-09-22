import React, { Component } from 'react';
import Countdown from './Countdown.js';
var ProgressBar = require('react-progressbar.js');
var Line = ProgressBar.Line


class App extends Component {
    render() {

        /*const options = {
            strokeWidth: 10
        };

        // For demo purposes so the container has some dimensions.
        // Otherwise progress bar won't be shown
        const containerStyle = {
            width: '200px',
            height: '200px'
        };*/

        return (
            <div className="App">
                <div className="App-header">
                    <h2>racer</h2>
                </div>

                {/* <Line
                    progress={0.1}
                    text={'Progress'}
                    options={options}
                    initialAnimate={true}
                    containerStyle={containerStyle}
                    containerClassName={'.progressbar'} />*/}


                <h3 className="title">Time till due:</h3>
                <Countdown date={`2018-09-23T00:00:00`} />
            </div>
        );
    }
}

export default App;