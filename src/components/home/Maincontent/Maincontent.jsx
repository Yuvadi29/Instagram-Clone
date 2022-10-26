import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import "./Maincontent.css";
import Stories from "../Stories/Stories";
import Mainpost from "../Mainpost/Mainpost";
import user from "./user"
import Infosection from '../Infosection/Infosection';
import Suggestion from '../Suggestion/Suggestion';

function userData(user) {
  return (
    <Mainpost userkey={user.key} Uname={user.Uname} like={user.like} comment={user.comments} posting={user.post} />

  );
}

// 

function Maincontent() {

  return (
    <div>
      <Grid container >
        <Grid item xs={2}>
          {/* hlleelel */}
        </Grid>
        <Grid item xs={6}>
          {/* STATUS BAR */}
          <Stories />

          {/* MAIN POST */}
          {/* mapping the data from the object file */}
          {
            user.map(userData)
          }
        </Grid>
        <Grid item xs={2} >
          <div className="info_suggestion" style={{ "margin-left": "-125px" }}>
            <Infosection />
            <Suggestion />

          </div>
        </Grid>
        <Grid item xs={2}>
          {/* kekek */}
        </Grid>
      </Grid>

    </div>
  );
}


export default Maincontent
