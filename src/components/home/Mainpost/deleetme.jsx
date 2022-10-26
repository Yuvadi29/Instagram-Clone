// import React ,{Component} from 'react'
// import "./Mainpost.css";
// import Avatar from '@mui/material/Avatar';
// import pp1 from "../../images/pp1.png"
// import edit from "../../images/edit.svg"
// import love from "../../images/love.svg"
// import comment from "../../images/comment.svg"
// import share from "../../images/share.svg"
// import { ClassNames } from '@emotion/react';

// class  Mainpost extends Component{
//     constructor(props){
//         super(props)
//         this.value = props.name

//         this.state ={
//             commentList : []

//         }
//     }

//     componentDidMount(){
//         this.getComments();
//     }

//     getComments=()=>{ //API backend
//         let data=[
//             {
//                 "key" : "132",
//                 "username": "ASD",
//                 "commentId":"1234",
//                 "timeStamp":"123456",
//                 "description":"Comment 1"
//             }
//             // {
//             //     "username": "anindya",
//             //     "commentId":"1234",
//             //     "timeStamp":"123456",
//             //     "description":"Comment 2"
//             // },
//             // {
//             //     "username": "dasgupta",
//             //     "commentId":"1234",
//             //     "timeStamp":"123456",
//             //     "description":"Comment 3"
//             // }
//         ];
//         this.setState({commentList: data}); //data sended to the comment list

//         // fetch('http://localhost:8080/comments/'+this.props.id)
//         //     .then(response => response.json())
//         //     .then(data => {
//         //         this.setState({commentList: data});
//         // });
        
//     }


//    render(){
//     return (
//         <div>
//             <div className='post_container'>

//                 {/* psot header  */}
//                 <div className="post_header">
//                     <Avatar style={{ "width": "40px", "height": "40px", "display": "inline-block" }} src={pp1} className="post_icon" />
//                     <p className="post_account_name">{this.props.Uname}</p>
//                     <button className="post_moreoption"><img src={edit} alt="" /></button>
//                 </div>


//                 {/* image post */}
//                 <div className="post_image">
//                     <img src={this.props.posting} alt="" className='post_img' />
//                 </div>

//                 {/* post Likes */}
//                 <div className="post_like_data"> 
//                     <div className="post_like_icons">
//                        {/* <div  classname="like_icon"> <img src={love} alt="" /></div>
//                         <img classname="like_icon" src={comment} alt="" />
//                         <img classname="like_icon" src={share} alt="" /> */}
//                     </div>
//                     <div className="post_account_commeneted"><Avatar style={{ "width": "25px", "height": "25px", "display": "inline-block" ,"margin-left" : "15px", "border" : "2px solid white" }} src={pp1}  /></div>
//                     <div className="post_account_commeneted"><Avatar style={{ "width": "25px", "height": "25px", "display": "inline-block","margin-left" : "-13px" , "border" : "2px solid white" }} src={pp1}  /></div>
//                     <div className="post_commented_account">
//                         <p className="commented_account">{this.props.like}</p>
                    
//                     <p className="commentsuggestion" style ={{"cursor" : "pointer" , "margin" : "5px 0px 0px -50px" , "fontSize" : "15px" ,"opacity" : "50%" }}><a>{this.props.comment}</a></p>
//                     </div>
                
                
//                 </div>

//                 {/* comment input section */}
//                 <div className="post_comment">
//                     {this.state.commentList.map((item,index)=>{
//                         <div className="post_comment" key ={item.key}>{item.username} : {item.description} hello guys</div>

//                         })
//                     }
//                     <input type="text"  placeholder='Add a comment' className='commentinput'/>
//                 </div>
//             </div>
            
//         </div>
//     )
//    }

// }

  

// export default Mainpost
