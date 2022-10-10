import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";

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
                  name="Chris"
                  timestamp="4 days ago"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
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
                  name="H.U.N.K"
                  timestamp="Just now"
                  text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
                />
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
            className="bottom-bar-input"
          />
        </div>
      </div>
    </div>
  </div>
);

const Post = ({ name, timestamp, text }) => {
  const seed = Math.round(Math.random() * 100);
  return (
    <div className={"post"}>
      <div className="avatar-wrapper">
        <img
          src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
          alt=""
          className="avatar"
        />
      </div>

      <div className="post-content">
        <p className="post-owner">
          {name}
          <small className="timestamp">{timestamp}</small>
        </p>
        <p className="post-text">{text}</p>
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
