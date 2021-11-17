import React from 'react';

class LoginForm  extends React.Component {

        state = {
            account :{username:'', password:'' },
            errors : {}
        }

        validate(){
             const errors = {};
             const {account} = this.state;
             if(account.username.trim()==='')
             errors.username = 'Username is required';
             if(account.password.trim()=== '')
             errors.password = 'Password is required';

             return Object.keys(errors).length === 0 ? null : errors;
        };


        handleSubmit= e => {
             e.preventDefault();
             const errors = this.validate();
             console.log(errors);
             this.setState ({errors : errors || {}});
             if(errors) return;

             console.log('submitted');
             

        }

        handleChange=e=>{
            const account = {...this.state.account};
            account[e.currentTarget.name] = e.currentTarget.value;
            this.setState({account});

        }

    render() { 
        const{account} = this.state;
        return <div>
                <form >
                 <div className="form-group">
                <label htmlFor='username'>User Name</label>
                <input autoFocus name="username" onChange={this.handleChange} value={account.username} id="username" type="text" className="form-control" />
                { this.state.errors.username&&<div className="alert alert-danger"> {this.state.errors.username} </div>}
                </div> 

                <div className="form-group">
                <label htmlFor='password'>Password</label>
                <input name="password" onChange={this.handleChange} value={account.password} id="password" type="password" className="form-control" />
                { this.state.errors.password&&<div className="alert alert-danger"> {this.state.errors.password} </div>}
                </div> 
                </form>
                <button  onClick={this.handleSubmit} className="btn btn-primary">Save</button>
        </div>;
    }
}
 
export default LoginForm ;