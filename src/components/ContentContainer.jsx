import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { chatMessages, methods } from "../assets/DummyAPI";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-wrap">
        <main className="relative flex min-h-0 min-w-0 flex-auto flex-col">
          <div className="relative z-0 flex min-h-0 min-w-0 flex-auto">
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-x-hidden overflow-y-scroll">
              <div className="content-list">
                {chatMessages.map((message, id) => (
                  <Post
                    name={message.name}
                    timestamp={message.timestamp}
                    text={message.text}
                    key={id}
                  />
                ))}
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
  const [avatar, setAvatar] = useState([]);
  const endpoint = methods[Math.floor(Math.random() * methods.length)];

  const getAvatar = async () => {
    const res = await fetch(`https://hmtai.herokuapp.com/v2/${endpoint}`);
    const data = await res.json();
    setAvatar(data.url);
  };

  useEffect(() => {
    getAvatar();
  }, []);

  return (
    <div className="post mt-[17px]">
      <div className="static">
        <img src={avatar} alt="" className="avatar" />
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
            placeholder="Message #general"
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
