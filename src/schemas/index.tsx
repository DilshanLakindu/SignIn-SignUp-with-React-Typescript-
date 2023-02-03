import * as yup from "yup"

const passwordRules =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRules =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export const basicSchema = yup.object().shape({
    email:yup
    .string()
    .email()
    .matches(emailRules,{message:"Not valid email"})
    .required(),

    password:yup
    .string()
    .min(5 ,"Too short")
    .matches(passwordRules, {message:"Please create a stronger password"})
    .required("Required"),

    confirmpassword:yup.string()
    .min(5 ,"Too short")
    .matches(passwordRules, {message:"Please create a stronger password"})
    .required("Required"),

    firstname:yup.string().required("Required"),

    lastname:yup.string().required("Required"),
    
    phone:yup
    .string()
    .min(10)
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Must be only digits"
    )
    .required("Required"),

    checkbox:yup.boolean().oneOf([true],"Must Accept Terms and Condition"),

    checkbox2:yup.boolean().oneOf([true],"Must Agree with the Jobboard privacy policy")
    
})

