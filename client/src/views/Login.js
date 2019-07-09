import React from 'react';
import Paper from 'material-ui/Paper';
import LoginForm from '../components/LoginForm';
import { Redirect } from 'react-router-dom';  

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px',
    // position: "center"
  }
};

export default class Login extends React.Component {
  isAuthenticated(){
    const token = localStorage.getItem('token');
        return token && token.length > 10; 
}
handleSuccessFulLogin(){
  // this.setState();
  this.forceUpdate()
}
  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();

    return (
      <Paper style={styles.paper}>
      {isAlreadyAuthenticated ? <Redirect to={{
        pathname: '/app/directory'
    }}/> : (
     <div>
      <h2>Login</h2>
      <LoginForm onSuccessfulLogin={this.handleSuccessFulLogin.bind(this)}/>
      </div>
    )}
      </Paper>
    );
  }
}
