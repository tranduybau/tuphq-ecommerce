import styles from './Featured.module.scss'
import FeaturedItem from './components/FeaturedItem'

//icon
import PerfumeFeature from '@/svgs/perfume-feature.svg'
import SpeakerFeature from '@/svgs/speaker-feature.svg'
import WWomanFeature from '@/svgs/woman-feature.svg'
import Ps5Feature from '@/svgs/ps5-feature.svg'
import DeliveryIcon from '@/svgs/icon-delivery.svg'
import CustomerServiceIcon from '@/svgs/Icon-Customer-service.svg'
import SecureIcon from '@/svgs/Icon-secure.svg'
import ServiceItem from './components/ServiceItem'


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
                    name="PlayStation 5"
                    description="Black and White version of the PS5 coming out on sale"
                    className="basis-1/2 w-full xl:h-[600px] sm:h-[570px] md:h-[360px] lg:h-[490px]">
                    <Ps5Feature className={`${styles.ps5}`} />
                </FeaturedItem>
                <div className={`${styles.featuredCol}`}>
                    <FeaturedItem
                        name="Women's Collections"
                        description="Featured woman collection that give you another vibe"
                        className="xl:h-[50%]">
                        <WWomanFeature className={`${styles.woman}`} />
                    </FeaturedItem>
                    <div className={`${styles.featuredRow} h-[50%]`}>
                        <FeaturedItem
                            name="Speakers"
                            description="Amazon wireless speakers">
                            <SpeakerFeature className={`${styles.speaker}`} />
                        </FeaturedItem>
                        <FeaturedItem
                            name="Perfume"
                            description="GUCCI INTENSE OUD EDP">
                            <PerfumeFeature className={`${styles.perfume}`} />
                        </FeaturedItem>
                    </div>
                </div>
            </div>
            <div className={styles.service}>
                <ServiceItem
                    name="FREE AND FAST DELIVERY"
                    description="Free delivery for all orders over $140">
                    <DeliveryIcon className={`${styles.serviceIcon}`} />
                </ServiceItem>
                <ServiceItem
                    name="24/7 CUSTOMER SERVICE"
                    description="Friendly 24/7 customer support">
                    <CustomerServiceIcon className={`${styles.serviceIcon}`} />
                </ServiceItem>
                <ServiceItem
                    name="MONEY BACK GUARANTEE"
                    description="We return money within 30 days">
                    <SecureIcon className={`${styles.serviceIcon}`} />
                </ServiceItem>
            </div>
        </div>
    )
}