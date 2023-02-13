import React, {memo} from 'react';
import s from './Button.module.css'



export type ButtonType = {
    /**
     * variant color theme of Button: Light or dark mode
     */
    variant?: boolean
    /**
     * label <strong>[REQUIRED FIELD]</strong>. This is text on the button
     */
    label: string
    /**
     * callBack function <strong>[REQUIRED FIELD]</strong>. Add onClick handler on this  callBack
     */
    callBack: () => void
    /**
     * className <strong>[OPTION FIELD]</strong>. Component have a default class if you don`t want used custom class
     */
    className?: string
    /**
     * disabled <strong>[OPTION FIELD]</strong>. Button can be disabled if hav some expression
     */
    disabled?: boolean
}

export const Button: React.FC<ButtonType> = memo((
    {
        variant,
        label,
        callBack,
        ...resProps
    }) => {


    //callBack function
    const onClickHandler = () => {
        callBack()
    }

    const mode = variant ? s.defaultDarkMode : s.defaultLightMode

    return (
        <button
            onClick={onClickHandler}
            className={mode}
            disabled={resProps.disabled}
            {...resProps}
            > {label} </button>


    )
})
