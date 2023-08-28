import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient">
          {" "}
          <Header />
          <div className="hero-text">
            <h1>धमाकेदार भारतीय हिट. ₹149 में अभी देखना शुरू करें.</h1>
            <h2>आज शामिल हों, जब चाहें कैंसल करें.</h2>
            <h3>
              देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के
              लिए अपना ईमेल एड्रेस डालें.
            </h3>

            <div className="input-action">
              <input
                type="email"
                className="home-email"
                placeholder="Email"
              ></input>
              <button className="startup">Start Watching</button>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <Features
          data={{
            mainText: "Enjoy on your TV",
            subText:
              "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            url: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
            order: true,
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
            order: true,
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
      </div>
    </>
  );
}

export default App;
