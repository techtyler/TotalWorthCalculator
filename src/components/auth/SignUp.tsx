import * as React from 'react';
import './SignUp.css';

import {auth} from '../../utils/auth';

interface ISignUpProps {
    email: string;
    password: string;
}

interface ISignUpState {
    signUpMessage: boolean
}

class SignUp extends React.Component<ISignUpProps, ISignUpState> {

    private email: HTMLInputElement;
    private pw: HTMLInputElement;

   

    public render() {
        return (
            <div className="sign_up_form">
                <h1> Sign Up </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="medium-6 cell">
                                <label>Email</label>
                                <input type="text" placeholder=".medium-6.cell"/>
                            </div>
                            <div className="medium-6 cell">
                                <label>Password</label>
                                <input type="text" placeholder=".medium-6.cell"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    private handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        auth(this.email.value, this.pw.value)
        // TODO: Store a session id in a cookie to know that the user is logged in?
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // TODO: Alert? Show Errors on page somewhere?
            alert(errorCode + ':' + errorMessage);
            // ...
        })
    }
}

export default SignUp;
