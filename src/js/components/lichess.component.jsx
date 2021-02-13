import { Component } from 'react';

export default class LichessWidget extends Component {
    constructor (props) {
        super(props);
        this.state = {
			    content: 'Ouch! Could not load Lichess data'
        };
    };

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div className="lichess">
                <iframe src="https://lichess.org/tv/frame" height="267" width="224"/>
            </div>
        );
    }
}