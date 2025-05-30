import Link from 'next/link'
import React from 'react'
import { BiArrowBack, BiSave } from 'react-icons/bi'
import { BsEye } from 'react-icons/bs'

export const CreatePageActions = () => {
    return (
        <>
            <div className='flex items-center gap-3'>
                <Link href={'/'} className='flex items-center gap-3 hover:bg-[#f4f4f5] p-3 rounded'>
                    <BiArrowBack size={20} />
                    Back to Dashboard
                </Link>
                <span className='text-2xl'>|</span>
                <h1 className='font-bold text-2xl'>Create new Page</h1>
            </div>
            <div className='flex items-center gap-3 ml-auto'>
                <Link href={''} className='flex items-center gap-5 px-6 py-2 border-[1px] border-gray-400 rounded'>
                    <BsEye size={20} />
                    Preview
                </Link>
                <Link href={''} className='flex items-center gap-5 px-6 py-2 bg-black text-white rounded'>
                    <BiSave size={20} />
                    Save
                </Link>
            </div>
        </>
    )
}
