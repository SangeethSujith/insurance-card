import React from 'react'
import Navbar from '../../components/navbar'
import Separator from '../../components/Separator'
import Card from '../../components/Card'
import ProfileCard from '../../components/ProfileCard'

const Home = () => {
    return (
        <div className='flex flex-col items-center'>
            <Navbar />
            <ProfileCard/>
            <Separator/>
            <Card heading={'Career Opportunities'} desc={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos possimus excepturi tempora perferendis, numquam nemo labore! Reprehenderit nam dicta obcaecati a quibusdam, necessitatibus molestiae nesciunt autem, sunt quis error! In, repellat sint.'}/>
        </div>
    )
}

export default Home