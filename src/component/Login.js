import React from 'react'
import {useFormik} from 'formik'
import {connect} from 'react-redux'
import {UserLogin} from '../action/index'
function Login(props) {
   const formik=  useFormik({
       initialValues:{
        name:'',
        email:'',
    },
       onSubmit:values=>{
        console.log("form data",values)
        props.history.push('/home')
    },
       validate:values=>{
        let errors={
        }
        if(!values.name){
            errors.name="Required"
        }
        if(!values.email){
            errors.email="Required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
        return errors;
    }
       
    })
    return (
        <div className="container  d-flex justify-content-center mt-5">
            <div className="row ">
                <div className="col shadow px-5 py-5">
                    <h1 className="pb-3"><u>Login </u> </h1>
                    <form className="form" onSubmit={formik.handleSubmit}>
                        <div className="col-12">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className="form-control" onChange={formik.handleChange} value={formik.values.name} /> 
                        {formik.errors.name ? <small className="text-danger">{formik.errors.name} </small> :null}
                        </div>
                        <div className="col">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" onChange={formik.handleChange} value={formik.values.email} />
                            {formik.errors.email? <small className="text-danger">{formik.errors.email}</small> :null}
                        </div>
                        <button  type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=dispatch=>({

})
const mapDispatchToProps=dispatch=>({
    addUser:data=>dispatch(UserLogin(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)