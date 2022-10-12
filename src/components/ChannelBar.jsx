import { useState } from "react";
import {
  DiscordArrowIcon,
  DiscordHashIcon,
  DiscordAddIcon,
  DiscordMicIcon,
  DiscordHeadsetIcon,
  DiscordSettingsIcon,
} from "../assets/DiscordIcons";
import { channels } from "../assets/DummyAPI";

const ChannelBar = () => {
  return (
    <div className="channel-bar">
      <nav className="relavite flex flex-auto select-none flex-col">
        <ChannelBlock />
        <div className="relative flex-auto overflow-x-hidden overflow-y-scroll">
          <ul className="relative">
            {channels.map((channel, id) => (
              <Dropdown
                header={channel.header}
                selections={channel.sub}
                key={id}
              />
            ))}
          </ul>
        </div>
      </nav>
      <section className="block flex-shrink-0 flex-grow-0 bg-gray-200">
        <div className="mb-[1px] flex h-[52px] items-center px-2 text-sm font-semibold">
          <div className="-ml-0.5 mr-2 flex min-w-[120px] cursor-pointer items-center rounded pl-0.5 hover:bg-gray-400">
            <img
              src="https://cdn.discordapp.com/attachments/981694535983833158/988469195215876126/HMmedia.gif"
              alt=""
              className="relative mt-0 h-8 w-8 rounded-[50%] object-cover"
            />
            <div className="mr-1 select-none py-1 pl-2">
              <div className="font-['Whitney Semibold'] flex leading-[18px]">
                lunos
              </div>
              <div className="text-xs font-normal leading-[13px] text-gray-600">
                #1957
              </div>
            </div>
          </div>
          <div className="flex flex-shrink flex-row items-stretch justify-start">
            <SectionIcon IconType={DiscordMicIcon} />
            <SectionIcon IconType={DiscordHeadsetIcon} />
            <SectionIcon IconType={DiscordSettingsIcon} />
          </div>
        </div>
      </section>
    </div>
  );
};
const SectionIcon = ({ IconType }) => {
  return (
    <div className="group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:bg-gray-400">
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
            <h3 className="flex-auto text-xs font-extrabold uppercase tracking-wide text-gray-600 group-hover:text-gray-800">
              {header}
            </h3>
          </div>
          <DiscordAddIcon size="18" className="text-accent" />
        </div>
      </li>
      {expanded &&
        selections &&
        selections.map((selection, id) => (
          <TopicSelection key={id} selection={selection} />
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
      <div className="group relative ml-2 flex cursor-pointer flex-row items-center rounded px-2 hover:bg-gray-300">
        <div className="flex min-w-0 flex-auto flex-row items-center p-[6px]">
          <div className="relative mr-[6px]">
            <DiscordHashIcon size="24" className="h-5 w-5 text-gray-500" />
          </div>
          <div className="font-semibold text-gray-500 group-hover:text-gray-800">
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
