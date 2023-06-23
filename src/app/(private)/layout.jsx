"use client"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function PrivateLayout({ children }) {
    const router = useRouter()
    const currentUser = Cookies.get('currentUser') ? JSON.parse(Cookies.get('currentUser')) : null;
    if (currentUser === null) {
        router.push('/signin')
    }

    return (
        <div>
            {children}
        </div>
    )
}