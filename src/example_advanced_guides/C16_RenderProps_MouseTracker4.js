import React from 'react';

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;

        return (
            <img src="/C16_cat1.png" style={{position: 'absolute', left: mouse.x, top: mouse.y}} />
        );
    }
}

class Mouse extends React.Component {
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

                {/* provide prop function instead of <Cat> Component */}
                {/*<Cat mouse={this.state} />*/} {/* <-- statically */}
                {this.props.render(this.state)} {/* <-- dynamically */}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    renderTheCat(mouse) {
        return <Cat mouse={mouse} />;
    }

    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>

                {/* render function as a prop */}
                {/* a render prop is a function prop that a component uses to know what to render */}
                {/*<MouseWithCat />*/}
                {/* way 1:
                    <Mouse render={mouse => (<Cat mouse={mouse} />)} />*/}
                {/* way 2: */}
                    <Mouse render={this.renderTheCat} />
            </div>
        );
    }
}

export default MouseTracker;
