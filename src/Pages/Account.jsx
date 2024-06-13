import React from 'react'
import Card from 'react-bootstrap/Card';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="max-w-[80rem] m-auto px-10">
                <div className="">
                    <div className="flex mt-4">
                        <button className='bg-zinc-700 text-white px-5 cursor-pointer hover:opacity-80 active:scale-95 font-semibold  py-[.7rem] rounded-md  transition-all duration-300'>
                            Account
                        </button>
                    </div>
                    <div className="max-w-[40rem] pt-10 m-auto ">
                        <Card.Text className='text-center'>Student Name</Card.Text>
                        <Card.Text className='text-center border-2 mb-10 border-zinc-200 rounded-md p-2'>Current Check-Outs</Card.Text>
                        <Card.Text className='text-center border-2  border-zinc-200 rounded-md p-4'>A item 12:00 - 12:00 AM</Card.Text>
                        <Card.Text className='text-center border-2  border-zinc-200 rounded-md p-4'>A item 12:00 - 12:00 AM</Card.Text>
                        <Card.Text className='text-center border-2  border-zinc-200 rounded-md p-4'>A item 12:00 - 12:00 AM</Card.Text>
                    </div>
                </div>
            </div>

            <div className="flex fixed bottom-10 right-10 mt-4">
                <button className='bg-zinc-700 text-white px-5 cursor-pointer hover:opacity-80 active:scale-95 font-semibold  py-[.7rem] rounded-md  transition-all duration-300'>
                    Return Early
                </button>
            </div>
            <div className="flex fixed bottom-10 left-10 mt-4">
                <button onClick={() => navigate(-1)} className='bg-zinc-700 text-white px-4 cursor-pointer hover:opacity-80 active:scale-95 font-semibold  py-[.7rem] rounded-md  transition-all duration-300'>
                    <IoMdArrowRoundBack />
                </button>
            </div>
        </>
    )
}

export default Account