import React, {FC, ButtonHTMLAttributes} from 'react';
import s from './Button.module.css';


type ButtonPropsType = {
    error?: string
    del?: string
}
const Button: FC<React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement> & ButtonPropsType, HTMLButtonElement>> = (props) => {
    let btnClass: any;
    if (props.error) {
        btnClass = s.btnRed;
    } else if (props.del) {
        btnClass = s.btnRound
    } else {
        btnClass = s.btnOrig;
    }

    return (
        <div>
            <button {...props} className={btnClass}/>
        </div>
    );
};

export default Button;