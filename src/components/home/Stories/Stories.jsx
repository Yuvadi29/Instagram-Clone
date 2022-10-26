import React from 'react';
import "./Stories.css";
import Avatar from '@mui/material/Avatar';
import pp1 from "../../images/pp1.png";

const data = [
        {
                image: pp1,
                profile_name: 'Zaid'
        },
        {
                image: pp1,
                profile_name: 'Jay '
        },
        {
                image: pp1,
                profile_name: 'Aditya'
        },
        {
                image: pp1,
                profile_name: 'Vinish'
        },
        {
                image: pp1,
                profile_name: 'Ashish'
        },
        {
                image: pp1,
                profile_name: 'Bhuvan'
        },
        {
                image: pp1,
                profile_name: 'Anish'
        },
        {
                image: pp1,
                profile_name: 'Ajey'
        },
        {
                image: pp1,
                profile_name: 'Kedar'
        },
        {
                image: pp1,
                profile_name: 'Aman'
        },
        {
                image: pp1,
                profile_name: 'Harsh'
        },
        {
                image: pp1,
                profile_name: 'Abhay'
        },
]

const Stories = () => {
        return (
                <div className='stories_bar'>
                        {
                                data.map(({ image, profile_name }) => {
                                        return (
                                                <div>
                                                        <Avatar src={image} alt="profile_image" className="stories_icon" />
                                                        <p className="profile_name">{profile_name}</p>
                                                </div>
                                        )
                                })
                        }
                </div>

        )
}

export default Stories
