import React, { Component } from 'react';

class ComponentLifecycle extends Component {
	constructor(props) {
		super(props);
		this.state = {"text" : ""};
		this.handleStop = this.handleStop.bind(this);
		console.log("constructor - Component 가 생성될 때 가장 처음 발생합니다.");
	}

	handleStop() {
		clearInterval(this.timeId);
		// Component 가 종료되면 componentWillUnmount() 에서 수행될 것임
		console.log("componentWillUnmount - Component 가 종료되었습니다.");
	}

	componentWillMount() {
		console.log("componentWillMount - React Element 가 Dom 에 마운트(render)되기 전에 발생합니다.");
	}

	componentDidMount() {
		console.log("componentDidMount - Component 생성이 완료되었습니다.");
		this.timeId = setInterval(
			() => this.setState({"text" : "text"}), 5 * 1000
		);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		console.log("componentWillReceiveProps - [update] props 의 변화를 감지합니다.")
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log("shouldComponentUpdate - [update] true 를 반환하면 componentWillUpdate, render, componentDidUpdate 를 호출합니다. -> DOM 이 없데이트 됩니다." +
			"+ \t\n  false 를 반환하면 componentWillUpdate, render, componentDidUpdate 를 호출하지 않습니다.  -> DOM 이 없데이트 되지 않습니다.");
		return true;
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		console.log("componentWillUpdate - [update] React Element 를 Dom 에서 갱신(render)되기 전에 발생합니다.");
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("componentDidUpdate - [update] Component 갱신이 완료되었습니다.");
	}

	componentWillUnmount() {
		clearInterval(this.timeId);
		console.log("componentWillUnmount - Component 가 종료되었습니다.");
	}

	render() {
		console.log("render - React Element 가 Dom 에 render 됩니다.");
		return (
			<div>Check the messages on console panel!
				<br />
				<button onClick={this.handleStop}>Stop</button>
			</div>
		);
	}
}

export default ComponentLifecycle;