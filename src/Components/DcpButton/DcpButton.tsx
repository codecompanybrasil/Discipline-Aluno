import React from 'react';
import './DcpButton.css';

type ButtonTypes = "link" | "button"
type ButtonColors = "primary" | "secondary" | "accent" | "danger" | "success"

type ButtonProps = {
    text: string,
    type?: ButtonTypes,
    color?: ButtonColors,
    icon?: React.FC,
    hasIcon?: boolean,
    onClick?: () => void
}

const DcpButton = ({ text, type = "link", color = "primary", icon: Icon, hasIcon, onClick = () => { } }: ButtonProps) => {

    if (type == 'button') {
        return (
            <button className={['dcp-button', color].join(" ")} onClick={onClick}>
                {hasIcon && Icon && <Icon />}
                <span>{text}</span>
            </button>
        )
    }
    return (
        <a className={['dcp-link', color].join(" ")} onClick={onClick}>
            {hasIcon && Icon && <Icon />}
            <span>{text}</span>
        </a>
    )
}

export default DcpButton