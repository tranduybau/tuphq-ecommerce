import classNames from 'classnames';
import styles from './MyAccountPage.module.scss'
import Breadcrumb from '@/components/Breadcrumb';
import MyAccountSidebar from './components/MyAccountSidebar';
import MyAccountForm from './components/MyAccountForm';

export default function MyAccountPage() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            <div className={classNames(styles.breadcrumb)}>
                <Breadcrumb />
                <span className={classNames(styles.welcomeText, 'font-poppins')}>
                    Welcome! <span className={classNames(styles.welcomeName, styles.welcomeText, 'font-poppins')}>Md Rimel</span>
                </span>
            </div>
            <div className={classNames(styles.main)}>
                <MyAccountSidebar />
                <MyAccountForm />
            </div>
        </section>
    );
}

