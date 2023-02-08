import React from "react";
// import { css } from "../../schemas/index"

export interface InputProps {
  label: string;
  htmlFor?: string;
  type: string;
  maxLength?: number;
  name: string;
  dataName?: string;
  placeholder: string;
  id: string;
  children?: JSX.Element | JSX.Element[] | null;
  value?: string;
  error?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const TextInput = (props: InputProps) => {
  return (
    <div className="form_field-wrapper">
      <label htmlFor={props.htmlFor} className="form_label">
        {props.label}
      </label>
      <input
        type={props.type}
        // className={css(
        //   props.error === true
        //     ? "form_input_error w-input"
        //     : "" || props.error === false
        //     ? "form_input w-input"
        //     : ""
        // )}
        maxLength={props.maxLength}
        name={props.name}
        data-name={props.dataName}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
      {props.children}
    </div>
  );
};

export default TextInput;