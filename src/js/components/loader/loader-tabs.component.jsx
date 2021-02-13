import { Component } from 'react';
import Loader from './loader.component';

export default class LoaderTabs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loader-tabs">
                <Loader/>
            </div>
        );
    }
}