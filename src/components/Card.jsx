import React from 'react'

const Card = ({heading,desc}) => {
    return (
        <div
            class="w-[90%] h-auto duration-500 group overflow-hidden relative rounded-xl bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly"
        >
            <div
                class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
            ></div>
            <div
                class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
            ></div>
            <div
                class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
            ></div>
            <div
                class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
            ></div>
            <div class="z-10 flex flex-col justify-evenly w-full h-full">
                <span class="text-2xl font-bold">{heading}</span>

                <p className='py-2'>
                    {desc}
                </p>
                <button
                    class="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 self-center font-extrabold w-full md:w-[50%] p-3"
                >
                    Know more
                </button>
            </div>
        </div>
    )
}

export default Card