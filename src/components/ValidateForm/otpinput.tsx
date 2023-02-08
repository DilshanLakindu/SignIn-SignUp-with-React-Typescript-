import React, { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from 'react';
import { RE_DIGIT } from '../../constants';


export type Props = {
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
    setOtp: Dispatch<SetStateAction<string>>;
};

function OtpInput({ value, valueLength, onChange }: Props) {

    const inputRef = useRef<HTMLInputElement>(null);
    // const [activeIndex, setactiveIndex] = useState<number>(0);

    const valueItems = useMemo(() => {
        const valueArray = value.split('');
        const items: Array<string> = [];

        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];

            if (RE_DIGIT.test(char)) {
                items.push(char);
            } else {
                items.push('');
            }
        }

        return items;
    }, [value, valueLength]);


    const inputOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        idx: number
    ) => {
        const target = e.target;
        let targetValue = target.value.trim();
        const isTargetValueDigit = RE_DIGIT.test(targetValue);

        if (!isTargetValueDigit && targetValue !== '') {
            return;
        }

        targetValue = isTargetValueDigit ? targetValue : ' ';

        const targetValueLength = targetValue.length;

        if (targetValueLength === 1) {
            const newValue =
                value.substring(0, idx) + targetValue + value.substring(idx + 1);

            onChange(newValue);


            if (!isTargetValueDigit) {
                return;
            }

            const nextElementSibling =
                target.nextElementSibling as HTMLInputElement | null;

            if (nextElementSibling) {
                nextElementSibling.focus();
            } else if (targetValueLength === valueLength) {
                onChange(targetValue);
                target.blur();
            }
        }
    };

   const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

        const target = e.target as HTMLInputElement;
        const targetValue = target.value;
        console.log("Target value", targetValue)
        console.log("target.value ", target.value)
        console.log("Value", value)
        target.setSelectionRange(0, targetValue.length);

        if (e.key !== 'Backspace') {
            return;
        }

        if (e.key === 'Backspace') {
            
            console.log('value.length == ', value.length)
            const newOpt = value.substring(0, (value.length === 2 ? value.length - 2 : value.length - 1))
            onChange(newOpt)

        }

        const previousElementSibling =
            target.previousElementSibling as HTMLInputElement | null;
        console.log('previousElementSibling ', previousElementSibling);

        if (previousElementSibling) {
            previousElementSibling.focus();
        }

    };

    const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const { target } = e;

        target.setSelectionRange(0, target.value.length);
    };


    // console.log("full length", valueLength)
    // console.log("Value", value)



    return (
        <>
            {valueItems.map((digit, idx) => {
                return (

                    <input
                        key={idx}
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        pattern="\d{1}"
                        maxLength={valueLength}
                        value={digit}
                        className="form_input is-number w-input"
                        onChange={(e) => inputOnChange(e, idx)}
                        onKeyDown={inputOnKeyDown}
                        onFocus={inputOnFocus}
                        // ref={idx === activeIndex ? inputRef : null}

                    />

                );
            })}
        </>


    )
}

export default OtpInput