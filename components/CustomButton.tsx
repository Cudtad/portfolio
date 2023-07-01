import { CustomButtonProps } from '@/types'
import React from 'react';
import Image from 'next/image';
import { AiOutlineDownload } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';

const CustomButton = ({
  title, containerStyles, handleClick, btnType, textStyles, rightIcon
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || 'button'}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon?.toLowerCase() == "download" && (
        <div className='relative w-6 h-6 flex justify-center items-center ml-1'>
          <AiOutlineDownload />
        </div>
      )}
      {rightIcon?.toLowerCase() == "portfolio" && (
        <div className='relative w-6 h-6 flex justify-center items-center ml-1'>
          <MdWorkOutline />
        </div>
      )}

    </button>
  )
}

export default CustomButton