"use client";

import "@/app/style/Modal.css";
import { useRouter } from "next/navigation"

export default function Modal({
    children
}: {
    children: React.ReactNode
}) {
    const router = useRouter();

    return (
        <div className="modal-backdrop">
            <div className="container mx-auto modal">
                <button className="close-button" onClick={() => {
                    router.back()
                }} />
                {children}
            </div>
        </div>
    )
}