"use client"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function AuthLayout({ children }) {
    const router = useRouter()
    if (typeof window !== 'undefined') {
        const currentUser = Cookies.get('currentUser') ? JSON.parse(Cookies.get('currentUser')) : null;
        if (currentUser !== null) {
            router.push('/');
        }
        return <div>{children}</div>;
    }
}
