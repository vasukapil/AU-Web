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
            <img src="https://www.patidarmachine.com/images/our-team.jpg" />
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