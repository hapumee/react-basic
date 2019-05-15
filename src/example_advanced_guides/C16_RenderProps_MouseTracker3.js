import React from 'react';

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;

        return (
            <img src="/C16_cat1.png" style={{position: 'absolute', left: mouse.x, top: mouse.y}} />
        );
    }
}

class MouseWithCat extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{height: '100%', border: '1px solid red'}} onMouseMove={this.handleMouseMove}>

                {/* If you want to use other tags instead of <p> */}
                {/*<p>The current mouse position is ({this.state.x}, {this.state.y})</p>*/}
                <Cat mouse={this.state} />
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <MouseWithCat />
            </div>
        );
    }
}

export default MouseTracker;
