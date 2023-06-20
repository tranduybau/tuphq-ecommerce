import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

//icon
import SendIcon from '@/svgs/icon-send.svg'
import CopyrightIcon from '@/svgs/icon-copyright.svg'
import FacebookIcon from '@/svgs/Icon-Facebook.svg'
import InstagramIcon from '@/svgs/icon-instagram.svg'
import TwitterIcon from '@/svgs/Icon-Twitter.svg'
import LinkedinIcon from '@/svgs/Icon-Linkedin.svg'

export default function Footer() {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.main} container`}>
                <div className={`${styles.content}`}>
                    <span className={`${styles.headingLg} font-inter`}>
                        Exclusive
                    </span>
                    <ul className={`${styles.contentText}`}>
                        <li className={`${styles.contentTextItem} ${styles.subcribeItem}`}>
                            <span className={`${styles.contentTextLink} ${styles.subcribeText} ${styles.noHover} font-poppins`}>Subcribe</span>
                        </li>
                        <li className={`${styles.contentTextItem}`}>
                            <span className={`font-poppins ${styles.contentTextLink} ${styles.noHover}`}>Get 10% off your first order</span>
                        </li>
                        <li className={`${styles.contentTextItem} ${styles.contentInputItem}`}>
                            <input className={`${styles.contentInput}`} type='text' placeholder='Enter your email' />
                            <SendIcon className={`${styles.sendIcon}`} />

                        </li>
                    </ul>

                </div>
                <div className={`${styles.content}`}>
                    <span className={`${styles.heading} font-inter`}>
                        Support
                    </span>
                    <ul className={`${styles.contentText}`}>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink} ${styles.noHover}`}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Link>
                        </li>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink} ${styles.noHover}`}>exclusive@gmail.com</Link>
                        </li>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink} ${styles.noHover}`}>+88015-88888-9999</Link>
                        </li>
                    </ul>

                </div>
                <div className={`${styles.content}`}>
                    <span className={`${styles.heading} font-inter`}>
                        Account
                    </span>
                    <ul className={`${styles.contentText}`}>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink}`}>My Account</Link>
                        </li>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/signin' className={`font-poppins ${styles.contentTextLink}`}>Login / Register</Link>
                        </li>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink}`}>Cart</Link>
                        </li>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink}`}>Wishlist</Link>
                        </li>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink}`}>Shop</Link>
                        </li>
                    </ul>

                </div>
                <div className={`${styles.content}`}>
                    <span className={`${styles.heading} font-inter`}>
                        Quick Link
                    </span>
                    <ul className={`${styles.contentText}`}>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink}`}>Privacy Policy</Link>
                        </li>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink}`}>Terms Of Use</Link>
                        </li>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink}`}>FAQ</Link>
                        </li>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`font-poppins ${styles.contentTextLink}`}>Contact</Link>
                        </li>
                    </ul>

                </div>
                <div className={`${styles.content}`}>
                    <span className={`${styles.heading} font-inter`}>
                        Download App
                    </span>
                    <ul className={`${styles.contentText}`}>
                        <li className={`${styles.contentTextItem}`}>
                            <Link href='/' className={`${styles.DownloadAppText} font-poppins`}>Save $3 with App New User Only</Link>
                        </li>
                        <li className={`${styles.contentTextItem} mb-[24px]`}>
                            <div className={`${styles.downloadAppImg}`}>
                                <Image
                                    src='/image/QrCode.png'
                                    alt='QR CODE'
                                    width={80}
                                    height={80}
                                />
                                <div className={`${styles.downloadAppLink}`}>
                                    <Link href='/' className=''>
                                        <Image
                                            src='/image/GooglePlay.png'
                                            alt='App Store'
                                            width={104}
                                            height={30}
                                        />
                                    </Link>
                                    <Link href='/' className=''>
                                        <Image
                                            src='/image/AppStore.png'
                                            alt='App Store'
                                            width={104}
                                            height={34}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className={`${styles.contentTextItem} flex gap-[24px] lg:justify-start md:justify-center sm:justify-center xs:justify-center`}>
                            <Link href='/' className={`${styles.contentTextLink}`}>
                                <FacebookIcon className={`${styles.contentIconSocial}`} />
                            </Link>
                            <Link href='/' className={`${styles.contentTextLink}`}>
                                <TwitterIcon className={`${styles.contentIconSocial}`} />
                            </Link>
                            <Link href='/' className={`${styles.contentTextLink}`}>
                                <InstagramIcon className={`${styles.contentIconSocial}`} />
                            </Link>
                            <Link href='/' className={`${styles.contentTextLink}`}>
                                <LinkedinIcon className={`${styles.contentIconSocial}`} />
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
            <div className={`${styles.copyright}`}>
                <CopyrightIcon className={`${styles.copyrightIcon}`}></CopyrightIcon>
                <span className={`font-poppins ${styles.contentTextLink}`} >Copyright Rimel 2022. All right reserved</span>
            </div>
        </div>
    )
}