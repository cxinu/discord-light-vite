import { DiscordDownloadIcon } from "../assets/DiscordIcons";
import { FaDiscord } from "react-icons/fa";
import { IoMdCompass } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { servers } from "../assets/DummyAPI";

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
        {servers.map((server, id) => (
          <SideBarIcon
            image={true}
            icon={<img className="sidebar-icon-image" src={server.url} />}
            text={server.name}
            key={id}
          />
        ))}
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
  let IconColor = "";
  if (!image) {
    main
      ? (IconColor = "sidebar-icon-color-main")
      : (IconColor = "sidebar-icon-color");
  }
  return (
    <div className="sidebar-icon-wrap">
      <div className={`sidebar-icon ${image ? "" : `${IconColor}`}`}>
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
