import { Component } from 'react';
import { MarvelService } from '../../services/MarvelService';
import './charList.scss';

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

	render() {
		return (
			<div className="char__list">
				<ul className="char__grid">
					{
						// мапим
						this.state.charList.map((item) => {
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
				<button className="button button__main button__long">
					<div className="inner">load more</div>
				</button>
			</div>
		)
	}
}

export default CharList;
