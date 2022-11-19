import React from 'react';
import { Link } from 'react-router-dom';
import "./Stories.css";
import Avatar from '@mui/material/Avatar';
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";
import user5 from "../../images/user5.jpg";
import user6 from "../../images/user6.jpg";
import user7 from "../../images/user7.jpg";
import user8 from "../../images/user8.jpg";
import user9 from "../../images/user9.jpg";
import user10 from "../../images/user10.jpg";
import user11 from "../../images/user11.jpg";
import user12 from "../../images/user12.jpg";

const data = [
        {
                image: user1,
                profile_name: 'Zaid'
        },
        {
                image: user2,
                profile_name: 'Jay '
        },
        {
                image: user3,
                profile_name: 'Aditya'
        },
        {
                image: user4,
                profile_name: 'Vinish'
        },
        {
                image: user5,
                profile_name: 'Ashish'
        },
        {
                image: user6,
                profile_name: 'Bhuvan'
        },
        {
                image: user7,
                profile_name: 'Anish'
        },
        {
                image: user8,
                profile_name: 'Ajey'
        },
        {
                image: user9,
                profile_name: 'Kedar'
        },
        {
                image: user10,
                profile_name: 'Aman'
        },
        {
                image: user11,
                profile_name: 'Harsh'
        },
        {
                image: user12,
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
                                                        <Link to="profile">
                                                                <Avatar src={image}
                                                                        className='stories_icon'
                                                                        style={{ width: '50px', height: '50px', margin: '5px' }}
                                                                />
                                                                <p className="profile_name">{profile_name}</p>
                                                        </Link>
                                                </div>
                                        )
                                })
                        }
                </div>
        )
}
export default Stories
