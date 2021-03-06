import React  from 'react';
import Form from './common/form';
import { Joi } from 'joi-browser';

class RegisterForm extends Form {
    state = {
        data:{username:'', password:'',name:'' },
        errors : {}
    };   
    schema = {
    //             username: Joi.string().required().email(),
    //             password: Joi.string().required().min(5).label("Password"),
    //             name: Joi.string().required().label("Name")
         }

    doSubmit= ()=>{
            console.log("Submitted");
    };

    render() {
            alert('We got an error here while submitting');
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                     {this.renderInput("name","Name",true)}
                    {this.renderInput("username","Username",false)}
                    {this.renderInput("password","Password",false)}
                   
                    {this.renderButton("Register")}
                </form>
            </div>

        );
    }
}

export default RegisterForm;