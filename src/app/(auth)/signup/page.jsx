import Image from 'next/image'
import styles from './SignUp.module.scss'
import SignUpForm from './components/SignUpForm'

export default function SignUp() {
    return (
        <section className={`${styles.wrapper}`}>
            <div className={`${styles.sideImg}`}>
                <Image
                    src="/image/side-img.png"
                    alt="side img"
                    fill={true}
                />
            </div>
            <div className={`${styles.signUpForm}`}>
                <span className={`${styles.titleText} font-inter`}>Create an account</span>
                <span className={`${styles.noticeText} font-poppins`}>Enter your details below</span>
                <SignUpForm />
            </div>
        </section>
    )
}