import React from 'react'
import { Country, State, City }  from 'country-state-city';

import { useState } from 'react'
export default function Register() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const[allState,setAllstate]=useState([]);
    const[selectCity,setSelectCity]=useState([]);
   const [countryCode,setCountryCode]=useState('')
   function registerUser (){
        let ab={fname,lname,email,password,cpassword,country,state,city}
console.log("ababababa",ab)
    }

function selectCountry(e){
 let countryByCode=Country.getCountryByCode(e)
 setCountryCode(e);
setCountry(countryByCode.name)
let stateByCountryCode=State.getStatesOfCountry(e)
setAllstate(stateByCountryCode)
}
function selectState(e){
console.log("stateselect",e)
let stateByCode=State.getStateByCodeAndCountry(e,countryCode)
setState(stateByCode.name)
}

    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col shadow border py-5 px-5">
                    <h1 className="pb-2"><u>Register </u> </h1>
                    <form className="form"  >
                        <div className="form-row d-flex ">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">First Name</label>
                                <input type="text" name="firstname" id="firstname" className="form-control" onChange={((e) => setFname(e.target.value))} value={fname} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Last Name</label>
                                <input type="text" name="lastname" id="lastname" className="form-control" onChange={((e) => setLname(e.target.value))} value={lname} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" onChange={((e) => setEmail(e.target.value))} value={email} />
                        </div>
                        <div className="form-row d-flex">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Country</label>
                                <select id="country" value={country} onChange={(e)=>selectCountry(e.target.value)}  className="form-control">

                                {Country.getAllCountries().map((e,index)=>{
        return(                            <option key={index} value={e.isoCode}>{e.name}</option>
        )
                                })}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">State</label>
                                <select id="State" value={state} onChange={(e)=>selectState(e.target.value)}  className="form-control">
                                    {allState.map((e,index)=>{
                                        console.log("e",e)
                                        return (
                                            <option value={e.isoCode} key={index}>{e.name}</option>

                                        )
                                    })}
                                    {/* <option value>Choose...</option> */}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">City</label>
                                <select id="city" className="form-control">
                                    <option value>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>

                        </div>
                        <div className="form-row ">
                            <div className="form-group d-flex">

                                <div className="col-md-6">
                            <label htmlFor="inputState">Password</label>

                                    <input type="password" className="form-control" onChange={((e) => setPassword(e.target.value))} value={password} name="password" id="password" autoComplete="true" />
                                </div>
                                <div className="col-md-6">
                            <label htmlFor="inputState">Confirm Password</label>

                                    <input type="password" className="form-control" name="confirmPassword" onChange={((e) => setCpassword(e.target.value))} value={cpassword} autoComplete="true" id="confirmPassword" />
                                </div>
                            </div>
                        </div>

                        <button type="button" onClick={registerUser} className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
