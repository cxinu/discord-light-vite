import React from "react";
import Channelbar from "./ChannelBar";
import ContentContainer from "./ContentContainer";

const BaseContainer = () => {
  return (
    <div className="base-container">
      <Channelbar />
      <ContentContainer />
    </div>
  );
};

export default BaseContainer;
