import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

class Popup extends React.Component {
    constructor (props) {
        super(props);
        this.closePopup = this.closePopup.bind(this);
    }
    closePopup() {
        this.props.closePopup();
    }
    render() {
        return (
            <div className='popup'>
                <div className="title">Train Disruptions</div>
                <div className="close-button">
                    <img 
                        src={chrome.runtime.getURL("../../assets/close-article.png")}
                        onClick={this.closePopup}/>      
                </div>
                <div className="disruption-container">
                    {_map(this.props.disruptions, (status, i) => {
                        return (
                            <div className="disruption" key={i}>
                                <div className="category">{status.category}</div>
                                <div className="description">{status.description}</div>
                                <div className="additional-info"
                                    dangerouslySetInnerHTML={{ __html: status.additionalInfo }}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

Popup.propTypes = {
    disruptions: PropTypes.array.isRequired,
    closePopup: PropTypes.func.isRequired
};

export default Popup;
