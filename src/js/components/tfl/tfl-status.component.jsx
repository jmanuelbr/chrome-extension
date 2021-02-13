import { Component } from 'react';
import PropTypes from 'prop-types';

export default class TflDisruption extends Component {
    constructor (props) {
        super(props);
    }

    renderIcon(statusSeverityDescription) {
        const icon = (statusSeverityDescription.includes("Suspended")) ?
            chrome.runtime.getURL("../../../assets/alert.png") :
            chrome.runtime.getURL("../../../assets/warning.png");
        if (this.props.showicon) {
            return (
                <img className="icon" src={icon} />
            );
        }
    }

    render() {
        const {statusSeverityDescription, reason} = this.props.status;
        return (
            <div className="disruption">
                <div className="reason">
                    {this.renderIcon(statusSeverityDescription)}
                    <div className="title">
                        {statusSeverityDescription}
                    </div>
                    <div className="text">
                        <p>
                            {reason}
                        </p>
                    </div>
                    
                </div>
            </div>
        );
    }    
}

TflDisruption.propTypes = {
    status: PropTypes.shape({
        statusSeverityDescription: PropTypes.string,
        reason: PropTypes.string,
    }),
    showicon: PropTypes.bool
};
