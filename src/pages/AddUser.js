import { useState } from "react"

function AddUser(){
    
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPassword:"",
    })

    const [userDataErrors, setuserDataErrors] = useState({
        emailError: "",
        passwordError: ""
    })

    const ValidationDatat = (e) => {
        console.log(e.target.value)
        if(e.target.name == "email"){
            setUserData({
                ...userData,
                email: e.target.value
            })
            setuserDataErrors({
                ...userDataErrors,
                nameError: e.target.value.length == 0 ? "This Field Is Required" : e.target.value.length < 3 && "Please Enter A valid Name"
            })
        } else{
            setUserData({
                ...userData,
                position: e.target.value
            })
            setuserDataErrors({
                ...userDataErrors,
                positionError: e.target.value.length == 0 && "This Fild is ReQUIRED" 
            })
        }
    }

    const SubmitData = (e) => {
        // console.log("test")
        e.preventDefault()
    }

    return(
        <form onSubmit={(e) => SubmitData(e)}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" 
            className={`form-control ${userDataErrors.nameError ? "is-invalid" : "is-valid"}`}
            value={userData.name}
            onChange={(e) => HandleData(e)}
            name= "name"
            />
            <p className="text-danger"> {userDataErrors.nameError} </p>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Position</label>
            <input type="text"
            
            className = {`form-control ${userDataErrors.positionError ? "is-invalid" : "is-valid"}`}
            name="position"
             value={userData.position} 
             onChange={(e) => HandleData(e)}/>
        </div>
        <p> {userDataErrors.positionError} </p>
        <button disabled={userDataErrors.nameError || userDataErrors.positionError} type="submit" className="btn btn-primary">Submit</button>
        </form>
    )

}


export default AddUser