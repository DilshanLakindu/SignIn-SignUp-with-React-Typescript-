import React, { useEffect, useRef, useState } from "react";
// import Header from "../common/header";
// import Button from "../common/button";
// import Logo from "../common/logo";
import logo from "../assets/images/Ellipse-1.jpg";
// import SuccessMessage from "../common/validateMessage/success-message";
// import ErrorMessage from "../common/validateMessage/error-message";
// import { useNavigate } from "react-router-dom";
// import InputValidation from "../common/validateMessage/input-Validation";

const EmailValidate = () => {
  const [otp, setOtp] = useState<string[]>([]);
  const [activeIndex, setactiveIndex] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
//   const Navigate = useNavigate();

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[index] = value.substring(value.length - 1);

    if (!value) setactiveIndex(index - 1);
    else setactiveIndex(index + 1);

    setOtp(newOTP);
  };

  const handleKeyDown = (key: React.KeyboardEvent<HTMLInputElement>) => {
    if (key.key === "Backspace") {
      let newOTP: string = otp.toString();

      newOTP.substring(0, (otp.length === 2 ? otp.length - 1 : otp.length -2))
      
      setOtp(newOTP.split(''));
    }
    
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeIndex]);

  const handleSubmit = () => {
    if (otp.length != 6) {
      console.log(otp.length);
      setMessage("Please enter the OTP");
    } else {
      setMessage("");
    }
  };

  return (
    <main className="main-wrapper">
      <div className="section is-sign-in">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="section_component is-sign-in">
                {/* <Logo source={logo} /> */}
                <div className="form-wrapper">
                  {/* <SuccessMessage />
                  <ErrorMessage /> */}
                  <div className="form_component is-sign-in w-form">
                    <form
                      id="wf-form-Form"
                      name="wf-form-Form"
                      data-name="Form"
                      method="get"
                      className="form_form"
                    >
                      {/* <Header
                        title={"Validate your Email"}
                        subtitle={"Enter the code received to your email"}
                      /> */}
                      <div className="form_field-wrapper is-verification">
                        <div className="input_number-wrapper">
                          {[1, 2, 3, 4, 5, 6].map((_, index) => {
                            return (
                              <React.Fragment key={index}>
                                <input
                                  type="text"
                                  className="form_input is-number w-input"
                                  name="OPT"
                                  placeholder="0"
                                  id="OPT"
                                  onChange={(e) => handleChange(e, index)}
                                  ref={index === activeIndex ? inputRef : null}
                                  value={otp[index]}
                                  onKeyDownCapture={(e) => handleKeyDown(e)}
                                />
                              </React.Fragment>
                            );
                          })}
                        </div>
                        {/* <InputValidation message={message} />
                        <Button
                          label={"Verify"}
                          onClick={handleSubmit}
                          type={"button"}
                        /> */}
                        <div className="resend-block">
                          <div className="icon-wrapper">
                            <div className="icon is-resend w-embed">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.537 17.567C14.7224 19.1393 12.401 20.0033 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 12.136 19.33 14.116 18.19 15.74L15 10H18C17.9998 8.15621 17.3628 6.36906 16.1967 4.94089C15.0305 3.51272 13.4069 2.53119 11.6003 2.16236C9.79381 1.79352 7.91533 2.06002 6.28268 2.91677C4.65002 3.77351 3.36342 5.16791 2.64052 6.86408C1.91762 8.56025 1.80281 10.4541 2.31549 12.2251C2.82818 13.9962 3.93689 15.5358 5.45408 16.5836C6.97127 17.6313 8.80379 18.1228 10.6416 17.9749C12.4795 17.827 14.2099 17.0488 15.54 15.772L16.537 17.567Z"
                                  fill="black"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="text-color-dark-grey">
                            Resend the code in{" "}
                          </div>
                          <div className="timer">2.34 s</div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmailValidate;
