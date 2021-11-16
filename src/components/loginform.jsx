import React, { Component } from 'react';

class LoginForm  extends React.Component {

        state = {
            account :{username:'', password:'' }
        }

        handleSubmit= e => {
            e.preventDefault();
        }

        handleChange=e=>{
            const account = {...this.state.account};
            account.username = e.currentTarget.value;
            this.setState({account});

        }

    render() { 
        return <div>
                <form onClick={this.handleSubmit}>
                 <div className="form-group">
                <label htmlFor='username'>User Name</label>
                <input onChange={this.handleChange} value={this.state.account.username} id="username" type="text" className="form-control" />
                </div> 

                <div className="form-group">
                <label htmlFor='password'>Password</label>
                <input id="password" type="password" className="form-control" />
                </div> 
                </form>
                <button className="btn btn-primary">Save</button>
        </div>;
    }
}
 
export default LoginForm ;