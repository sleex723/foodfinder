import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Search from './Search/Search';
import styles from './Home.css';
import Logo from '../../img/foodfinder.png'
import Results from '../Results/Results';

class Home extends Component {
	state = {
		view: 'home',
		yelpData: []
	};

	handleChangeView = page => {
		this.setState({
			view: page,
		});
	};

	getYelpData = (data) => {
		this.setState({
      yelpData: data,
      view: 'results'
		});
		console.log(this.state);
	};

	render() {
		if (this.state.view === 'home') {
			return (
				<div className={styles.Container}>
					<div className={styles.Main}>
						<img className={styles.Logo} src={Logo} />
						<Search view={this.handleChangeView} getData={this.getYelpData} />
					</div>
				</div>
			);
    }

    if (this.state.view === 'loading') {
      return <div>loading</div>
    }

		if (this.state.view === 'results' && this.state.yelpData !== []) {
			return <Results categories={this.state.yelpData} />;
		}
	}
}

export default Home