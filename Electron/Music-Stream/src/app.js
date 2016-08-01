import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProgressSoundPlayer from './components/ProgressSoundPlayer';
import SC from 'node-soundcloud';
import Loading from 'react-loading';

var client_id = 'YOUR SOUNDCLOUD APP ID';

SC.init({
	id: client_id;
})

class Main extends Component {
	constructor(props) {
		super();
	}
}