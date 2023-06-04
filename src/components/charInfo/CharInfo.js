import './charInfo.scss';
import { Component } from 'react';
import { MarvelService } from '../../services/MarvelService';

class CharInfo extends Component {

	state = {
		char: {}
	}

	marvelService = new MarvelService();

	componentDidMount() {
		this.updateChar()
		// this.marvelService.getCharacter(this.props.charId)
		// 	.then(this.onCharLoaded)
	}

	componentDidUpdate(prevProps) {
		if (this.props.charId !== prevProps.charId) {
			this.updateChar();
		}
	}

	updateChar = () => {
		const { charId } = this.props;
		if (!charId) {
			return;
		}

		this.marvelService.getCharacter(charId)
			.then(this.onCharLoaded)
	}

	onCharLoaded = (char) => {
		this.setState({
			char
		})
	}


	render() {
		const { char } = this.state;
		return (
			<div className="char__info">
				<Veuw char={char} />
			</div>
		)
	}
}

const Veuw = ({ char }) => {
	const { name, thumbnail, homepage, wiki } = char;
	return (
		<div className="char__info">
			<div className="char__basics">
				<img src={thumbnail} />
				<div>
					<div className="char__info-name">{name}</div>
					<div className="char__btns">
						<a href={homepage} className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href={wiki} className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CharInfo;