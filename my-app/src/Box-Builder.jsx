import React from 'react';
import './Box-Builder.css';
export default class BoxBuilder extends React.Component {
    render() {
        return(
        <div>
            <h1 className="text-center">Box Builder</h1>
            <h3 className="text-center">Start Building</h3>
            <div className="row btn-wrapper">
                <div className="col-sm-3"></div>
                <div className="col-sm-3">
                    <button className="btn btn-success">Add Box</button>
                </div>
                <div className="col-sm-3">
                    <button className="btn btn-danger">Remove Box</button>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
        );
    }
}