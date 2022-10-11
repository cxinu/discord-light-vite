import React from "react";
import Channelbar from "./ChannelBar";
import ContentContainer from "./ContentContainer";

const BaseContainer = () => {
  return (
    <div className="relative flex flex-grow flex-col overflow-hidden">
      <div className="relative flex flex-auto items-stretch justify-start">
        <Channelbar />
        <ContentContainer />
      </div>
    </div>
  );
};

export default BaseContainer;
