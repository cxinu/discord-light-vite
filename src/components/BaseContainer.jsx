import React from "react";
import Channelbar from "./ChannelBar";
import ContentContainer from "./ContentContainer";

const BaseContainer = () => {
  return (
    <div className="relative flex flex-col flex-grow overflow-hidden">
      <div className="relative flex items-stretch justify-start flex-auto">
        <Channelbar />
        <ContentContainer />
      </div>
    </div>
  );
};

export default BaseContainer;
