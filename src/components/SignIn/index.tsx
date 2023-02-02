import React, { useState } from 'react'
import LOGO from "../../Assets/images/Ellipse1.jpg"
import { useNavigate } from 'react-router-dom'
import { Formik, useFormik } from 'formik'
import { basicSchema } from '../../schemas'
import clsx from 'clsx'
import css from '../../utility'



const SignInForm = () => {



  // const [userEmail, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  let navigate = useNavigate();

  const SignUp = () => {
    navigate("/signup")
  }

  const ForgetPsw = () => {
    navigate("/forgetpsw")
  }

  const onSubmit = (values: any, actions: any) => {
    console.log(values);
    console.log(actions);
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });


  // const classes = {
  //   root: "form_input w-input",
  //   err: "form_input_error",
  // }

  console.log(errors);

  // const style = clsx({ [classes.root]: true, [classes.err]: true })
  // const style1 = clsx({ [classes.root]: true, [classes.err]: errors.password && touched.password })
  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   setError("")
  //   if (userEmail.length == 0 || password.length == 0) {
  //     setError("Oops! Something went wrong while submitting the form")
  //   }
  //   console.log(userEmail)
  // }
  console.log();
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
                        <div className="text-size-large text-weight-bold">Sign In</div>
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
                          id="email"
                          onChange={handleChange}
                          value={values.email}
                          onBlur={handleBlur}


                        // className={errors.email ? "form_input_error" : "form_input w-input"}
                        // onChange={e => setEmail(e.target.value)} />
                        />
                        {errors.email && touched.email && <p className="error-text">{errors.email}</p>}

                      </div>
                      <div className="form_field-wrapper">
                        <label htmlFor="Password" className="form_label">Password</label>
                        <input
                          type="password"
                          // className={ errors.password? "form_input_error":"form_input w-input" }
                          className={css(

                            errors.password && touched.password ? "form_input_error" : "form_input w-input"
                          )}
                          maxLength={256} name="password"
                          placeholder="Enter your password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        // onChange={e => setPassword(e.target.value)} />
                        />
                        {errors.password && touched.password && <p className="error-text">{errors.password}</p>}
                      </div>
                      <div className="form_field-wrapper is-horizontal">
                        <label className="w-checkbox form_checkbox is-sign-in">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom form_checkbox-icon"></div>
                          <input type="checkbox" name="Checkbox-2" id="Checkbox-2"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                              border: 0,
                            }} />
                          <span className="form_checkbox-label w-form-label">Keep me sign in</span>
                        </label>
                        <a href="#" className="text-link w-inline-block ">
                          <div className="text-link-animation" onClick={ForgetPsw}>Forgot password?</div>
                        </a>
                      </div>
                      <button className="button is-form-submit w-button custom-button">Sign In</button>
                    </form>

                  </div>
                  <div>
                    {error ? <label >{error}</label> : null}
                  </div>
                  <div className="text-size-small">- Or -</div>

                  <div className="buttons-wrapper">
                    <a href="#" className="link-block is-social w-inline-block">
                      <div className="social-icon w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                            fill="rgba(10,102,194,1)"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="#" className="link-block is-social w-inline-block">
                      <div className="social-icon w-embed">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_301_8205)">
                            <path
                              d="M20.305 10.2302C20.305 9.55044 20.2499 8.86699 20.1323 8.19824H10.7V12.0491H16.1014C15.8773 13.291 15.1571 14.3897 14.1025 15.0878V17.5864H17.325C19.2173 15.8448 20.305 13.2726 20.305 10.2302Z"
                              fill="#4285F4"></path>
                            <path
                              d="M10.6999 20.0008C13.397 20.0008 15.6714 19.1152 17.3286 17.5867L14.1061 15.088C13.2096 15.698 12.0521 16.0434 10.7036 16.0434C8.09474 16.0434 5.88272 14.2833 5.08904 11.917H1.76367V14.4928C3.46127 17.8696 6.91892 20.0008 10.6999 20.0008Z"
                              fill="#34A853"></path>
                            <path
                              d="M5.0854 11.9172C4.66651 10.6753 4.66651 9.33044 5.0854 8.08848V5.5127H1.7637C0.345367 8.33834 0.345367 11.6674 1.7637 14.493L5.0854 11.9172Z"
                              fill="#FBBC04"></path>
                            <path
                              d="M10.6999 3.95805C12.1256 3.936 13.5035 4.47247 14.536 5.45722L17.3911 2.60218C15.5833 0.904587 13.1838 -0.0287217 10.6999 0.000673888C6.91892 0.000673888 3.46126 2.13185 1.76367 5.51234L5.08537 8.08813C5.87537 5.71811 8.09106 3.95805 10.6999 3.95805Z"
                              fill="#EA4335"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_301_8205">
                              <rect width="20" height="20" fill="white" transform="translate(0.5)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                    <a href="#" className="link-block is-social w-inline-block">
                      <div className="social-icon w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                            fill="rgba(10,102,194,1)"></path>
                        </svg>
                      </div>
                    </a>
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

export default SignInForm