import React from 'react';
import './explore.css';

const Explore = () => {
  return (
    <>

      {/* <!--Sticky bottom header for app--> */}
      <div id="app" className="header-bottom">
        <button className="nav-button">IGTV</button>
        <button className="nav-button"><i className="fas fa-shopping-bag"></i>Shopping</button>
        <button className="nav-button">Fashion</button>
        <button className="nav-button">Design</button>
      </div>

      {/* <!--This section break is used for the border line--> */}

      <section id="web" className="section-break"></section>

      {/* <!--Main section contains the images--> */}

      <main className="background">

        {/* <!--Web container aligns image items to the center--> */}
        <div className="web-container">
          <h4 id="web" className="feed-heading">Top Posts</h4>

          {/* <!--Reels is a feature only available on the app hence it has an id of app--> */}
          <div id="app" className="reels">
            <video src="./media/reels.mp4" controls autoPlay></video>

          </div>

          {/* <!--Pics only is a grid of images and is available on both app and web--> */}
          <div className="pics-only">
            <img className="image" src="https://images.unsplash.com/photo-1596860618905-10d5b5a6b22d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="" />
            <img className="image" src="https://images.unsplash.com/photo-1597077409202-9601f83045ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="" />
            <img className="image" src="https://images.unsplash.com/photo-1560505045-8d95e913122f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
            <img className="image" src="https://images.unsplash.com/photo-1596690097396-bb75a1d6c807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
            <img className="image" src="https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
            <img className="image" src="https://images.unsplash.com/photo-1594201373342-c7d44c55ce3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
          </div>
          <h4 id="web" className="feed-heading">Most Recent</h4>

          {/* <!--PV container is the picture and video grid with 2 images and a video--> */}
          <div id="app" className="pv-container">
            <img className="image top-pv-image" src="https://images.unsplash.com/photo-1584063075722-aac94ceac441?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
            <img className="image bottom-pv-image" src="https://images.unsplash.com/photo-1597012820205-4ca307e7986c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" alt="" />
            <video className="pv-video video" src="./media/video.mp4" controls></video>
          </div>

          <div className="pics-only">
            <img className="image" src="https://images.unsplash.com/photo-1596243984207-03cf19993a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=477&q=80" alt="" />
            <img className="image" src="https://images.unsplash.com/photo-1567818735868-e71b99932e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
            <img className="image" src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
            <img className="image" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
            <img className="image" src="https://images.unsplash.com/photo-1539788816080-8bdd722d8c22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
            <img className="image" src=" https://images.unsplash.com/photo-1565793979206-10951493332d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="" />
          </div>
        </div>
      </main >

      {/* <!--The footer section is only available on the app and it contains an image to simulate a logged in account--> */}
      <footer id="app" >
        <i className="fas fa-home"></i>
        <i className="fas footer-search fa-search"></i>
        <i className="far fa-plus-square"></i>
        <i className="far fa-heart"></i>
        <img className="user" src="./media/user.jpg" alt="user" />
      </footer>

    </>
  )
}

export default Explore