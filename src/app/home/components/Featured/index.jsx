import styles from './Featured.module.scss'
import FeaturedItem from './components/FeaturedItem'
import Image from 'next/image'
import ServiceItem from './components/ServiceItem'

//icon
import DeliveryIcon from '@/svgs/Featured/icon-delivery.svg'
import CustomerServiceIcon from '@/svgs/Featured/Icon-Customer-service.svg'
import SecureIcon from '@/svgs/Featured/Icon-secure.svg'


export default function Featured() {
    return (
        <div className={`container ${styles.wrapper}`}>
            <div className={styles.title}>
                <span className={styles.block}></span>
                <h5 className={`font-poppins ${styles.textTitle}`}>Featured</h5>
            </div>
            <span className={`font-inter ${styles.newArrival}`}>New Arrival</span>
            <div className={`${styles.featured}`}>
                <FeaturedItem
                    imgClassName="sm:h-[450px] xs:h-[350px]"
                    name="PlayStation 5"
                    description="Black and White version of the PS5 coming out on sale"
                    className="basis-1/2 w-full xl:h-[600px] md:h-[600px] sm:h-[450px]">
                    <Image
                        src='/image/ps5.png'
                        alt='featured'
                        fill={true} />
                </FeaturedItem>
                <div className={`${styles.featuredCol}`}>
                    <FeaturedItem
                        imgClassName="md:h-[280px] sm:h-[300px] xs:h-[200px]"
                        name="Women's Collections"
                        description="Featured woman collection that give you another vibe"
                        className="lg:h-[50%] sm:h-[50%]">
                        <Image
                            src='/image/woman.png'
                            alt='featured'
                            fill={true} />
                    </FeaturedItem>
                    <div className={`${styles.featuredRow} h-[50%]`}>
                        <FeaturedItem
                            imgClassName="md:h-[280px] sm:h-[300px] xs:h-[200px]"
                            name="Speakers"
                            description="Amazon wireless speakers">
                            <Image
                                src='/image/speaker.png'
                                alt='featured'
                                fill={true} />
                        </FeaturedItem>

                        <FeaturedItem
                            imgClassName="md:h-[280px] sm:h-[300px] xs:h-[200px]"
                            name="Perfume"
                            description="GUCCI INTENSE OUD EDP">
                            <Image
                                src='/image/perfume.png'
                                alt='featured'
                                fill={true} />
                        </FeaturedItem>
                    </div>
                </div>
            </div>
            <div className={styles.service}>
                <ServiceItem
                    name="FREE AND FAST DELIVERY"
                    description="Free delivery for all orders over $140">
                    <div className={`${styles.serviceIconWrapper}`}>
                        <DeliveryIcon className={`${styles.serviceIcon}`} />
                    </div>
                </ServiceItem>
                <ServiceItem
                    name="24/7 CUSTOMER SERVICE"
                    description="Friendly 24/7 customer support">
                    <div className={`${styles.serviceIconWrapper}`}>
                        <CustomerServiceIcon className={`${styles.serviceIcon}`} />
                    </div>
                </ServiceItem>
                <ServiceItem
                    name="MONEY BACK GUARANTEE"
                    description="We return money within 30 days">
                    <div className={`${styles.serviceIconWrapper}`}>
                        <SecureIcon className={`${styles.serviceIcon}`} />
                    </div>
                </ServiceItem>
            </div>
        </div>
    )
}