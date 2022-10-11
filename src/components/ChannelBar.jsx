import { useState } from "react";
import {
  DiscordArrowIcon,
  DiscordHashIcon,
  DiscordAddIcon,
  DiscordMicIcon,
  DiscordHeadsetIcon,
  DiscordSettingsIcon,
} from "../assets/DiscordIcons";

const topics = ["tailwind-css", "react"];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];

const ChannelBar = () => {
  return (
    <div className="channel-bar">
      <nav className="relavite flex flex-col flex-auto select-none">
        <ChannelBlock />
        <div className="relative flex-auto overflow-x-hidden overflow-y-scroll">
          <ul className="relative">
            <Dropdown header="Text Channels" selections={topics} />
            <Dropdown header="Questions" selections={questions} />
            <Dropdown header="Random" selections={random} />
          </ul>
        </div>
      </nav>
      <section className="block bg-gray-200 flex-grow-0 flex-shrink-0">
        <div className="flex h-[52px] px-2 mb-[1px] items-center text-sm font-semibold">
          <div className="flex items-center min-w-[120px] -ml-0.5 pl-0.5 mr-2 rounded hover:bg-gray-400 cursor-pointer">
            <img
              src="https://cdn.discordapp.com/attachments/981694535983833158/988469195215876126/HMmedia.gif"
              alt=""
              className="relative rounded-[50%] object-cover mt-0 h-8 w-8"
            />

            <div className="py-1 pl-2 mr-1 select-none">
              <div className="flex font-['Whitney Semibold'] leading-[18px]">
                lunos
              </div>
              <div className="text-xs leading-[13px] font-normal text-gray-600">
                #1957
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-shrink items-stretch justify-start">
            <SectionIcon IconType={DiscordMicIcon} />
            <SectionIcon IconType={DiscordHeadsetIcon} />
            <SectionIcon IconType={DiscordSettingsIcon} />
          </div>
        </div>
      </section>
    </div>
  );
};
const SectionIcon = ({ IconType, className }) => {
  return (
    <div className="group relative flex h-8 w-8 items-center justify-center rounded hover:bg-gray-400 cursor-pointer">
      <IconType className="text-gray-600 group-hover:text-gray-800" />
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <li className="relative pt-4">
        <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
          <div className="group flex-auto overflow-hidden hover:text-gray-800">
            <ChevronIcon expanded={expanded} />
            <h3 className="flex-auto text-xs uppercase tracking-wide font-extrabold text-gray-600 group-hover:text-gray-800">
              {header}
            </h3>
          </div>
          <DiscordAddIcon size="18" className="text-accent" />
        </div>
      </li>
      {expanded &&
        selections &&
        selections.map((selection, index) => (
          <TopicSelection key={index} selection={selection} />
        ))}
    </>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = "absolute left-[2px] top-[6px] h-3 w-3";
  return expanded ? (
    <DiscordArrowIcon
      size="24"
      className="absolute left-[2px] top-[6px] h-3 w-3 transition-all"
    />
  ) : (
    <DiscordArrowIcon
      size="24"
      className="absolute left-[2px] top-[6px] h-3 w-3 -rotate-90 transition-all"
    />
  );
};

const TopicSelection = ({ selection }) => (
  <li className="relative">
    <div className="relative overflow-visible py-[1px]">
      <div className="group relative flex flex-row px-2 ml-2 rounded items-center hover:bg-gray-300 cursor-pointer">
        <div className="flex flex-row min-w-0 items-center p-[6px] flex-auto">
          <div className="relative mr-[6px]">
            <DiscordHashIcon size="24" className="h-5 w-5 text-gray-500" />
          </div>
          <div className="text-gray-500 font-semibold group-hover:text-gray-800">
            {selection}
          </div>
        </div>
      </div>
    </div>
  </li>
);

const ChannelBlock = () => (
  <header className="channel-block shadow-sm-discord">
    <div className="channel-block-text">private server</div>
  </header>
);

export default ChannelBar;
