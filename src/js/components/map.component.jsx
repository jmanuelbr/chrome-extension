import React, { Component } from 'react';

export default class MapComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div id="plugin-map" className="map-container" style={{visibility: "hidden"}}>
                <iframe id="plugin-iframe"
                        src="https://www.google.com/maps/d/u/0/embed?mid=1MXRVAeWMcEAvTCWnDG-PARDcdxbvo4xd&ll=37.99280447401022%2C-1.1261454872802856&z=15"
                        height="650"
                        width="1100"
                        title="Murcia Barrios"
                        frameBorder="0"
                ></iframe>
            </div>
        );
    }
}