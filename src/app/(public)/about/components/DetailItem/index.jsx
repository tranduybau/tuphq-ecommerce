import classNames from 'classnames';
import styles from './DetailItem.module.scss'
export default function DetailItem({ icon, count, text }) {
    const Icon = icon;
    return (
        <div className={classNames(styles.wrapper)}>
            <div className={classNames(styles.iconWrapper)}>
                <Icon className={classNames(styles.icon)} />
            </div>
            <span className={classNames(styles.count, 'font-inter')}>
                {count}
            </span>
            <span className={classNames(styles.text, 'font-poppins')}>
                {text}
            </span>
        </div>
    );
}

