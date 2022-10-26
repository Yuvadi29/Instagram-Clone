import React from 'react';
import Avatar from '@mui/material/Avatar';
import pp1 from "../../images/pp1.png";
import "./Infosection.css";

const Infosection = () => {
    return (
        <div>
            <div className="info__container">
                <Avatar src={pp1} className="info__image" />
                <div className="info_content">
                    <div className="info_username"> Zaid Khan</div>
                    <div className="info_description"> Description</div>
                </div>
            </div>
        </div>
    )
}

export default Infosection
