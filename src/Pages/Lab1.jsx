import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { LAB1_DATA } from '../Data/labData';
import { Link } from 'react-router-dom';

const Lab1 = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = LAB1_DATA.filter(({ name, description }) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return name.toLowerCase().includes(lowerCaseQuery) || description.toLowerCase().includes(lowerCaseQuery);
    });

    return (
        <>
             <div className="max-w-[80rem] px-10 py-10">
                <div className="">
                    <div className="flex max-w-[40rem] m-auto p-1 items-center gap-4 border-2 border-zinc-200 rounded-md">
                        <input
                            type="text"
                            className="w-full py-1 pl-2 outline-none"
                            placeholder="search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <IoSearchSharp className="text-zinc-400 mr-2 text-[1.2rem]" />
                    </div>
                    <div className="pt-10 ">
                        {filteredData.map(({ img, name, description }, index) => (
                            <Link className='no-underline' to={`/product/${name}`}>
                                <div key={index} className="md:flex cursor-pointer select-none hover:bg-zinc-100 transition-all duration-300 active:scale-[.99] justify-center gap-10 border-2 border-zinc-200 rounded-md 
                            mb-4 px-2 mx-[3rem] py-2">
                                    <img src={img} className="max-w-[15rem] rounded-md shadow-xl" alt={name} />
                                    <div className="py-1 max-w-[42rem] w-full">
                                        <h2 className="text-lg text-zinc-800 font-bold">{name}</h2>
                                        <p className="text-sm text-zinc-400">{description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lab1;
