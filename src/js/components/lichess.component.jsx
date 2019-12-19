import React, { Component } from 'react';
import CreateReactClass from "create-react-class";



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
        let Iframe = CreateReactClass({     
            render: function() {
              return(         
                <div>          
                  <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>         
                </div>
              );
            }
          });

        return (
            <div className="lichess">
                <Iframe src="https://lichess.org/tv/frame" height="267" width="224"/>
            </div>
        );
    }
}



