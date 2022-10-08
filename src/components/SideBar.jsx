import { DiscordDownloadIcon } from "../assets/DiscordDownloadIcon";
import { FaDiscord } from "react-icons/fa";
import { IoMdCompass } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { imgs } from "../assets/IconImgs";
import { useState } from "react";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <SideBarIcon
        main={true}
        icon={<FaDiscord size="28" />}
        text="Direct Messages"
      />
      <Divider />
      <SideBarIcon
        image={true}
        icon={<img className="sidebar-icon-image" src={imgs.mid_ico} />}
        text="Midjourney"
      />
      <SideBarIcon
        image={true}
        icon={<img className="sidebar-icon-image" src={imgs.rythem_ico} />}
        text="Rythem"
      />
      <SideBarIcon
        image={true}
        icon={<img className="sidebar-icon-image" src={imgs.nvidia_ico} />}
        text="Nvidia"
      />
      <SideBarIcon icon={<IoAddSharp size="25" />} text="Add a Server" />
      <SideBarIcon
        icon={<IoMdCompass size="23" />}
        text="Explore Public Servers"
      />
      <Divider />
      <SideBarIcon icon={<DiscordDownloadIcon />} text="Download Apps" />
    </div>
  );
};

const SideBarIcon = ({ icon, text, image = false, main = false }) => {
  const IconColor = ` sidebar-icon-color${main ? "-main" : ""}`;
  console.log(`sidebar-icon${image ? "" : IconColor}`);
  return (
    <div className={`sidebar-icon${image ? "" : IconColor}`}>
      {icon}
      <span className="sidebar-tooltip">{text}</span>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
