import React from 'react'
import Navbar from '../../components/navbar'
import Separator from '../../components/Separator'
import Card from '../../components/Card'

const Home = () => {
    return (
        <div className='flex flex-col items-center'>
            <Navbar />
            <Card/>
            <Separator/>
        </div>
    )
}

export default Home