import styles from './FeaturedItem.module.scss'
export default function FeaturedItem(props){
    return (
        <div className={`${props.className} ${styles.wrapper}`}>
            <div className={`${styles.image}`}>{props.children}</div>
            <div className={`${styles.content}`}>
                <span className={`${styles.name} font-inter`}>{props.name}</span>
                <span className={`${styles.description} font-poppins`}>{props.description}</span>
                <a href='/' className={`${styles.link} font-poppins`}>Shop Now</a>
            </div>
        </div>
    )
}