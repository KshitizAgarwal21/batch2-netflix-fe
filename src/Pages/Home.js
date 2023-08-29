import React from "react";
import Hero from "../Components/Hero/Hero";
import Features from "../Components/Features/Features";
import Accordions from "../Components/Accordions/Accordions";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
export default function Home() {
  return (
    <>
      {" "}
      <div className="App">
        <div className="gradient">
          <Header /> <Hero />
        </div>
      </div>
      <div className="content-container">
        <Features
          data={{
            mainText: "Enjoy on your TV",
            subText:
              "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            url: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
            vidUrl:
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v",
            order: true,
            size: 1,
          }}
        />
        <Features
          data={{
            mainText: "Download your shows to watch offline",
            subText:
              "Save your favourites easily and always have something to watch.",
            url: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
            order: false,
          }}
        />
        <Features
          data={{
            mainText: "Watch everywhere",
            subText:
              "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            url: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
            vidUrl:
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v",
            order: true,
            size: 0,
          }}
        />
        <Features
          data={{
            mainText: "Create profiles for kids",
            subText:
              "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
            url: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d",
            order: false,
          }}
        />

        <div className="accordions">
          <h1>Frequently Asked Questions</h1>
          <Accordions
            data={{
              ques: "What is Netflix?",
              ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
            }}
          />
          <Accordions
            data={{
              ques: "What is Netflix?",
              ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
            }}
          />
          <Accordions
            data={{
              ques: "What is Netflix?",
              ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
            }}
          />
          <Accordions
            data={{
              ques: "What is Netflix?",
              ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
            }}
          />
          <Accordions
            data={{
              ques: "What is Netflix?",
              ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
            }}
          />
          <Accordions
            data={{
              ques: "What is Netflix?",
              ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
            }}
          />

          <h3 style={{ marginTop: "45px" }}>
            देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए
            अपना ईमेल एड्रेस डालें.
          </h3>

          <div className="">
            <input
              type="email"
              className="home-email"
              placeholder="Email"
            ></input>
            <button className="startup" style={{ marginLeft: "10px" }}>
              Start Watching
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
