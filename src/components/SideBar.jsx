import { DiscordDownloadIcon } from "../assets/DiscordIcons";
import { FaDiscord } from "react-icons/fa";
import { IoMdCompass } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { imgs } from "../assets/DummyAPI";

const SideBar = () => {
  return (
    <nav className="relative flex w-[72px] flex-shrink-0 overflow-hidden">
      <div className="sidebar-container hide-scrollbar">
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
        {/* <div
          aria-hidden="true"
          className="relative pointer-events-none min-h-0 min-w-[1px] flex-shrink-0 flex-grow-0 h-[1px]"
        ></div> */}
      </div>
    </nav>
  );
};

const SideBarIcon = ({ icon, text, image = false, main = false }) => {
  // if (image) {
  //   var IconColor = "";
  // } else {
  //   if (main) {
  //     var IconColor = "sidebar-icon-color-main";
  //   } else {
  //     var IconColor = "sidebar-icon-color";
  //   }
  // }
  return (
    <div className="sidebar-icon-wrap">
      <div
        className={`sidebar-icon ${
          image ? "" : `sidebar-icon-color${main ? "-main" : ""}`
        }`}
      >
        {icon}
        {/* <span className="sidebar-tooltip">{text}</span> */}
      </div>
    </div>
  );
};

const Divider = () => (
  <div className="sidebar-icon-wrap">
    <hr className="sidebar-hr" />
  </div>
);

export default SideBar;
