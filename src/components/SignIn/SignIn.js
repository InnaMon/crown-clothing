import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectErrorMsg} from '../../redux/error/error.selectors';
import { addError, removeError } from '../../redux/error/error.actions';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        this.props.removeError()
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
            this.props.removeError()
        } catch(error) {
            console.log('was not able to sign in existing user', error);
            this.props.addError('Error with email or password. Please try again!')
        }

    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        autoComplete="email"
                        required />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        autoComplete="new-password"
                        required />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign In with Google{' '}
                        </CustomButton>
                    </div>
                    <div style={{marginTop: '32px', color: 'red'}}>{this.props.error}</div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    error: selectErrorMsg
});

const mapDispatchToProps = dispatch => ({
    addError: error => dispatch(addError(error)),
    removeError: () => dispatch(removeError())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);