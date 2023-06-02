import { Component } from 'react';
import { MarvelService } from '../../services/MarvelService';

import './charList.scss';
// import Spinner from '../spinner/Spinner';
// import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList extends Component {

	state = {
		charList: [],
	}

	marvelService = new MarvelService();

	componentDidMount() {
		this.marvelService.getAllCharacters()
			.then(this.onCharListLoaded)
	}

	onCharListLoaded = (charList) => {
		this.setState({
			charList
		})
	}

	renderItems(arr) {
		return (
			<ul className="char__grid">
				{
					arr.map((item) => {
						return (
							<li
								className="char__item"
								key={item.id}>
								<img src={item.thumbnail} alt={item.name} />
								<div className="char__name">{item.name}</div>
							</li>
						)
					})
				}
			</ul>
		)
	}

	render() {
		const { charList } = this.state;
		const content = this.renderItems(charList);

		return (
			<div className="char__list">
				{content}
				<button className="button button__main button__long">
					<div className="inner">load more</div>
				</button>
			</div>
		)
	}
}

export default CharList;
