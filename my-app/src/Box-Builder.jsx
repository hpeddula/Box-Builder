import React from 'react';
import './Box-Builder.css';
export default class BoxBuilder extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
            counter:0
        }
        this.AddBoxes = this.AddBoxes.bind(this);
        this.RemoveBoxes = this.RemoveBoxes.bind(this);
    }
    // Method to Add Boxes on to the Stack
    AddBoxes(i) {
        i +=1;
        this.setState({
            boxes: [...this.state.boxes,i],
            counter:i
        })
    }
    // Method to remove Boxes
    RemoveBoxes(i) {
        i -=1;
        const boxes = this.state.boxes.slice();
        boxes.pop();
        this.setState({
            boxes: boxes,
            counter:i
        });
    }
    render() {
        const count = this.state.boxes.length;
        const counter = this.state.counter;
        const boxList = this.state.boxes.map((box)=>
        {
            return(
            <span className="box" key={box.toString()}>{box}</span>
            );
        }
    );
    const countStyle={
        fontSize:count > 15 ? count+'px':'30px'
    }
        return (
            <div>
                <h1 className="text-center">Box Builder</h1>
                <h3 className="text-center">Start Building</h3>
                <div className="row btn-wrapper">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3">
                        <button className="btn btn-success" onClick={() => { this.AddBoxes(counter) }}>Add Box</button>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-danger" onClick={()=>{this.RemoveBoxes(counter)}}>Remove Box</button>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <div className="msg-wrapper">
                    {count > 0 &&
                        <div>
                            <p>{boxList}</p>
                            <p style={countStyle}>{count}</p>
                        </div>
                    }
                    {count === 0 && `No boxes`}
                </div>
            </div>
        );
    }
}