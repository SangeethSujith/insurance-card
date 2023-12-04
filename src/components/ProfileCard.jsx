import React from 'react'
import { variables } from '../constants/variables'


const ProfileCard = () => {
    return (
        <div className="w-[90%] rounded-lg border-2 border-indigo-500 bg-transparent p-4 mt-4 text-center shadow-lg dark:bg-gray-800">
            <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{variables.name}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{variables.designation}</p>
            <div className="flex items-center justify-center">
                <a href="#" className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500">Contact
                 </a>
                <a href="#" className="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">Whatsapp</a>
            </div>
        </div>
    )
}

export default ProfileCard