import React, { Component } from 'react'
import AuthService from './AuthService'
import Home from '../home'

export default function withAuthAdmin(AuthComponent){
    const Auth = new AuthService()
    return class AuthWrapped extends Component {
        constructor() {
            super()
            this.state = {
                user: {
                    admin: false
                }
            }
        }

        async componentWillMount() {
            if (!Auth.loggedIn()) {
                Auth.logout()
                this.props.history.replace('/login')
            }
            else {
                try {
                    const profile = Auth.getProfile()
                    this.setState({
                        user: profile
                    })
                }
                catch(err){
                    Auth.logout()
                    this.props.history.replace('/login')
                }
            }
        }

        render() {
            if (!!this.state.user.admin) {
                return (
                    <AuthComponent history={this.props.history} user={this.state.user} />
                )
            }
            else {
                return (
                    <Home/>
                )
            }
        }
    }
}

export function withAuthUser(AuthComponent){
    const Auth = new AuthService()
    return class AuthWrapped extends Component {
        constructor() {
            super()
            this.state = {
                user: {
                    admin: false
                }
            }
        }

        componentWillMount() {
            if (!Auth.loggedIn()) {
                this.props.history.replace('/login')
            }
            else {
                try {
                    const profile = Auth.getProfile()
                    this.setState({
                        user: profile
                    })
                }
                catch(err){
                    Auth.logout()
                    this.props.history.replace('/login')
                }
            }
        }

        render() {
            if (!!this.state.user) {
                return (
                    <AuthComponent history={this.props.history} user={this.state.user} />
                )
            }
            else {
                return null
            }
        }
    }
}