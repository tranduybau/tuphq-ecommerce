import classNames from 'classnames';
import styles from './AboutMemberCard.module.scss'
import Image from 'next/image';

//icon
import TwitterIcon from '@/svgs/About/Icon-Twitter.svg'
import InstagramIcon from '@/svgs/About/icon-instagram.svg'
import LinkedinIcon from '@/svgs/About/Icon-Linkedin.svg'

export default function AboutMemberCard(props) {
    return (
        <div className={classNames(styles.wrapper)}>
            <div className={classNames(styles.image)}>
                <Image
                    src={props.img}
                    alt='member'
                    fill={true}
                    sizes='(max-width: 768px) 100vw'
                    className='object-contain'
                />
            </div>
            <div className={classNames(styles.infor)}>
                <span className={classNames(styles.name, 'font-inter')}>{props.name}</span>
                <span className={classNames(styles.position, 'font-poppins')}>{props.position}</span>
                <div className={classNames(styles.social)}>
                    <TwitterIcon className={classNames(styles.icon)}/>
                    <InstagramIcon className={classNames(styles.icon)}/>
                    <LinkedinIcon className={classNames(styles.icon)}/>
                </div>
            </div>
        </div>
    );
}

