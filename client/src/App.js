import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import posed from 'react-pose';

import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import PlacePage from './views/PlacePage'
import FormPage from './views/FormPage'
import Header from './components/Header'
import Presents from './views/PresentsPage'
import DressCode from './views/DressCodePage'
import AuthAPI from './utils/auth'

import './App.css'
import { USER_UPDATED, USER_LOGOUT } from './actions';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});
class App extends Component {
  state = {
    open: false,
    logged: false,
    loading: true,
    error: false,
  }

  componentDidMount(){
    const { updateUser } = this.props

    AuthAPI.isLoggedin().then(user => {
      updateUser(user)
      user ? (
        this.setState({
          logged:true
        })
      ): (
        this.setState({
          logged:false
        })
      )
    }).catch(e => {
      this.setState({
        error: true
      })
    })
  }

  toggleMenu = forced => {
    const { open } = this.state
    this.setState({
      open: forced != null ? forced : !open
    })
  }

  logoutAccount = () => { 
    this.setState({
      logged: false
    })
  }

  userLogged = () => {
    this.setState({
      logged: true
    })
  }

  render() {
    const { open, logged } = this.state

    return (
      logged ? (
        <Route render={({ location }) => (
          <Fragment>  
            <Header logged={logged} isOpen={open} toggleMenu={this.toggleMenu} logout={this.logoutAccount} />
              <RouteContainer key={location.pathname}>
                <Switch location={location} >
                  <Route exact path="/" component={HomePage} key="home"/>
                  <Route exact path="/place" component={PlacePage} key="place"/> 
                  <Route exact path="/form" component={FormPage} key="form"/>
                  <Route exact path="/presents" component={Presents} key="presents"/>
                  <Route exact path="/dress-code" component={DressCode} key="dressCode"/>
                </Switch>
              </RouteContainer>
          </Fragment>
      )}/>
      ) : (
        <Route render={({ location }) => (
          <Fragment>  
              <RouteContainer key={location.pathname}>
                <Switch location={location} >
                  <Route exact path="/" render={() => <LoginPage isLogged={this.userLogged}/>} key="home" />
                  <Route exact path="/login" render={() => <LoginPage isLogged={this.userLogged}/>} key="home" />
                </Switch>
              </RouteContainer>
          </Fragment>
      )}/>
      )
    )
  }
}

const mapState = ({ user }) => {
  return {
    user
  }
}

const mapDispatch = dispatch => {
  return{
    updateUser: payload => {
      dispatch({
        type: USER_UPDATED,
        payload
      })
    },
    logoutUser: () => {
      dispatch({
        type: USER_LOGOUT
      })
    }
  }
}

export default connect(mapState, mapDispatch)(App)
