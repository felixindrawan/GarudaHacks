import React from 'react';

const Main = () => {
  return (
    <div>
      <div className="titleBox">
        <div className="mainTitle">
          <a href="google.com">
            <img src="image/Withcolor.png" alt="" style="width:99%;height:99%;" />
          </a>
        </div>
        <div className="descriptionOne">
          <h2> focusing on being more productive </h2>
        </div>
      </div>
      <div className="content">
        <div className="itemAids">
          <div className="itemAid">
            <div
              className="portfolio-img-background"
              style={{ background-image: url(image/back.png) }}
            />
            <div
              className="img-text-wrapper"
              style={{
                padding: '20px 0 0',
              }}
            >
              <div className="logo-wrapper">
                <a href="https://www.google.com/">
                  <img src="image/todolist.png" alt="" />
                </a>
              </div>
            </div>
            <div className="subtitle">click to organize your day and boost productivity </div>
          </div>
        </div>

        <div className="itemAid">
          <div className="portfolio-img-background" style="background-image:url(image/back2.png)" />
          <div
            className="img-text-wrapper"
            style={{
              padding: '20px 0 0',
            }}
          >
            <div className="logo-wrapper">
              <a href="https://www.google.com/">
                <img src="image/tomato.png" alt="" />
              </a>
            </div>
          </div>
          <div className="subtitle">click to maximize your efficiency using timed intervals</div>
        </div>
      </div>
      <div className="itemAid">
        <div className="portfolio-img-background" style="background-image:url(image/back3.png)" />
        <div
          className="img-text-wrapper"
          style={{
            padding: '20px 0 0',
          }}
        >
          <div className="logo-wrapper">
            <a href="https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM">
              <img src="image/unknown.png" alt="" />
            </a>
          </div>
          <div className="subtitle">click to improve your mood and increase memorization</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
