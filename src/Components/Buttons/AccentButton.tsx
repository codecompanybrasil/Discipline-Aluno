import styles from './Button.module.css'

type AccentButtonProps = {
    text: string,
    icon?: React.FC,
    hasIcon?: boolean,
    onClick?: () => void
}
const AccentButton = ({text, icon: Icon, hasIcon, onClick}: AccentButtonProps) => {
    return (
        <>
            <button className={`${styles.button} ${styles.accent_button}`} onClick={onClick}>
                {hasIcon && Icon && <Icon />}
                <span>{text}</span>
            </button>
        </>
    )
}

export default AccentButton