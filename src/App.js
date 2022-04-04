import { Component } from 'react';
import { getTimespan } from 'timer-lib';

class App extends Component {
	timerId;

	state = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	};

	componentDidMount() {
		const endDate = this.props.endDate;

		this.timerId = setInterval(() => {
			const currentDate = new Date();
			const [
				days, hours, minutes, seconds
			] = getTimespan(currentDate, endDate);

			this.setState({
				days,
				hours,
				minutes,
				seconds
			});
		}, 500); // not PERFECT
	}

	render() {
		const {
			days, minutes, hours, seconds
		} = this.state;
		return (
			<>
				<h1>Countdown to {this.props.endDate.toLocaleString()}</h1>
				<ul>
					<li>
						{days} days
					</li>
					<li>
						{hours} hours
					</li>
					<li>
						{minutes} minutes
					</li>
					<li>
						{seconds} seconds
					</li>
				</ul>
			</>
		);
	}

	componentWillUnmount() {
		if (this.timerId)
			clearInterval(this.timerId);
	}
}

export default App;
