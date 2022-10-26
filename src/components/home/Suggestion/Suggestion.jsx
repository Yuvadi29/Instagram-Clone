import React from 'react'
import Avatar from '@mui/material/Avatar';
import pp1 from "../../images/pp1.png";
import "./Suggestion.css"

const Suggestion = () => {
    return (
        <div>
            <div>
                <div className="suggestions__container">
                    <div className="suggestions__header">
                        <div>Suggestions For You</div>
                    </div>
                    <div className="suggestions__body">
                        <div>
                            <div className="suggestions__friends">
                                <Avatar src={pp1} className="suggestions__image" />
                                <div className="suggestions__username">testing_profile</div>
                            </div>
                                <div className="suggestion_details">Followed by salman khan + 5more</div>
                        </div>
                        <div>
                            <div className="suggestions__friends">
                                <Avatar src={pp1} className="suggestions__image" />
                                <div className="suggestions__username">testing_profile</div>
                            </div>
                                <div className="suggestion_details">Followed by salman khan + 5more</div>
                        </div>
                        <div>
                            <div className="suggestions__friends">
                                <Avatar src={pp1} className="suggestions__image" />
                                <div className="suggestions__username">testing_profile</div>
                            </div>
                                <div className="suggestion_details">Followed by salman khan + 5more</div>
                        </div>
                        <div>
                            <div className="suggestions__friends">
                                <Avatar src={pp1} className="suggestions__image" />
                                <div className="suggestions__username">testing_profile</div>
                            </div>
                                <div className="suggestion_details">Followed by salman khan + 5more</div>
                        </div>
                        <div>
                            <div className="suggestions__friends">
                                <Avatar src={pp1} className="suggestions__image" />
                                <div className="suggestions__username">testing_profile</div>
                            </div>
                                <div className="suggestion_details">Followed by salman khan + 5more</div>
                        </div>
                        
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Suggestion
