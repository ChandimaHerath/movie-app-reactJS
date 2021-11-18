import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
class LoginForm  extends Form {

        state = {
            data :{username:'', password:'' },
            errors : {}
        }

        schema = {
            username : Joi.string().required(),
            password : Joi.string().required()
        }


        doSubmit = () =>{
                console.log('submitted to the server');
        };
     

    render() { 
        const{data} = this.state;
        return <div>
                <form >
                {this.renderInput('username','User Name')}
                {this.renderInput('password','Password','password')}
                {this.renderButton('Login')}
                </form>
             </div>;
    }
}
 
export default LoginForm ;