import Image from 'next/image'
import styles from './WishlistCard.module.scss'
import classNames from 'classnames'

//icon
import DeleteIcon from '@/svgs/Wishlist/icon-delete.svg'
import QuickViewIcon from '@/svgs/Quick-View.svg'
import CartIcon from '@/svgs/Cart.svg'

const imageStyle = {
    objectFit: 'contain',
}
export default function WishlistCard(props) {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.imageWrapper}`}>
                <Image
                    sizes='(max-width: 1200px) 100vw'
                    src={props.img}
                    alt='wishlist product'
                    fill={true}
                    style={imageStyle}
                    priority={true}
                />
                <div className={`${styles.discountAndActions}`}>
                    {props.discount && <span className={`${styles.discount} font-poppins`}>-{props.discount}%</span>}
                    {props.type && <div className={`${styles.cardIconWrapper}`}>
                        {props.type === 'wishlist' && <DeleteIcon className={`${styles.deleteIcon}`} />}
                        {props.type === 'foryou' && <QuickViewIcon className={`${styles.quickViewIcon}`} />}
                    </div>}
                </div>
                <div className={`${styles.addCart}`}>
                    <CartIcon className={`${styles.cartIcon}`} />
                    <span className={`${styles.addCartText} font-poppins`}>Add To Card</span>
                </div>
            </div>
            <div className={`${styles.information}`}>
                {props.name && <span className={`${styles.name} font-poppins`}>{props.name}</span>}
                {props.price && <div className={styles.priceWrapper}>
                    {props.discount && <span className={`${styles.discountPrice} font-poppins`}>${(props.price * ((100 - props.discount) / 100)).toFixed(3)}</span>}
                    {props.price && <span className={classNames(styles.price, 'font-poppins', { [styles.priceLine]: props.discount != null })} >${props.price}</span>}
                </div>
                }
            </div>
        </div>
    )
}