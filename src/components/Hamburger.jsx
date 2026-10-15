import React, { useState } from 'react'
import { Link } from 'react-router'

const Hamburger = () => {
    const [isOpen, setIsopen] = useState(false)

    const links = [
        { name: "About", href: "#about" },
        { name: "Skill", href: "#skill" },
        { name: "Works", href: "#works" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <div className='md:hidden'>
            <button
                onClick={() => setIsopen(!isOpen)}
                className='block hamburger'
            >
                <span
                    className={`lines ${isOpen ? 'openlines rotate-45 translate-y-2' : ''}`}
                ></span>
                <span
                    className={`lines translate-y-1.5 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                ></span>
                <span
                    className={`lines translate-y-3 ${isOpen ? 'opacity-0' : ''}`}
                ></span>
            </button>

            <div className={`dropdown h-auto w-auto shadow-md  ${isOpen ? 'opacity-100' : 'hidden'}`}>

                {links.map((link) => (
                    <a
                        onClick={() => setIsopen(false)}
                        key={link.name}
                        href={link.href}

                    >
                        {link.name}
                    </a>
                ))}



            </div>
        </div >
    )
}

export default Hamburger
