import React, { Component } from 'react';

export default class LichessWidget extends Component {
    constructor (props) {
        super(props);
        this.state = {
			content: 'Ouch! Could not load'
        };
    };


    render() {

        let Iframe = React.createClass({     
            render: function() {
              return(         
                <div>          
                  <iframe src={this.props.src} height={this.props.height} width={this.props.width} frameborder="0"/>         
                </div>
              )
            }
          });

        return (
            <div className="lichess">
                <Iframe src="https://lichess.org/tv/frame?bg=auto&theme=auto" height="267" width="224"/>
            </div>
        );
    }

    
}



