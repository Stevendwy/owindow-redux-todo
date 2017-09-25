/*
* @Author: steven
* @Date:   2017-09-20 16:10:23
* @Last Modified by:   steven
* @Last Modified time: 2017-09-23 16:38:31
*/
import React , {Component} from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component{
	static propTypes = {
		addTodo:PropTypes.func.isRequired
	}

	handleSave = text => {
		if (text.length !== 0) {
			this.props.addTodo(text)
		}
	}

	render(){
		return (
			<header className="header">
				<h1>todos</h1>
				<TodoTextInput newTodo
				onSave={this.handleSave}
				placeholder="What needs to be done ?"/>
			</header>
			)
	}
} 