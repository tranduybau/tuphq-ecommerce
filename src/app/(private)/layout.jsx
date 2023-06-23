"use client"
import { useRouter } from "next/navigation";

export default function PrivateLayout({ children }) {
    const router = useRouter()
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser === null) {
        router.push('/signin')
    }

    return (
        <div>
            {children}
        </div>
    )
}