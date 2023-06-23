"use client"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function AuthLayout({ children }) {
    const router = useRouter()
    const currentUser = Cookies.get('currentUser') ? JSON.parse(Cookies.get('currentUser')) : null;
    if (currentUser) {
        router.push('/')
    }

    return (
        <div>
            {children}
        </div>
    )
}