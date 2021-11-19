import React, { Component } from 'react';
import Joi from 'joi-browser';

class Form  extends Component {

    state = {
        data:{},
        errors:{}
    }

    validate(){
        // validating replaced with Joi library functions
        const result = Joi.validate(this.state.data, this.schema,{abortEarly:false});

        if (!result.error) return null;

        const errors = {};
        for (let item of result.error.details)
            errors[item.path[0]] = item.message;
            return errors;

        //  const errors = {};
        //  const {data} = this.state;
        //  if(data.username.trim()==='')
        //  errors.username = 'Username is required';
        //  if(data.password.trim()=== '')
        //  errors.password = 'Password is required';

        //  return Object.keys(errors).length === 0 ? null : errors;
    };


    validateProperty = input => {
        const obj ={[input.name]:input.value };
        console.log(input.name);
        const schema = {[input.name]: this.schema[input.name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message: null;
    };

    handleSubmit= e => {
        e.preventDefault();
        const errors = this.validate();
        console.log(errors);
        this.setState ({errors : errors || {}});
        if(errors) return;

       this.doSubmit();};
        
       handleChange=e=>{
            
        const errors = {...this.state.errors};
        const errormessage = this.validateProperty(e.currentTarget);
        if(errormessage) errors[e.currentTarget.name] = errormessage;
        else delete errors[e.currentTarget.name];
        
        const data = {...this.state.data};
        data[e.currentTarget.name] = e.currentTarget.value;
        
        this.setState({data,errors});

    };

    renderInput(name, label,focus=false,type="text",){
        return(
            <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input autoFocus={focus} name={name} 
            onChange={this.handleChange} 
            value={this.state.data[name]} 
            id={name} 
            type={type} 
            className="form-control" />
            { this.state.errors[name]&&<div className="alert alert-danger"> {this.state.errors[name]} </div>}
            </div> 
        );
    }

   renderButton(label){
    return <button disabled={this.validate()} onClick={this.handleSubmit} className="btn btn-primary">{label}</button>

   };
}
 
export default Form;