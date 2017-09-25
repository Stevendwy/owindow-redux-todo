import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

const App = ({todos,actions}) =>(
  <div>
    <Header addTodo={actions.addTodo} />
    <MainSection  todos={todos} actions={actions} />
  </div>
)

App.propTypes = {
  todos:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos:state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions,dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)













/*class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    );
  }
}

export default App;*/
