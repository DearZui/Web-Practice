import React {Component, PropTypes} from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import Track from './Track';

export default class ProgressSoundoPlayer extends Component {
	render() {
		const {resolveUrl, clientId} = this.props;
		return (
			<SoundPlayerContainer resolveUrl={resolveUrl} clientId={cilentId}>
				<Track />
			</SoundPlayerContainer>
		)；
	}
}

ProgressSoundoPlayer.propTypes = {
	resolveUrl: PropTypes.string.isRequired,
	clientId: PropTypes.string.isRequired
};