import React from 'react';
import './Box-Builder.css';
export default class BoxBuilder extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            boxes:['Harsha'],
        }
    }
    render() {
        const count = this.state.boxes.length;
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
            <div className="msg-wrapper">
                {count >0 && <p className="counter">{count}</p>}
                {count == 0 && `No boxes`
                } 
            </div>
        </div>
        );
    }
}