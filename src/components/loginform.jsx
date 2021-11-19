import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
class LoginForm  extends Form {

        state = {
            data :{userName:'', Password:'' },
            errors : {}
        }

        schema = {
            userName : Joi.string().required(),
            Password : Joi.string().required()
        }


        doSubmit = () =>{
                console.log('submitted to the server');
        };
     

    render() { 
        return <div>
                <form >
                {this.renderInput('userName','User Name',true)}
                {this.renderInput('Password','Password',false,'password')}
                {this.renderButton('Login')}
                </form>
             </div>;
    }
}
 
export default LoginForm ;