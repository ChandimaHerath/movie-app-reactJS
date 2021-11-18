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
                 <div className="form-group">
                <label htmlFor='username'>User Name</label>
                <input autoFocus name="username" onChange={this.handleChange} value={data.username} id="username" type="text" className="form-control" />
                { this.state.errors.username&&<div className="alert alert-danger"> {this.state.errors.username} </div>}
                </div> 

                <div className="form-group">
                <label htmlFor='password'>Password</label>
                <input name="password" onChange={this.handleChange} value={data.password} id="password" type="password" className="form-control" />
                { this.state.errors.password&&<div className="alert alert-danger"> {this.state.errors.password} </div>}
                </div> 
                {this.renderButton('Login')}
                </form>
        </div>;
    }
}
 
export default LoginForm ;