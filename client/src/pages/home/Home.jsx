import React from 'react'
import Slider from '../../components/homeComponents/Slider'
import BooksCategory from '../../components/homeComponents/BooksCategory'
import OurProcess from '../../components/homeComponents/OurProcess'
import ChooseUs from '../../components/homeComponents/ChooseUs'

const Home = () => {
    return (
        <div className='text-themePrimary dark:text-white '>
            <Slider />
            <div className="px-2 md:px-16">
                <BooksCategory />
                <OurProcess />
                <ChooseUs />
            </div>
        </div>
    )
}

export default Home