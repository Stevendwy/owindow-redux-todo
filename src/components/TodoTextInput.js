/*
* @Author: steven
* @Date:   2017-09-20 16:10:23
* @Last Modified by:   steven
* @Last Modified time: 2017-09-25 10:49:00
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TodoTextInput extends Component{
	static propTypes = {
		onSave:PropTypes.func.isRequired,
		text:PropTypes.string,
		placeholder:PropTypes.string,
		editing:PropTypes.bool,
		newTodo:PropTypes.bool
	}

	state = {
		text:this.props.text || ''
	}

	handleSubmit = e => {
		const text = e.target.value.trim()
		if (e.which === 13) {
			this.props.onSave(text)
			if (this.props.newTodo) {
				this.setState({
					text:''
				})
			}
		}
	}

	handleChange = e => {
		this.setState({
			text:e.target.value
		})
	}

	handleBlue = e =>{
		if (!this.props.newTodo) {
			this.props.onSave(e.target.value)
		}
	}

	render(){
		return (
			<input type="text" 
			className={
				classnames({
					edit:this.props.editing,
					'new-todo':this.props.newTodo
				})
			}
			placeholder={this.props.placeholder}
			autoFocus="true"
			value={this.state.text}
			onBlur={this.handleBlur}
			onChange={this.handleChange}
			onKeyDown={this.handleSubmit}/>
			)
	}
}