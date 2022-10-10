import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-wrap">
        <main className="relative flex flex-col flex-auto min-h-0 min-w-0">
          <div className="relative flex flex-auto min-h-0 min-w-0 z-0">
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-x-hidden overflow-y-scroll">
              <div className="content-list">
                <Post
                  name="Ada"
                  timestamp="one week ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Leon"
                  timestamp="one week ago"
                  text={`Lorem ipsum dolor. `}
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
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Lorem ipsum dolor `}
                />
                <Post
                  name="bllie"
                  timestamp="4 days ago"
                  text={`Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Lorem ipsum dolor. `}
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
                  timestamp="22 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="Rebecca"
                  timestamp="3 hours ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
                />
                <Post
                  name="H.U.N.K"
                  timestamp="Just now"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
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

const BottomBar = () => (
  <div className="form-inputBar">
    <div className="relative mb-6 w-full rounded-lg indent-0 bg-gray-200 dark:bg-gray-600">
      <div className="max-h-[50vh] rounded-lg overflow-x-hidden overflow-y-scroll">
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

const Post = ({ name, timestamp, text }) => {
  const seed = Math.round(Math.random() * 100);

  const [pfp, setPfp] = useState([]);

  const geturl = async () => {
    const res = await fetch("https://hmtai.herokuapp.com/v2/tea");
    setPfp(await res.json());
  };

  useEffect(() => {
    geturl();
  }, []);

  return (
    <div className="post mt-[17px]">
      <div className="static">
        <img src={pfp.url} alt="" className="avatar" />
        <h3 className="post-owner">
          {name}
          <small className="timestamp">{timestamp}</small>
        </h3>
        <div
          className="relative select-text leading-[22px]
        text-gray-800 dark:text-white whitespace-normal"
        >
          {text}
        </div>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <div className="sticky flex-grow-0 flex-shrink-0 self-stretch">
    <button className="sticky top-0 h-11 w-auto px-4 py-[10px] -ml-4 m-0 flex justify-center items-center box-border rounded-[3px] text-sm leading-4">
      <BsPlusCircleFill
        size="20"
        className="text-gray-600 dark:text-gray-400"
      />
    </button>
  </div>
);

export default ContentContainer;
