import styles from './Button.module.css'
import React from 'react'

type PrimaryButtonProps = {
    text: string,
    icon?: React.FC,
    hasIcon?: boolean,
    onClick?: () => void
}

function PrimaryButton({text, icon: Icon, hasIcon, onClick = () => {}}: PrimaryButtonProps) {

    return (
        <>
            <button className={`${styles.button} ${styles.primary_button}`} onClick={onClick}>
                {hasIcon && Icon && <Icon />}
                <span>{text}</span>
            </button>
        </>
    )
}
export default PrimaryButton