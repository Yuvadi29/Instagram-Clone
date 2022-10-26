import React from 'react'
import './likes.css';

const Likes = () => {
  return (
    <>
  
    <div id="place">

      <div class="followrequests">
        <p class="maintitle">Follow requests</p>
        <p class="normaltext">adi__ + 54 other requests</p>
      </div>

      <hr />

      <p class="maintitle">Today</p>
      <div class="notification">

        {/* username should be put here */}
        <div className="singlenoti">
          <div class="profileholder">
            <img className="profile" src="https://images.unsplash.com/photo-1560505045-8d95e913122f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
          </div>

          <div class="textholder">
            <p class="textwithimg" >Vatsal______ liked your post</p> 
          </div>

          <div class="postholder">
            <img className="image"  src="https://images.unsplash.com/photo-1596860618905-10d5b5a6b22d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" />
          </div>
        </div>

        <div className="singlenoti">
          <div class="profileholder">
            <img className="profile" src="https://images.unsplash.com/photo-1596690097396-bb75a1d6c807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
          </div>

          <div class="textholder">
          <p class="textwithimg" >_pratham_patel liked your post</p>
          </div>

          <div class="postholder">
          <img className="image" src="https://images.unsplash.com/photo-1596243984207-03cf19993a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=477&q=80" alt="" />
          </div>
        </div>

        <p class="maintitle">Yesterday</p>
          
        <div className="singlenoti">
          <div class="profileholder">
            <img className="profile" src="https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
          </div>

          <div class="textholder">
          <p class="textwithimg" >Kedar_m05 liked your post</p>
          </div>

          <div class="postholder">
          <img className="image" src="https://images.unsplash.com/photo-1567818735868-e71b99932e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
          </div>
        </div>

        <div className="singlenoti">
          <div class="profileholder">
            <img className="profile" src="https://images.unsplash.com/photo-1594201373342-c7d44c55ce3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
          </div>

          <div class="textholder">
            <p class="textwithimg" >akshatap01 liked your post</p>
          </div>

          <div class="postholder">
          <img className="image" src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
          </div>
        </div>

        <div className="singlenoti">
          <div class="profileholder">
            <img className="profile" src="https://images.unsplash.com/photo-1584063075722-aac94ceac441?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
          </div>  

          <div class="textholder">
          <p class="textwithimg" >zaid_k.18 liked your post</p>
          </div>

          <div class="postholder">
          <img className="image" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
          </div>
        </div>

        <div className="singlenoti">
          <div class="profileholder">
            <img className="profile" src="image bottom-pv-image" src="https://images.unsplash.com/photo-1597012820205-4ca307e7986c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" alt="" />
          </div>

          <div class="textholder">
          <p class="textwithimg" >riddhic14 liked your post</p>
          </div>

          <div class="postholder">
          <img className="image" src="https://images.unsplash.com/photo-1539788816080-8bdd722d8c22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Likes