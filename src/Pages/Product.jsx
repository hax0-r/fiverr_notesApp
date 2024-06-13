import React from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { LAB2_DATA } from '../Data/labData';

const Product = () => {

    const { id } = useParams();

    const productsFilter = LAB2_DATA.filter((item, index) => (
        item.name === id
    ))

    const [items] = productsFilter

    return (
        <>
            <div className="max-w-[80rem] m-auto py-10 px-10">
                <div className="">
                    <div className="md:flex justify-between gap-5 px-[3rem] pt-8">
                        <div className="flex flex-col gap-3">
                            <img src={items.img} alt="" />
                            <Card.Text className='pt-2'>{items.description}
                            </Card.Text>

                        </div>
                        <div className="max-w-[36.5rem] w-full flex flex-col ">
                            <p className='w-full border-2 p-1 rounded-md border-zinc-100 font-semibold '>Tue, Jun 11th</p>
                            <div className="p-1 pt-2 flex flex-wrap gap-y-6 gap-x-4">
                                <time className=' text-zinc-400 shadow-md p-2 px-4  rounded-lg' datetime="">12:00 - 12:00 AM</time>
                                <time className=' text-zinc-400 shadow-md p-2 px-4  rounded-lg' datetime="">12:00 - 12:00 AM</time>
                                <time className=' text-zinc-400 shadow-md p-2 px-4  rounded-lg' datetime="">12:00 - 12:00 AM</time>
                                <time className=' text-zinc-400 shadow-md p-2 px-4  rounded-lg' datetime="">12:00 - 12:00 AM</time>
                                <time className=' text-zinc-400 shadow-md p-2 px-4  rounded-lg' datetime="">12:00 - 12:00 AM</time>
                            </div>
                            <p className='w-full mt-8 border-2 p-1 rounded-md border-zinc-100 font-semibold '>Wed, Jun 12th</p>
                            <div className="p-1 pt-2 flex flex-wrap gap-y-6 gap-x-4">
                                <time className=' text-zinc-400 shadow-md p-2 px-4  rounded-lg' datetime="">12:00 - 12:00 AM</time>
                                <time className=' text-zinc-400 shadow-md p-2 px-4  rounded-lg' datetime="">12:00 - 12:00 AM</time>
                                <time className=' text-zinc-400 shadow-md p-2 px-4  rounded-lg' datetime="">12:00 - 12:00 AM</time>
                            </div>
                            <p className='w-full mt-8 border-2 p-1 rounded-md border-zinc-100 font-semibold '>Thu, Jun 13th</p>
                            <div className="p-1 pt-2 flex flex-wrap gap-y-6 gap-x-4">
                                <time className=' text-zinc-400 shadow-md p-2 px-4  rounded-lg' datetime="">12:00 - 12:00 AM</time>
                            </div>
                            <div className="text-end pt-2 ">
                                <button className='bg-zinc-700 text-white px-5 cursor-pointer hover:opacity-80 active:scale-95 font-semibold  py-[.7rem] rounded-md  transition-all duration-300'>
                                    Check Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product