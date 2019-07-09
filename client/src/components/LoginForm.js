import React from 'react'
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';
import superagent from 'superagent';

export default class LoginForm extends React.Component{
    constructor(){
        super();
        this.state ={
            username: "",
            password: ""
        }
    }
    handleUsernameChanged(e){
        this.setState({username: e.target.value});
    }
    handlePasswordChanged(e){
        this.setState({password: e.target.value});
    }
    submitForm(e){
        //prevent page from alays reloading
        e.preventDefault()
        //send submited text to server
        superagent
        .post('/auth/v1')
        .send({ username: this.state.username, password: this.state.password })
        .end((err, res) => {
            if(err){
                this.setState({errorMessage: 'authentifiaction failed'});
                return;
            }
                //save the token to localStorage
                //localstorage only accepts string values
            localStorage.setItem('token', res.body.token)
            //changes from virtualDOM to DOM
            //this.setState();
            this.props.onSuccessfulLogin();
        })
    }
    render(){
        return(   
            <div>  
                <form onSubmit={this.submitForm.bind(this)}>
                    <div>
                <TextField
                floatingLabelText="Username"
                value= {this.state.username}
                onChange= {this.handleUsernameChanged.bind(this)} />
                </div>
                <div>
                <TextField
                floatingLabelText="Password"
                value= {this.state.password}
                //makes password not visible
                type= "password"
                onChange= {this.handlePasswordChanged.bind(this)} />
                </div>
                <div>
                <RaisedButton
                type="submit"
                label= "Submit" />
                </div>
            </form>           
</div>
        );
    }
}