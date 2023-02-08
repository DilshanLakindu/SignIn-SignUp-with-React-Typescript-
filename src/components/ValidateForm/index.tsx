import React, { useEffect, useState } from 'react';
import LOGO from "../../Assets/images/Ellipse1.jpg"
import OtpInput from './otpinput';

const ValidateForm = () => {

  // const{}=useFormik({
  //     initialValues:{

  //     },
  // });

  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState<string>("");
 
  

  const handleSubmit = () => {
    console.log('otp validation ', otp === '' || otp === null);
    console.log('otp validation otp', otp);
    console.log('otp validation lenght ', otp.length);

    if (otp.length !< 6) {

      setMessage("Please enter OTP");
    } else if(otp.length === 6) {
      setMessage("");
    }
  };

  const onChange = (value: string) => {
    setOtp(value)
  };


  // const handleChange = (

  //   { target }: React.ChangeEvent<HTMLInputElement>,
  //   index: number
  // ): void => {
  //   const { value } = target;
  //   const newOTP: string[] = [...otp];
  //   newOTP[index] = value.substring(value.length - 1);

  //   if (!value) setactiveIndex(index - 1);
  //   else setactiveIndex(index + 1);

  //   setOtp(newOTP);
  //   setactiveIndex(index)
  // };

  // const handleKeyDown = (key: React.KeyboardEvent<HTMLInputElement>, index: number) => {
  //   console.log('index in back button', index)
  //   if (key.key === "Backspace") {
  //     let newOTP: string[] = [...otp];

  //     newOTP.pop();
  //     setOtp(newOTP);
  //   }
  // };

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, [activeIndex]);



  // const handleSubmit = () => {
  //   if (otp.length != 6 && otp.length < 6) {
  //     console.log(otp.length);
  //     setMessage("Please enter the OTP");
  //   } else {
  //     setMessage("");
  //   }
  // };


  useEffect(() => {
    if (otp.length === 6) {
      setMessage("")
    }
    else {

    }
  }, [otp]);


  console.log(otp)


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
                    // onSubmit={handleSubmit}
                    >
                      <div className="header-wrapper">
                        <div className="text-size-large text-weight-bold">Validate your email</div>
                        <div className="text-size-small text-color-dark-grey">Enter the code received to your email</div>
                      </div>

                      <div className="form_field-wrapper is-verification">
                        <div className="input_number-wrapper" >

                          {/* {[1, 2, 3, 4, 5, 6].map((_, index) => {
                            return (
                              <React.Fragment key={index}>
                                <input
                                  type="text"
                                  className="form_input is-number w-input"
                                  name="otp"
                                  placeholder="0"
                                  autoComplete="one-time-code"
                                  maxLength={6}
                                  // maxLength={valueLength}
                                  id="otp"
                                  // onChange={(e) => handleChange(e, index)}
                                  ref={index === activeIndex ? inputRef : null}
                                  value={otp[index]}
                                  // onKeyDownCapture={(e) => handleKeyDown(e, index)}
                                />
                              </React.Fragment>
                            );
                          })} */}
                          <OtpInput setOtp={setOtp} value={otp} valueLength={6} onChange={onChange} />

                        </div>
                        <div>
                          <p className="error-text">{message}</p>
                        </div>
                        <button type='button' className="button is-form-submit w-button custom-button" onClick={handleSubmit}>Verify</button>
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