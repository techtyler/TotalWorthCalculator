import * as React from 'react';

import { login, resetPassword } from '../../utils/auth';
import './SignIn.css';

class SignIn extends React.Component {

    private email: HTMLInputElement;
    private pw: HTMLInputElement;

    constructor(props: any) {
        super(props);

        this.state = {
            loginMessage: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
    }

   

    public render() {
        return (
            <div className="sign_in_form">
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div><p>Hello This is where a sign in form goes</p></div>
                </form>
            </div>
        )
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(this.email.value, this.pw.value)
        // TODO: Store a session id in a cookie to know that the user is logged in?
        .catch((error) => {
            alert('Invalid username/password.')
        })
    }
    private resetPassword = () => {
        resetPassword(this.email.value)
        .then(() =>alert(`Password reset email sent to ${this.email.value}.`))
        .catch((error) => {
             // Handle Errors here.
             const errorCode = error.code;
             const errorMessage = error.message;
     
             alert(errorCode + ':' + errorMessage);
        })
    }
}

export default SignIn;