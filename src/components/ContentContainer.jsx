import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { methods } from "../assets/DummyAPI";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-wrap">
        <main className="relative flex min-h-0 min-w-0 flex-auto flex-col">
          <div className="relative z-0 flex min-h-0 min-w-0 flex-auto">
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-x-hidden overflow-y-scroll">
              <div className="content-list">
                <Post
                  name="Ada"
                  timestamp="one week ago"
                  text={`drinking coffee`}
                />
                <Post
                  name="Sapphire"
                  timestamp="one week ago"
                  text={`coffee is hella mid.`}
                />
                <Post name="Jill" timestamp="5 days ago" text={`Lorem.`} />
                <Post
                  name="Ellie"
                  timestamp="4 days ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
                />
                <Post
                  name="kllie"
                  timestamp="4 days ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor `}
                />
                <Post
                  name="bllie"
                  timestamp="4 days ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor. `}
                />
                <Post
                  name="Chris"
                  timestamp="4 days ago"
                  text={`Hi! Thanks for inviting me to your lovely server! ❤️

No dashboard is required! You can set up every function within your Discord client by running the corresponding command.

• Just write L.help to get an overview of all my commands and features
• You can restrict the channels which can trigger bot commands by running L.whitelist
• With L.fishery you can configure the fishing idle-game / economy and read how it works

Furthermore, you can also change the bot language:
• 🇩🇪 German: L.language de
• 🇪🇸 Spanish: L.language es
• 🇷🇺 Russian: L.language ru

And finally, if you have any issues with the bot, then you can take a look at the FAQ page. You can also just join the Lawliet support server and ask for help:

Join Lawliet Support Server`}
                />
                <Post
                  name="Claire"
                  timestamp="2 days ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
                />
                <Post
                  name="Albert"
                  timestamp="Today at 6:32 PM"
                  text={`I'm offended, but I'm a saint.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="Today at 6:33 PM"
                  text={`Masochist`}
                />
                <Post
                  name="LMAO"
                  timestamp="Today at 6:35 PM"
                  text={`I will not disagree`}
                />
                <div className="h-[30px] w-[1px]"></div>
              </div>
            </div>
          </div>
          <BottomBar />
        </main>
      </div>
    </div>
  );
};

const Post = ({ name, timestamp, text }) => {
  const [pfp, setPfp] = useState([]);
  const endpoint = methods[Math.floor(Math.random() * methods.length)];

  const geturl = async () => {
    const res = await fetch(`https://hmtai.herokuapp.com/v2/${endpoint}`);
    setPfp(await res.json());
  };

  useEffect(() => {
    geturl();
  }, []);

  return (
    <div className="post mt-[17px]">
      <div className="static">
        <img src={pfp.url} alt="" className="avatar" />
        <h3 className="relative min-h-[22px] font-bold leading-[22px] ">
          <span className="relative mr-1 cursor-pointer hover:underline">
            {name}
          </span>
          <span className="pointer-events-none ml-1 font-['Whitney'] text-[0.75rem] font-medium leading-[1.375rem] text-gray-500 dark:text-gray-600">
            {timestamp}
          </span>
        </h3>
        <div
          className="relative select-text whitespace-pre-wrap
        leading-[22px] text-gray-800 dark:text-white "
        >
          {text}
        </div>
      </div>
    </div>
  );
};

const BottomBar = () => (
  <div className="form-inputBar">
    <div className="relative mb-6 w-full rounded-lg bg-gray-200 indent-0 dark:bg-gray-600">
      <div className="hide-scrollbar max-h-[50vh] overflow-x-hidden overflow-y-scroll rounded-lg">
        <div className="relative flex pl-4">
          <PlusIcon />
          <input
            type="text"
            placeholder="Message #tailwind-css"
            spellCheck="true"
            aria-haspopup="listbox"
            aria-invalid="false"
            aria-autocomplete="list"
            autoCorrect="off"
            data-can-focus="true"
            aria-label="Message #tailwind-css"
            aria-multiline="true"
            contentEditable="true"
            zindex="-1"
            className="bottom-bar-input"
          />
        </div>
      </div>
    </div>
  </div>
);

const PlusIcon = () => (
  <div className="sticky flex-shrink-0 flex-grow-0 self-stretch">
    <button className="sticky top-0 m-0 -ml-4 box-border flex h-11 w-auto items-center justify-center rounded-[3px] px-4 py-[10px] text-sm leading-4">
      <BsPlusCircleFill
        size="20"
        className="text-gray-600 dark:text-gray-400"
      />
    </button>
  </div>
);

export default ContentContainer;
