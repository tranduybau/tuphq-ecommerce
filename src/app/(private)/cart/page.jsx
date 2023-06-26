import Breadcrumb from '@/components/Breadcrumb'
import styles from './CartPage.module.scss'
import TableCart from './components/TableCart'

export default function CartPage() {
    return (
        <section className={`${styles.wrapper} container`}>
            <div className={`${styles.breadcrumb}`}>
                <Breadcrumb />
            </div>
            <div className={`${styles.table}`}>
                <TableCart />
            </div>
        </section>
    )
}
