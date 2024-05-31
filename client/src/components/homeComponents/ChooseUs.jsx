import { IoExtensionPuzzle } from "react-icons/io5";
import { MdFitScreen } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaRecycle } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";


const ChooseUs = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center my-24 '>
            <h1 className='text-3xl text-center max-w-2xl md:text-5xl font-bold text-black dark:text-white'>Why Choosing Us Is <span className='text-themePrimary dark:text-themeSecondary underline'>The Best </span>Option For Your Education</h1>
            <div className='flex items-center justify-center gap-8 flex-wrap w-full my-8 text-themePrimary dark:text-themeSecondary'>
                <div className="bg-[#fff] dark:bg-themePrimary rounded-lg dark:text-white max-w-sm p-4">
                    <div className="flex items-center gap-2 m-2">
                        <span><IoExtensionPuzzle size={50} /></span>
                        <h1 className="text-xl font-bold">Extensive Book Collection</h1>

                    </div>
                    <div>
                        <p>Our platform boasts an extensive collection of books spanning various genres, subjects, and age groups. </p>
                    </div>
                </div>
                <div className="bg-[#fff] dark:bg-themePrimary rounded-lg dark:text-white max-w-sm p-4">
                    <div className="flex items-center gap-2 m-2">
                        <span><MdFitScreen size={50} /></span>
                        <h1 className="text-xl font-bold">User-Friendly Interface</h1>

                    </div>
                    <div>
                        <p>Our LMS boasts an user-friendly interface that ensures a seamless learning experience for all users.</p>
                    </div>
                </div>
                <div className="bg-[#fff] dark:bg-themePrimary rounded-lg dark:text-white max-w-sm p-4">
                    <div className="flex items-center gap-2 m-2">
                        <span><FaHandshakeSimple size={50} /></span>
                        <h1 className="text-xl font-bold">Community Engagement</h1>

                    </div>
                    <div>
                        <p>our platform encourages community engagement share your thoughts that celebrates the joy of reading.
                        </p>
                    </div>
                </div>
                <div className="bg-[#fff] dark:bg-themePrimary rounded-lg dark:text-white max-w-sm p-4">
                    <div className="flex items-center gap-2 m-2">
                        <span><FaRecycle size={50} /></span>
                        <h1 className="text-xl font-bold">Easy Book Borrowing Process</h1>

                    </div>
                    <div>
                        <p>Our intuitive book borrowing process ensures that you can find, reserve, and check out your desired books with just a few clicks.</p>
                    </div>
                </div>
                <div className="bg-[#fff] dark:bg-themePrimary rounded-lg dark:text-white max-w-sm p-4">
                    <div className="flex items-center gap-2 m-2 ">
                        <span><GrSecure size={50} /></span>
                        <h1 className="text-xl font-bold">Secure and Reliable Platform</h1>

                    </div>
                    <div>
                        <p>Our LMS is built on a robust and reliable platform that ensures the confidentiality of student information and books details.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs