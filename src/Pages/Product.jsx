import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { LAB1_DATA, LAB2_DATA, LAB3_DATA } from '../Data/labData';

const Product = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const combinedData = [...LAB1_DATA, ...LAB2_DATA, ...LAB3_DATA];

    const productsFilter = combinedData.filter((item) => item.name === id);
    const [items] = productsFilter;
    const [selectedTimes, setSelectedTimes] = useState([]);

    useEffect(() => {
        const storedTimes = JSON.parse(localStorage.getItem('selectedTimes')) || [];
        setSelectedTimes(storedTimes);
    }, []);

    const handleTimeClick = (time) => {
        const timeWithImg = { time, img: items.img };
        const updatedTimes = selectedTimes.some(t => t.time === time && t.img === items.img)
            ? selectedTimes.filter(t => !(t.time === time && t.img === items.img))
            : [...selectedTimes, timeWithImg];

        setSelectedTimes(updatedTimes);
        localStorage.setItem('selectedTimes', JSON.stringify(updatedTimes));
    };

    const isSelected = (time) => selectedTimes.some(t => t.time === time && t.img === items.img);

    const renderTimeSlots = (times) => {
        return times.map((time, index) => (
            <time
                key={index}
                className={`text-zinc-400 shadow-md p-2 px-4 rounded-lg cursor-pointer ${isSelected(time) ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleTimeClick(time)}
            >
                {time}
            </time>
        ));
    };

    return (
        <div className="max-w-[80rem] m-auto py-10 px-10">
            <div className="">
                <div className="md:flex justify-between gap-5 px-[3rem] pt-8">
                    <div className="flex flex-col gap-3">
                        <img src={items.img} alt="" />
                        <Card.Text className='pt-2'>{items.description}</Card.Text>
                    </div>
                    <div className="max-w-[36.5rem] w-full flex flex-col">
                        <p className='w-full border-2 p-1 rounded-md border-zinc-100 font-semibold'>Tue, Jun 11th</p>
                        <div className="p-1 pt-2 flex flex-wrap gap-y-6 gap-x-4">
                            {renderTimeSlots(['12:00 - 12:00 AM', '1:00 - 2:00 AM', '2:00 - 3:00 AM', '3:00 - 4:00 AM', '4:00 - 5:00 AM'])}
                        </div>
                        <p className='w-full mt-8 border-2 p-1 rounded-md border-zinc-100 font-semibold'>Wed, Jun 12th</p>
                        <div className="p-1 pt-2 flex flex-wrap gap-y-6 gap-x-4">
                            {renderTimeSlots(['12:00 - 1:00 AM', '1:00 - 2:00 AM', '2:00 - 3:00 AM'])}
                        </div>
                        <p className='w-full mt-8 border-2 p-1 rounded-md border-zinc-100 font-semibold'>Thu, Jun 13th</p>
                        <div className="p-1 pt-2 flex flex-wrap gap-y-6 gap-x-4">
                            {renderTimeSlots(['12:00 - 1:00 AM'])}
                        </div>
                        <div className="text-end pt-2">
                            <button onClick={() => navigate("/account")} className='bg-zinc-700 text-white px-5 cursor-pointer hover:opacity-80 active:scale-95 font-semibold py-[.7rem] rounded-md transition-all duration-300'>
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
