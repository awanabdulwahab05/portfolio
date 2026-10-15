import { GitBranch } from 'lucide-react'
import React from 'react'

const Icons = () => {
    const socialLink = [
        {
            icons: <GitBranch classname='h-5 w-5'
            />
        }
    ]
    return (
        <div>
            {socialLink.map((item, index) => (
                <a
                    key={index}
                >
                    {item.icons}
                </a>
            ))}
        </div>
    )
}

export default Icons
