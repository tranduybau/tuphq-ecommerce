import styles from './ProductDetail.module.scss'
import classNames from 'classnames';
import Breadcrumb from '@/components/Breadcrumb';
import ProductDetailItem from './components/DetailProductItem';
import RelatedProduct from './components/RelatedProduct';

export default function ProductDetail() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            <div className={classNames('my-[80px]')}>
                <Breadcrumb />
            </div>
            <div className={classNames(styles.detail)}>
                <ProductDetailItem />
            </div>
            <div className={classNames(styles.related)}>
                <div className={classNames(styles.heading)}>
                    <span className={classNames(styles.block)} />
                    <span className={classNames(styles.text, 'font-poppins')}>Related Item</span>
                </div>
                <div className={classNames(styles.list)}>
                    <RelatedProduct />
                </div>
            </div>
        </section>

    );
}

