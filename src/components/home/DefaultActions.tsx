import Link from 'next/link'
import React from 'react'
import { BsPlus } from 'react-icons/bs'

export const DefaultActions = () => {
    return (
        <>
            <Link href={'/'} className="font-bold text-2xl">Link Generator</Link>
            <Link href={'/create'} className="flex items-center gap-3 bg-black text-white py-2 px-5 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-200">
                <BsPlus size={20} />
                Create New Page
            </Link>
        </>
    )
}
