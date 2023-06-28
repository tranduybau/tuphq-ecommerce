"use client"
import { usePathname } from 'next/navigation'
import styles from './Breadcrumb.module.scss'
import Link from 'next/link'

export default function Breadcrumb(props) {
    let pathname = usePathname()
    if(props.pathname){
        pathname = props.pathname
    }
    const pathNameArray = pathname.split('/')
    pathNameArray.shift()
    const pathNameMainArray = pathNameArray.map(pathname => {
        return pathname.slice(0).charAt(0).toUpperCase() + pathname.slice(1)
    })
    return (
        <div className={styles.wrapper}>
            <Link href='/' className={`${styles.link} font-poppins`}>
                Home
            </Link>
            {pathNameMainArray.map((url, index) => {
                return (
                    <Link key={index} href={pathname} className={`${styles.link} font-poppins`}>
                        {url}
                    </Link>
                )
            })}
            {props.urls && props.urls.map((url, index) => {
                return (
                    <Link key={index} href={'/'} className={`${styles.link} font-poppins`}>
                        {url}
                    </Link>
                )
            })}
        </div>
    )
}