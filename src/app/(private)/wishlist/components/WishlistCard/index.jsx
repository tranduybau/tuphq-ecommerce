import React from 'react';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import Image from 'next/image';
import PropTypes from 'prop-types';

import CartIcon from '@/svgs/Cart.svg';
import QuickViewIcon from '@/svgs/Quick-View.svg';
// icon
import DeleteIcon from '@/svgs/Wishlist/icon-delete.svg';

import styles from './WishlistCard.module.scss';

const imageStyle = {
  objectFit: 'contain',
};
export default function WishlistCard({ id, img, discount, type, name, price }) {
  WishlistCard.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
  const handleDeleteItem = () => {
    // Gọi hàm onTotalChange để cập nhật giá trị tổng
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems'));
    const productIdSelected = id;
    const currentUser = Cookies.get('currentUser')
      ? JSON.parse(Cookies.get('currentUser'))
      : null;

    if (currentUser) {
      const { productId } = wishlistItems; // Lấy mảng productId từ cartItems

      const updatedProductId = productId.filter(
        (item) => item !== productIdSelected
      );

      const updatedWishlistItems = {
        ...wishlistItems,
        productId: updatedProductId,
      };

      localStorage.setItem(
        'wishlistItems',
        JSON.stringify(updatedWishlistItems)
      );
      toast.success('Đã xóa thành công');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.imageWrapper}`}>
        <Image
          sizes="(max-width: 1200px) 100vw"
          src={img}
          alt="wishlist product"
          fill
          style={imageStyle}
          priority
        />
        <div className={`${styles.discountAndActions}`}>
          {discount && (
            <span className={`${styles.discount} font-poppins`}>
              -{discount}%
            </span>
          )}
          {type && (
            <div className={`${styles.cardIconWrapper}`}>
              {type === 'wishlist' && (
                <button type="button" onClick={handleDeleteItem}>
                  <DeleteIcon className={`${styles.deleteIcon}`} />
                </button>
              )}
              {type === 'foryou' && (
                <QuickViewIcon className={`${styles.quickViewIcon}`} />
              )}
            </div>
          )}
        </div>
        <div className={`${styles.addCart}`}>
          <CartIcon className={`${styles.cartIcon}`} />
          <span className={`${styles.addCartText} font-poppins`}>
            Add To Cart
          </span>
        </div>
      </div>
      <div className={`${styles.information}`}>
        {name && <span className={`${styles.name} font-poppins`}>{name}</span>}
        {price && (
          <div className={styles.priceWrapper}>
            {discount && (
              <span className={`${styles.discountPrice} font-poppins`}>
                ${(price * ((100 - discount) / 100)).toFixed(3)}
              </span>
            )}
            {price && (
              <span
                className={classNames(styles.price, 'font-poppins', {
                  [styles.priceLine]: discount != null,
                })}
              >
                ${price}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
