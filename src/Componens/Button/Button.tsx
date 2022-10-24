import React from 'react';

export type ButtonType = {
    buttonName: string
    callBack: () => void
    className?: string
    disabled?: boolean
}

export const Button: React.FC<ButtonType> = ({
                                                 buttonName,
                                                 callBack,
                                                 className,
                                                 disabled,
                                             }) => {


    const onClickHandler = () => {
        callBack()
    }

    return (

        <button onClick={onClickHandler} className={className} disabled={disabled}>{buttonName}</button>

    );
};
;