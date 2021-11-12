import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import s from './Checkbox.module.css';


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}
const Checkbox: FC<CheckboxPropsType> = (
    {
        type,
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        children,
        ...restProps
    }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    // const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

    return (
        <label className={s.labelCheckbox}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={s.finalInputClassName}
                {...restProps}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    )
};

export default Checkbox;