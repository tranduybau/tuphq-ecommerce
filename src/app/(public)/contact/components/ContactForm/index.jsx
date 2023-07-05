"use client"
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classNames from 'classnames';
import styles from './ContactForm.module.scss';
import InputForm from '@/components/InputForm';

const schema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email('Invalid email').required('Please enter your email'),
    phone: yup.string().required('Please enter your phone number'),
});

export default function ContactForm() {
    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const { handleSubmit } = methods;

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)} className={classNames(styles.wrapper, 'font-poppins')}>
                <div className={classNames(styles.information)}>
                    <InputForm name="name" type="text" placeholder="Your Name *" className={classNames(styles.input)} />
                    <InputForm name="email" type="text" placeholder="Your Email *" className={classNames(styles.input)} />
                    <InputForm name="phone" type="text" placeholder="Your Phone *" className={classNames(styles.input)} />
                </div>

                <textarea className={classNames(styles.massages)} name="massages" form="contactForm" placeholder='Your Massage'/>

                <button type="submit" className={classNames(styles.btn)}>Send Massage</button>
            </form>
        </FormProvider>
    );
}

