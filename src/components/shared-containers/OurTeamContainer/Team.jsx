import React from 'react'
import Box from './Box'
import './Team.css'

const Team = () => {
    const members = [
        {
            name: 'Nishant',
            img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
            position: 'Senior Developer',
        },
        {
            name: 'Riya',
            img: 'https://media.istockphoto.com/id/692862346/photo/real-happy-young-woman-studio-portrait.jpg?s=612x612&w=0&k=20&c=yxtd-xQAAgEnBvd1b0XaBTKk20H2e2aed71ksuvxHIU=',
            position: 'Junior Developer',
        },
        {
            name: 'Nishant',
            img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
            position: 'Senior Developer',
        },
        {
            name: 'Riya',
            img: 'https://media.istockphoto.com/id/692862346/photo/real-happy-young-woman-studio-portrait.jpg?s=612x612&w=0&k=20&c=yxtd-xQAAgEnBvd1b0XaBTKk20H2e2aed71ksuvxHIU=',
            position: 'Junior Developer',
        },
        {
            name: 'Nishant',
            img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
            position: 'Senior Developer',
        },
        {
            name: 'Riya',
            img: 'https://media.istockphoto.com/id/692862346/photo/real-happy-young-woman-studio-portrait.jpg?s=612x612&w=0&k=20&c=yxtd-xQAAgEnBvd1b0XaBTKk20H2e2aed71ksuvxHIU=',
            position: 'Junior Developer',
        },
    ]
    return (
        <div className='Teams'>
            <div className='animateDiv'>
            <h2>Our teams</h2>
            <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ab optio architecto sit doloribus, 
                <span className='not_mobile'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore 
                </span>
            </h4>
            </div>
            <img src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/2020-08/shutterstock_1731284125_0.jpg?itok=89UrdUt_" />
            <h1>Our Team</h1>
            <h1>Our Experienced Accountants</h1>
            <p>Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut suspendisse pharetra. Finibus condimentum aenean lacinia sem metus Integer.</p>
            <div className='teams_boxes'>
                {
                    members.map((data) => (
                        <Box data={data} />
                    ))

                }
            </div>
        </div>
    )
}

export default Team