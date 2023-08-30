import styles from './Menu.module.css'

type OptionProps = {
    text: string,
    key?: string,
    onClick?: () => void
}

type MenuProps = {
    options: object
}

function Option({text, key, onClick = () => {}}: OptionProps) {
    return (
        <>
            <p onClick={() => onClick} key={key ? key : null} >{text}</p>
        </>
    )
}

function Menu({options}: MenuProps) {
    return (
        <div className={styles.menu} >
            {
                options.map((item: object, index: string) => (
                    <p key={index}>{item.text}</p>
                ))
            }
        </div>
    )
}

export default Menu