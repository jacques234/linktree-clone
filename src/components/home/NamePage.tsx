import React from 'react'

export const NamePage = () => {
    return (
        <div className='border-[1px] border-gray-300 rounded-2xl p-7'>
            <h1 className='font-bold text-2xl mb-5'>Page Settings</h1>

            <label htmlFor="pageName" className=''>Page Name</label>
            <div className="w-full max-w-sm min-w-full my-2">
                <input  id="pageName" type='text' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow " placeholder="My Awesome Page" />
            </div>
            <p className='text-[#9fa3a5]'>This is for your reference only</p>
        </div>
    )
}
