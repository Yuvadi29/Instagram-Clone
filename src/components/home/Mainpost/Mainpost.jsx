import React, { Component } from 'react';
import "./Mainpost.css";
import Avatar from '@mui/material/Avatar';
import pp1 from "../../images/pp1.png"
import edit from "../../images/edit.svg"
import love from "../../images/love.svg"
import comment from "../../images/comment.svg"
import share from "../../images/share.svg"
import { ClassNames } from '@emotion/react';
import commentData from "./commentData";
import { AiFillHome, AiOutlineCompass, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { FiSend, FiPlusCircle } from 'react-icons/fi';
import { BiMessageRounded } from "react-icons/bi";


function postComment(commentData) {
    return (
        <div className="commentslist" >
            <p style={{ "fontWeight": "bold" }} className="comment_account">{commentData.username}</p>
            <p className='comment' >{commentData.comment}</p>
        </div>


    )
}

function Mainpost(props) {

    return (
        <div>
            <div className='post_container'>

                {/* post header  */}
                <div className="post_header">
                    <img style={{ "width": "40px", "height": "40px", "display": "inline-block", "border-radius": "50%" }} src={pp1} className="post_icon" />
                    <p className="post_account_name">{props.Uname}</p>
                    {/* <button className="post_moreoption"><img src={edi   t} alt="" /></button> */}
                </div>


                {/* image post */}
                <div className="post_image">
                    <img src={props.posting} alt="" className='post_img' />
                </div>

                {/* post Likes */}
                <div >
                    <div className="post_like_icons">
                        <AiOutlineHeart size={27} className='nav_icon_element' />
                        <BiMessageRounded size={27} className='nav_icon_element' />
                        <FiSend size={25} className='nav_icon_element' />

                    </div>
                    <div className='post_like_data'>
                        <div className="post_account_commeneted"><Avatar style={{ "width": "25px", "height": "25px", "display": "inline-block", "margin-left": "18px", "border": "2px solid white" }} src={pp1} /></div>
                        <div className="post_account_commeneted"><Avatar style={{ "width": "25px", "height": "25px", "display": "inline-block", "margin-left": "-13px", "border": "2px solid white" }} src={pp1} /></div>
                        <div className="post_commented_account">
                            <p className="commented_account">{props.like}</p>

                        </div>
                    </div>


                </div>

                {/* comment input section */}
                <div className="post_comment">
                    {
                        commentData.map(postComment)
                    }
                    <p className="commentsuggestion" style={{ "cursor": "pointer", "margin": "5px 0px 0px 20px", "fontSize": "15px", "opacity": "50%" }}><a>{props.comment}</a></p>
                    <input type="text" placeholder='Add a comment' className='commentinput' />

                </div>
            </div>

        </div>
    )

}


export default Mainpost
