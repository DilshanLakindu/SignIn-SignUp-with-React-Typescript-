import React from 'react'
import LOGO from "../../Assets/images/Ellipse1.jpg"
import css from '../../utility'
import { useFormik } from 'formik'


const ValidateForm = () => {

  // const{}=useFormik({
  //     initialValues:{

  //     },
  // });

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
                  >
                    <div className="header-wrapper">
                        <div className="text-size-large text-weight-bold">Validate your email</div>
                        <div className="text-size-small text-color-dark-grey">Enter the code received to your email</div>
                      </div>
                      
                      <div className="form_field-wrapper is-verification">
                        <div className="input_number-wrapper">
                          <input type="text" className="form_input is-number w-input" maxLength={1} name="OPT"
                            placeholder="0" id="OPT" />
                          <input type="text" className="form_input is-number w-input" maxLength={1} name="OPT-6"
                            placeholder="0" id="OPT-6" />
                          <input type="text" className="form_input is-number w-input" maxLength={1} name="OPT-5"
                            placeholder="0" id="OPT-5" />
                          <input type="text" className="form_input is-number w-input" maxLength={1} name="OPT-4"
                            placeholder="0" id="OPT-4" />
                          <input type="text" className="form_input is-number w-input" maxLength={1} name="OPT-3"
                            placeholder="0" id="OPT-3" />
                          <input type="text" className="form_input is-number w-input" maxLength={1} name="OPT-2"
                            placeholder="0" id="OPT-2" />
                        </div>
                        <button className="button is-form-submit w-button custom-button">Verify</button>
                      </div>
                 </form>
                  </div>
                  <div className="cta-wrapper">
                    <div>Haven't received any code ?</div>
                    <a href="#" className="sign-up_button w-inline-block link-animation">
                      <div className="link-value">Resend</div>
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

export default ValidateForm