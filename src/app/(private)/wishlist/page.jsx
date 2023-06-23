import styles from './WishlistPage.module.scss'
import Wishlist from './components/Wishlist'
import WishlistForYou from './components/WishlistForYou'

export default function WishlistPage() {
    return (
        <main className={styles.wrapper}>
            <Wishlist />
            <WishlistForYou />
        </main>
    )

}
