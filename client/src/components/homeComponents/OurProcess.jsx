import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUser ,FaBookOpen , FaBookmark} from 'react-icons/fa'
import { GiReturnArrow } from "react-icons/gi";

const OurProcess = () => {
    return (
        <div className='my-24'>
            <h1 className='text-3xl text-center md:text-5xl font-bold text-black dark:text-white'>Our <span className='text-themePrimary dark:text-themeSecondary underline'>Process</span></h1>
            <div className='text-black dark:text-white my-8'>
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"

                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaUser />}
                    >
                        <h3 className="vertical-timeline-element-title text-lg">Create Account </h3>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"

                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaBookOpen />}
                    >
                        <h3 className="vertical-timeline-element-title text-lg">Choose your fevorite book</h3>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"

                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBookmark />}
                    >
                        <h3 className="vertical-timeline-element-title text-lg">borrow book </h3>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"

                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<GiReturnArrow />}
                    >
                        <h3 className="vertical-timeline-element-title">give return after reading </h3>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"

                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBookOpen />}
                    >
                        <h3 className="vertical-timeline-element-title text-lg">choose another book and take it borrow  </h3>

                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default OurProcess