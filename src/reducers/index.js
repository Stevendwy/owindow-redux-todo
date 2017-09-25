/*
* @Author: steven
* @Date:   2017-09-20 16:12:12
* @Last Modified by:   steven
* @Last Modified time: 2017-09-21 10:15:08
*/
import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
	todos
})

export default rootReducer