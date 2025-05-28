"use client"

import Image from "next/image";
import "./style.css"

export default function Header() {
    return (
        <div className="header">
            <div className="container mx-auto">
                <div className="flex">
                    <Image
                        className=""
                        src="/logo-tpcmusicoterapia.png"
                        alt="Logo"
                        width={489}
                        height={124}
                        priority
                    />

                    <Image
                        className=""
                        src="/logo-tpcmusicoterapia-white-mobile.png"
                        alt="Logo"
                        width={180}
                        height={38}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
