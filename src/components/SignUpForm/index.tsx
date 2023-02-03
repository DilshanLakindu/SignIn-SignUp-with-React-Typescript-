import React from 'react'
import LOGO from "../../Assets/images/Ellipse1.jpg"
import { basicSchema } from '../../schemas'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { constants } from 'fs/promises'
import css from '../../utility'
import { useNavigate } from 'react-router-dom'

interface initialValues {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    password: string,
    confirmpassword: string,
    checkbox: boolean,
    checkbox2: boolean
}


const SignUpForm = () => {



    const onSubmit = (values:any , actions:any) => {
        console.log(values);
        console.log(actions);

    }

    const initialValues: initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
        checkbox2: false,
        checkbox: false
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: basicSchema,
        onSubmit,

    });


    console.log(errors);

    let navigate = useNavigate()

    //  const style = clsx({ [classes.root]: true, [classes.err] : errors.firstname && touched.firstname})
    //  const style2 = clsx({ [classes.root]: true , [classes.err] : errors.lastname && touched.lastname})
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
                                                <div className="text-size-large text-weight-bold">Sign Up to get started</div>
                                            </div>
                                            <div className="form_field-column">
                                                <div className="form_field-wrapper">
                                                    <label htmlFor="First-name" className="form_label">First name</label>
                                                    <input
                                                        type="text"
                                                        //  className={style} 
                                                        maxLength={256}
                                                        name="firstname"
                                                        placeholder="John"
                                                        id="First-name"
                                                        onChange={handleChange}
                                                        value={values.firstname}
                                                        onBlur={handleBlur}
                                                        className={css(
                                                            errors.firstname && touched.firstname ? "form_input_error" : "form_input w-input"
                                                        )}
                                                    />
                                                    {errors.firstname && touched.firstname && <p className="error-text">{errors.firstname}</p>}
                                                </div>
                                                <div className="form_field-wrapper">
                                                    <label htmlFor="Last-name" className="form_label">Last name</label>
                                                    <input
                                                        type="text"
                                                        //   className={style2}  
                                                        maxLength={256} name="lastname"
                                                        placeholder="Doe" id="Last-name"
                                                        onChange={handleChange}
                                                        value={values.lastname}
                                                        onBlur={handleBlur}
                                                        className={css(
                                                            errors.lastname && touched.lastname ? "form_input_error" : "form_input w-input"
                                                        )}
                                                    />
                                                    {errors.lastname && touched.lastname && <p className="error-text">{errors.lastname}</p>}
                                                </div>
                                            </div>
                                            <div className="form_field-wrapper">
                                                <label htmlFor="Email" className="form_label">Email Address</label>
                                                <input
                                                    type="email"
                                                    maxLength={256} name="email"
                                                    placeholder="john@doe.com" id="Email"
                                                    onChange={handleChange}
                                                    value={values.email}
                                                    onBlur={handleBlur}
                                                    className={css(
                                                        errors.email && touched.email ? "form_input_error" : "form_input w-input"
                                                    )}
                                                />
                                                {errors.email && touched.email && <p className="error-text">{errors.email}</p>}

                                            </div>
                                            <div className="form_field-wrapper">
                                                <label htmlFor="Phone" className="form_label">Phone</label>
                                                <input
                                                    type="tel"
                                                    className={css(
                                                        errors.phone && touched.phone ? "form_input_error" : "form_input w-input"
                                                    )}
                                                    maxLength={10} name="phone"
                                                    placeholder="+123456789" id="Phone"
                                                    onChange={handleChange}
                                                    value={values.phone}
                                                    onBlur={handleBlur}
                                                />
                                                {errors.phone && touched.phone && <p className="error-text">{errors.phone}</p>}
                                            </div>

                                            <div className="form_field-wrapper">
                                                <label htmlFor="Password" className="form_label">Password</label>
                                                <input
                                                    type="password"
                                                    maxLength={12} name="password"
                                                    placeholder="Enter your password"
                                                    id="Password"
                                                    onChange={handleChange}
                                                    value={values.password}
                                                    onBlur={handleBlur}
                                                    className={css(
                                                        errors.password && touched.password ? "form_input_error" : "form_input w-input"
                                                    )} />
                                                {errors.password && touched.password && <p className="error-text">{errors.password}</p>}
                                            </div>
                                            <div className="form_field-wrapper">
                                                <label htmlFor="Password" className="form_label">Confirm Password</label>
                                                <input
                                                    type="password"
                                                    className={css(

                                                        errors.confirmpassword && touched.confirmpassword ? "form_input_error" : "form_input w-input"
                                                    )}
                                                    maxLength={12} name="confirmpassword"
                                                    placeholder="Re enter password"
                                                    id="ConfirmPassword"
                                                    onChange={handleChange}
                                                    value={values.confirmpassword}
                                                    onBlur={handleBlur} />
                                                {errors.confirmpassword && touched.confirmpassword && <p className="error-text">{errors.confirmpassword}</p>}
                                            </div>
                                            <div className="form_field-wrapper is-horizontal">
                                                <label className="w-checkbox form_checkbox is-sign-in">
                                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom form_checkbox-icon"></div>
                                                    <input type="checkbox" name="checkbox" id="Checkbox"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={String(values.checkbox)}
                                                        style={{
                                                            opacity: 0,
                                                            position: "absolute",
                                                            zIndex: -1,
                                                            border: 0,

                                                        }}
                                                        className={css(
                                                            errors.checkbox && touched.checkbox ? "form_input_error" : "form_input w-input"
                                                        )} />

                                                    <span className="form_checkbox-label w-form-label">I accept the <a href="#">Terms
                                                        and
                                                        Conditions</a></span>

                                                </label>

                                            </div>
                                            {errors.checkbox && touched.checkbox && <p className="error-text">{errors.checkbox}</p>}

                                            <div className="form_field-wrapper is-horizontal">
                                                <label className="w-checkbox form_checkbox is-sign-in">
                                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom form_checkbox-icon"></div>
                                                    <input type="checkbox" name="checkbox2" id="Checkbox-2"
                                                        style={{
                                                            opacity: 0,
                                                            position: "absolute",
                                                            zIndex: -1,
                                                            border: 0,
                                                        }}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={String(values.checkbox2)}
                                                        className={css(
                                                            errors.checkbox2 && touched.checkbox2 ? "form_input_error" : "form_input w-input"
                                                        )} />

                                                    <span className="form_checkbox-label w-form-label">I agree with the <a href="#"> Jobboard privacy policy</a></span>
                                                </label>
                                            </div>
                                            {errors.checkbox2 && touched.checkbox2 && <p className="error-text">{errors.checkbox2}</p>}
                                            <button className="button is-form-submit w-button custom-button" onClick={() => handleSubmit}>Sign Up</button>

                                        </form>
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
                                            <div className="link-value" onClick={()=> navigate("/signin")} >Sign In</div>
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

export default SignUpForm