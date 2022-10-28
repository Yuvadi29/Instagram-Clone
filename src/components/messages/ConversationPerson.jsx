import { useState } from "react";
import "./ConversationPerson.css";
import Avatar from '@mui/material/Avatar';
import user from "./account_img"




function display_account(user) {
    return (
        <div className="commentslist" >
            <Avatar style={{ "width": "50px", "height": "50px" }} src={`${user.img}`} className='nav_icon_element' />
            <span className="ConversationName">{user.Uname}</span>
        </div>
    )
}
export const ConversationPerson = () => {


    return (
        <>


            <div className="display_account">
                {
                    user.map(display_account)
                }
            </div>
        </>
    );
};
