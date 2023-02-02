import {BrowserRouter, Route, Routes} from "react-router-dom";
import Fullformpage from "../Pages/Full-form/index"
import SignInPage from "../Pages/Login-Page";
import React from 'react'
import SignForm from "../Pages/Login-Page";
import ForgetPswPage from "../Pages/ForgetPswPage";
import NewPswPage from "../Pages/NewPasswordPage";
import ValidatePage from "../Pages/ValidatePage";
import SignUpPage from "../Pages/SignUpPage"
import FieldLevelValidationExample from "../Pages/Formik"



const PageRoute = () => {
  return (
    <div>
        <BrowserRouter>
           <Routes>

            <Route path="/fullform" element={<Fullformpage/>}/>,
            <Route path="/signin" element={<SignForm/>}/>
            <Route path="/forgetpsw" element={<ForgetPswPage/>}/>
            <Route path="/newpsw" element={<NewPswPage/>}/>
            <Route path="/validate" element={<ValidatePage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/formik" element={<FieldLevelValidationExample/>}/>


           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default PageRoute