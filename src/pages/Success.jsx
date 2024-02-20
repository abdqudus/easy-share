import React, { useRef, useState } from 'react'
import Confetti from "react-confetti";
import { Link, Navigate } from 'react-router-dom'
import Copy from '../../img/copy.png'
import Done from '../../img/basic-tick.png'
import { copyTextToClipboard } from '../utils'
const Success = () => {
    const [isCopied, setIsCopied] = useState(false)
    const linkRef = useRef(localStorage.getItem('link-id'))

    const handleCopyClick = async () => {
        if (!isCopied) {

            try {
                await copyTextToClipboard(window.location.origin + '/' + linkRef.current);
                setIsCopied(true)
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            } catch (error) {
                console.log(error)
            }
        }

    }
    if (!localStorage.getItem('link-id')) {
        return <Navigate to='/' />;
    }
    return (
        <div className='flex flex-col gap-4 px-4 justify-center items-center h-screen'>
            <Confetti />
            <p className='text-[#335c67]'>
                <span className='text-3xl  font-semibold'>Congratulations, </span>
                your files have been uploaded succesfully
            </p>
            <p className='text-[#335c67]'>Copy the link below and share it with whoever needs the file</p>
            <form className='flex flex-wrap w-full gap-1 max-w-[600px]' >
                <input readOnly value={`${window.location.origin}/${linkRef.current}`} type="text" className='flex-grow px-4 bg-transparent border-2 outline-none border-[#335c67] rounded-lg' />
                <button onClick={handleCopyClick} type='button' className='px-4 py-2 rounded-md relative group hover:border-[#335c67] border'>
                    <img src={isCopied ? Done : Copy} alt="" width='16' height='16' />
                    <span className='absolute -top-[150%] hidden right-[50%] group-hover:block sm:left-4 bg-[#335c67] w-max text-white rounded-md p-2'>
                        {isCopied ? "Copied to clipboard" : 'Copy url to clipboard'}
                    </span>
                </button>
            </form>
            <Link to={`/${linkRef.current}`}>
                <p>Check out the download page</p>
            </Link>

        </div>
    )
}

export default Success
