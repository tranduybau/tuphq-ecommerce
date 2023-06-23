"use client"
import { useRouter } from "next/navigation";

export default function AuthLayout({ children }) {
    const router = useRouter()
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser) {
        router.push('/')
    }

    return (
        <div>
            {children}
        </div>
    )
}