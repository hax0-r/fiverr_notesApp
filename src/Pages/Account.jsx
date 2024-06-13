import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Account = () => {
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [timesToReturn, setTimesToReturn] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedTimes = JSON.parse(localStorage.getItem('selectedTimes')) || [];
        setSelectedTimes(storedTimes);
    }, []);

    const handleTimeClick = (time) => {
        if (timesToReturn.includes(time)) {
            setTimesToReturn(timesToReturn.filter(t => t !== time));
        } else {
            setTimesToReturn([...timesToReturn, time]);
        }
    };

    const handleReturnEarly = () => {
        if (timesToReturn.length === 0) {
            toast.error("Please select items to return");
            return;
        }
        const updatedTimes = selectedTimes.filter(timeObj => !timesToReturn.includes(timeObj.time));
        localStorage.setItem('selectedTimes', JSON.stringify(updatedTimes));
        setSelectedTimes(updatedTimes);
        setTimesToReturn([]);
        toast.success("Successfully removed");
    };

    const isTimeSelected = (time) => timesToReturn.includes(time);

    return (
        <>
            <ToastContainer />
            <div className="max-w-[80rem] m-auto px-10">
                <div className="">
                    <div className="flex mt-4">
                        <button className='bg-zinc-700 text-white px-5 cursor-pointer hover:opacity-80 active:scale-95 font-semibold py-[.7rem] rounded-md transition-all duration-300'>
                            Account
                        </button>
                    </div>
                    <div className="max-w-[40rem] pt-10 m-auto">
                        <Card.Text className='text-center'>Student Name</Card.Text>
                        <Card.Text className='text-center border-2 mb-10 border-zinc-200 rounded-md p-2'>Current Check-Outs</Card.Text>
                        {selectedTimes.map((timeObj, index) => (
                            <div key={index} className='flex justify-center gap-2 items-center'>
                                <img src={timeObj.img} alt="" className='h-24 p-1 rounded-md  ' />
                                <Card.Text
                                    className={`text-center border-2 border-zinc-200 rounded-md w-full p-4 active:scale-[.99] transition-all cursor-pointer ${isTimeSelected(timeObj.time) ? 'bg-red-500 text-white' : ''}`}
                                    onClick={() => handleTimeClick(timeObj.time)}
                                >
                                    A item {timeObj.time}
                                </Card.Text>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex fixed bottom-10 right-10 mt-4">
                <button
                    onClick={handleReturnEarly}
                    className='bg-zinc-700 text-white px-5 cursor-pointer hover:opacity-80 active:scale-95 font-semibold py-[.7rem] rounded-md transition-all duration-300'
                >
                    Return Early
                </button>
            </div>
            <div className="flex fixed bottom-10 left-10 mt-4">
                <button
                    onClick={() => navigate(-1)}
                    className='bg-zinc-700 text-white px-4 cursor-pointer hover:opacity-80 active:scale-95 font-semibold py-[.7rem] rounded-md transition-all duration-300'
                >
                    <IoMdArrowRoundBack />
                </button>
            </div>
        </>
    );
};

export default Account;
