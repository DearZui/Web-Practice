'use strict';
import React from 'react';
import LocalDb from 'localDb';
import TodoHeader from './TodoHeader.js';
import TodoMain from './TodoMain.js';
import TodoFooter from './TodoFooter.js';

class App extends React.Component {
	constructor() {
		super();
		this.db = new LocalDb('ReactTodo');
		this.state = {
			todos: this.db.get('todos') || [],
			isAllChecked: false
		};
	}

	allChecked() {
		let isAllChecked = false;
		if (this.state.todos.every(todo => todo.inDone)) {
			isAllChecked = true;
		}
		this.setState({
			todos: this.state.todos,
			isAllChecked: isAllChecked
		})
	}
}