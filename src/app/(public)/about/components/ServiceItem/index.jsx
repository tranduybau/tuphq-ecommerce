import styles from './ServiceItem.module.scss'

export default function ServiceItem(props) {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.icon}`}>
                {props.children}
            </div>
            <span className={`${styles.name} font-poppins`}>{props.name}</span>
            <span className={`${styles.description} font-poppins`}>{props.description}</span>
        </div>
    )
}