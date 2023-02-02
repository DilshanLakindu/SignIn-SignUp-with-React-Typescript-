import React from "react";
import Ellipse from "../../Assets/images/Ellipse1.jpg"
export default function Fullform() {
  return (

    <main className="main-wrapper">
      <div className="section is-sign-in">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="section_component is-sign-in">
                <div className="logo-wrapper">
                  <div className="image-wrapper is-logo"><img src={Ellipse} loading="lazy" alt=""
                    className="image-cover" /></div>
                  <div><span className="logo-span">Job</span>Board</div>
                </div>
                <div className="form-wrapper">
                  <div className="error-message">
                    <div className="icon-wrapper">
                      <div className="icon is-error w-embed"><svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_838_3976)">
                          <path
                            d="M8.43819 2.01644C8.45779 2.00569 8.47984 2.00018 8.50219 2.00044C8.52421 2.00035 8.54588 2.00586 8.56519 2.01644C8.58806 2.03015 8.60673 2.04987 8.61919 2.07344L15.4762 13.7404C15.5122 13.8004 15.5112 13.8644 15.4782 13.9234C15.4655 13.9477 15.4469 13.9683 15.4242 13.9834C15.4044 13.9956 15.3814 14.0015 15.3582 14.0004H1.64619C1.62298 14.0016 1.59997 13.9956 1.58019 13.9834C1.55744 13.9683 1.53887 13.9477 1.52619 13.9234C1.50971 13.8957 1.50118 13.8639 1.50153 13.8317C1.50189 13.7994 1.51111 13.7678 1.52819 13.7404L8.38419 2.07344C8.39669 2.0499 8.41536 2.03019 8.43819 2.01644ZM9.48219 1.56644C9.3832 1.394 9.24047 1.25074 9.0684 1.15111C8.89633 1.05149 8.70102 0.999023 8.50219 0.999023C8.30336 0.999023 8.10805 1.05149 7.93598 1.15111C7.76391 1.25074 7.62118 1.394 7.52219 1.56644L0.66519 13.2334C0.20819 14.0114 0.75619 15.0004 1.64519 15.0004H15.3582C16.2472 15.0004 16.7962 14.0104 16.3382 13.2334L9.48219 1.56644Z"
                            fill="#B50000"></path>
                        </g>
                        <path
                          d="M8.892 10.2355C9.02 9.06842 9.1 8.91499 9.1 6.77801V5H7.9V6.77801C7.9 8.89856 7.964 9.06842 8.092 10.2355H8.892ZM8.508 12.9999C9.036 12.9999 9.5 12.5232 9.5 11.9643C9.5 11.4054 9.036 10.9451 8.508 10.9451C7.948 10.9451 7.5 11.4054 7.5 11.9643C7.5 12.5232 7.948 12.9999 8.508 12.9999Z"
                          fill="#B50000"></path>
                        <defs>
                          <clipPath id="clip0_838_3976">
                            <rect width="16" height="16" fill="white" transform="translate(0.5)"></rect>
                          </clipPath>
                        </defs>
                      </svg></div>
                    </div>
                    <div>Invalid verification code</div>
                  </div>
                  <div className="success-message">
                    <div className="icon-wrapper">
                      <div className="icon is-error w-embed"><svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_838_3489)">
                          <path
                            d="M8.5 15C6.64348 15 4.86301 14.2625 3.55025 12.9497C2.2375 11.637 1.5 9.85652 1.5 8C1.5 6.14348 2.2375 4.36301 3.55025 3.05025C4.86301 1.7375 6.64348 1 8.5 1C10.3565 1 12.137 1.7375 13.4497 3.05025C14.7625 4.36301 15.5 6.14348 15.5 8C15.5 9.85652 14.7625 11.637 13.4497 12.9497C12.137 14.2625 10.3565 15 8.5 15ZM8.5 16C10.6217 16 12.6566 15.1571 14.1569 13.6569C15.6571 12.1566 16.5 10.1217 16.5 8C16.5 5.87827 15.6571 3.84344 14.1569 2.34315C12.6566 0.842855 10.6217 0 8.5 0C6.37827 0 4.34344 0.842855 2.84315 2.34315C1.34285 3.84344 0.5 5.87827 0.5 8C0.5 10.1217 1.34285 12.1566 2.84315 13.6569C4.34344 15.1571 6.37827 16 8.5 16Z"
                            fill="#007705"></path>
                          <path
                            d="M11.4703 4.97028C11.4632 4.97718 11.4565 4.98453 11.4503 4.99228L7.97734 9.41728L5.88434 7.32328C5.74216 7.1908 5.55412 7.11868 5.35982 7.12211C5.16551 7.12553 4.98013 7.20425 4.84272 7.34166C4.7053 7.47907 4.62659 7.66446 4.62316 7.85876C4.61974 8.05306 4.69186 8.24111 4.82434 8.38328L7.47034 11.0303C7.54162 11.1014 7.6265 11.1575 7.71992 11.1951C7.81334 11.2328 7.91339 11.2512 8.01408 11.2493C8.11478 11.2475 8.21407 11.2253 8.30604 11.1843C8.398 11.1432 8.48074 11.084 8.54934 11.0103L12.5413 6.02028C12.6773 5.87761 12.7516 5.68718 12.7482 5.49015C12.7449 5.29312 12.6641 5.10533 12.5234 4.96737C12.3827 4.82942 12.1933 4.75239 11.9963 4.75293C11.7992 4.75348 11.6103 4.83155 11.4703 4.97028Z"
                            fill="black"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_838_3489">
                            <rect width="16" height="16" fill="white" transform="translate(0.5)"></rect>
                          </clipPath>
                        </defs>
                      </svg></div>
                    </div>
                    <div>A new code has been sent. You can only request</div>
                  </div>
                  <div className="header-wrapper">
                    <div className="text-size-large text-weight-bold">Sign In</div>
                    <div className="text-size-small text-color-dark-grey">Enter your email address</div>
                  </div>
                  <div className="form_component is-sign-in w-form">
                    <form className="form_form">
                      <div className="form_field-column">
                        <div className="form_field-wrapper">
                          <label htmlFor="First-name" className="form_label">First name</label>
                          <input type="text" className="form_input w-input" autoFocus={true} maxLength={256}
                            name="First-name" placeholder="John" id="First-name" />
                        </div>
                        <div className="form_field-wrapper">
                          <label htmlFor="Last-name" className="form_label">Last name</label>
                          <input type="text" className="form_input w-input" maxLength={256} name="Last-name"
                            placeholder="Doe" id="Last-name" />
                        </div>
                      </div>
                      <div className="form_field-wrapper">
                        <label htmlFor="Email" className="form_label">Email Address</label>
                        <input type="email" className="form_input w-input" maxLength={256} name="Email"
                          placeholder="john@doe.com" id="Email" />
                        <div className="error-text">Invalid verification code</div>
                      </div>
                      <div className="form_field-wrapper">
                        <label htmlFor="Password" className="form_label">Password</label>
                        <input type="password" className="form_input w-input" maxLength={256} name="Password"
                          placeholder="Enter your password" id="Password" />
                      </div>
                      <div className="form_field-wrapper">
                        <label htmlFor="Phone" className="form_label">Phone</label>
                        <input type="tel" className="form_input w-input" maxLength={256} name="Phone"
                          placeholder="+123456789" id="Phone" />
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
                          <div className="text-link-animation">Forgot password?</div>
                        </a>
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
                        <div className="resend-block">
                          <div className="icon-wrapper">
                            <div className="icon is-resend w-embed">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M16.537 17.567C14.7224 19.1393 12.401 20.0033 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 12.136 19.33 14.116 18.19 15.74L15 10H18C17.9998 8.15621 17.3628 6.36906 16.1967 4.94089C15.0305 3.51272 13.4069 2.53119 11.6003 2.16236C9.79381 1.79352 7.91533 2.06002 6.28268 2.91677C4.65002 3.77351 3.36342 5.16791 2.64052 6.86408C1.91762 8.56025 1.80281 10.4541 2.31549 12.2251C2.82818 13.9962 3.93689 15.5358 5.45408 16.5836C6.97127 17.6313 8.80379 18.1228 10.6416 17.9749C12.4795 17.827 14.2099 17.0488 15.54 15.772L16.537 17.567Z"
                                  fill="black"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="text-color-dark-grey">Resend the code in </div>
                          <div className="timer">2.34 s</div>
                        </div>
                      </div>
                      <div className="spacer-0"></div>
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

                          <span className="form_checkbox-label w-form-label">I accept the <a href="#">Terms
                            and
                            Conditions</a></span>
                        </label>
                      </div>
                      <button className="button is-form-submit w-button custom-button">Sign In</button>
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
                  <div className="spacer-xsmall"></div>
                   <div className="cta-wrapper">
                    <div>Don&#x27;t have an account?</div>
                    <a href="#" className="sign-up_button w-inline-block link-animation">
                      <div className="link-value">Sign Up</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}
