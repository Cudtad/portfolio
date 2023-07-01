import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='sidebar-wrapper text-center'>
            <div className='w-full flex justify-center'>
                <Image
                    src={'/user_avatar.jpg'}
                    alt='user_avatar'
                    width={150}
                    height={150}
                    className='rounded-full'
                />
            </div>

            <h3 className='sidebar-wrapper__name'>
                Divine Cudtad
            </h3>
            <p className='mt-1'>Web Developer</p>

            <div className='grid grid-cols-12 gap-2 mt-4'>
                <Link className='col-span-12' href={"/"}>
                    Home
                </Link>
                <Link className='col-span-12' href={"/about"}>
                    About
                </Link>
                <Link className='col-span-12' href={"/skill"}>
                    Skill
                </Link>
                <Link className='col-span-12' href={"/education"}>
                    Education
                </Link>
                <Link className='col-span-12' href={"/experience"}>
                    Experience
                </Link>
                <Link className='col-span-12' href={"/contact"}>
                    Contact
                </Link>
            </div>

            <p className='mt-10 text-xs'>
                &copy; Copyright 2023 &copy; All rights reserved
            </p>

        </div>
    )
}

export default Sidebar