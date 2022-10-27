import { useState } from "react";
import { ConversationPerson } from "./ConversationPerson";
import "./ChatMessanger.css";
import ReactScrollToBottom from "react-scroll-to-bottom";
import Picker, { SkinTones } from "emoji-picker-react";

var i = 0;

const Messanger = () => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    // const [user, setUser] = useState([]);
    const [chosenEmoji, setChosenEmoji] = useState(null);

    return (
        <>
            <div className="body">
                {/* Add NAVBAR HERE */}
                {/* <Navbar /> */}
                {/* --------------- */}
                <div className="messenger">
                    <div className="chatMenu">
                        <div className="menuBox1">
                            <div className="namebox">
                                <div className="personName">coderslife_320</div>

                                <span
                                    style={{
                                        display: " inline-block",
                                        transform: "rotate(180deg)",
                                    }}
                                >
                                    <svg
                                        aria-label="Down Chevron Icon"
                                        class="_8-yf5 "
                                        color="#262626"
                                        fill="#262626"
                                        height="20"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="20"
                                    >
                                        <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="penImg">
                                <svg
                                    aria-label="New Message"
                                    color="#262626"
                                    fill="#262626"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path
                                        d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    ></path>
                                    <path
                                        d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    ></path>
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        x1="16.848"
                                        x2="20.076"
                                        y1="3.924"
                                        y2="7.153"
                                    ></line>
                                </svg>
                            </div>
                        </div>
                        <div className="nameListbox">
                            {/* dynamic aly bring data */}
                            <ConversationPerson />
                        </div>
                    </div>

                    <div className="mainChatCont">
                        <div className="Topname">
                            <div className="profileImg">
                                {/*  have to take img dynamicaly here */}
                                <img
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                    }}
                                    src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
                                    alt="profile_img"
                                />
                            </div>
                            <div className="personName">Kedar Malap</div>
                        </div>
                        <div className="chatContainer">
                            <ReactScrollToBottom className="chatBox">
                                {/* {messages.map((el, i) => (
                                    <SendMessage
                                        key={i}
                                        // user={el.id === id ? "" : el.user}
                                        message={el.message}
                                        // classs={el.id === id ? "right" : "left"}
                                    />
                                ))} */}
                            </ReactScrollToBottom>
                            <div className="chatInputBox">
                                <div
                                    className="emojs"
                                    onClick={() => {
                                        var emo =
                                            document.getElementById("emoji");
                                        if (i % 2 === 0) {
                                            emo.style.display = "block";
                                            i++;
                                        } else {
                                            emo.style.display = "none";
                                            i++;
                                        }
                                    }}
                                >
                                    <svg
                                        aria-label="Emoji"
                                        class="_8-yf5 "
                                        color="#262626"
                                        fill="#262626"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Message..."
                                        className="chatvalue"
                                        id="chatvalue"
                                        onKeyPress={
                                            (e) => {}
                                            // e.key === "Enter" ? send() : null
                                        }
                                        onChange={(e) => {
                                            console.log(e.target.value);
                                            setText(e.target.value);
                                        }}
                                    />
                                </div>
                                <div>
                                    <svg
                                        aria-label="Like"
                                        class="_8-yf5 "
                                        color="#262626"
                                        fill="#262626"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="emojiBox" id="emoji">
                        <div
                            style={{ textAlign: "center", marginLeft: "300px" }}
                        >
                            <Picker
                                // onEmojiClick={onEmojiClick}
                                skinTone={SkinTones.MEDIUM_DARK}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Messanger;
