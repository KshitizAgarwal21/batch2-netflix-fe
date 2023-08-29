import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="hero-text">
        <h1>धमाकेदार भारतीय हिट. ₹149 में अभी देखना शुरू करें.</h1>
        <h2>आज शामिल हों, जब चाहें कैंसल करें.</h2>
        <h3>
          देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए
          अपना ईमेल एड्रेस डालें.
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
  );
}
