import React from 'react'
import LOGO from "../../Assets/images/Ellipse1.jpg"
import { useNavigate } from 'react-router-dom'
import css from '../../utility'
import { useFormik } from 'formik'
import { basicSchema } from '../../schemas'


const ForgetPassword = () => {

  let navigate=useNavigate()

  const SignUp =() =>{
    navigate ("/signup")

   }
   
      const onSubmit = (values: any, actions: any) => {
        console.log(values);
        console.log(actions);
      }

  
      const { values,errors,touched,handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:{
          email: "",
        },
        validationSchema:basicSchema,
        onSubmit,
      });

      console.log(errors);

  return (
    <main className="main-wrapper">
    <div className="section is-sign-in">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="section_component is-sign-in">
            <div className="logo-wrapper">
                  <div className="image-wrapper is-logo">
                    <img src={LOGO} loading="lazy" alt="" className="image-cover" /></div>
                  <div>
                    <span className="logo-span">Job</span>Board</div>
                </div>
              <div className="form-wrapper">
                <div className="form_component is-sign-in w-form">
                  <form
                    id="wf-form-Form"
                    name="wf-form-Form"
                    data-name="Form"
                    method="get"
                    className="form_form"
                    onSubmit={handleSubmit}
                  >
                      <div className="header-wrapper">
                        <div className="text-size-large text-weight-bold">Forget Password</div>
                        <div className="text-size-small text-color-dark-grey">Enter your email address</div>
                      </div>

                      <div className="form_field-wrapper">
                        <label htmlFor="Email" className="form_label">Email Address</label>
                        <input
                          type="email"
                          className={css(
                             errors.email && touched.email ? "form_input_error" : "form_input w-input"
                          )}
                          maxLength={256} name="email"
                          placeholder="john@doe.com"
                          id="Email"
                          onChange={handleChange}
                          value={values.email}
                          onBlur={handleBlur}
                         />
                         {errors.email && touched.email && <p className="error-text">{errors.email}</p>}
                      </div>
                      <button className="button is-form-submit w-button custom-button">Continue</button>

                  </form>
                  </div>
                 <div className="cta-wrapper">
                     <div>Don&#x27;t have an account?</div>
                    <a href="#" className="sign-up_button w-inline-block link-animation">
                      <div className="link-value" onClick={SignUp}>Sign Up</div>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ForgetPassword