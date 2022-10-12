import { FaMoon, FaSun } from "react-icons/fa";
import {
  DiscordHashIcon,
  DiscordHelpIcon,
  DiscordInboxIcon,
  DiscordMemberIcon,
  DiscordNotificationIcon,
  DiscordPinIcon,
  DiscordSearchIcon,
  DiscordThreadsIcon,
} from "../assets/DiscordIcons";
import useDarkMode from "../hooks/useDarkMode";

const TopNavigation = () => {
  return (
    <section className="top-navigation shadow-sm-discord">
      <div className="relative flex flex-auto">
        <HashtagIcon />
        <Title />
      </div>
      <div className="flex min-w-0 flex-shrink-0 flex-grow-0 items-center">
        <DiscordThreadsIcon className="top-navigation-icon" />
        <DiscordNotificationIcon className="top-navigation-icon" />
        <DiscordPinIcon className="top-navigation-icon" />
        <DiscordMemberIcon className="top-navigation-icon" />
        {/* <ThemeIcon /> */}
        <Search />
        <DiscordInboxIcon className="top-navigation-icon" />
        <DiscordHelpIcon className="top-navigation-icon" />
      </div>
    </section>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

const Search = () => (
  <div
    className="relative flex h-6
    w-[144px] items-stretch 
    rounded-[4px] bg-gray-300 px-0.5 transition-all duration-[.25s] ease-in-out focus-within:w-[240px] dark:bg-gray-600"
  >
    <input
      className="w-full overflow-hidden bg-transparent
      px-0.5 text-sm text-gray-800
      placeholder-gray-500 outline-none"
      type="text"
      placeholder="Search"
    />
    <div className="flex h-6 w-6 items-center justify-center">
      <DiscordSearchIcon className="realtive h-4 w-4 text-gray-600" />
    </div>
  </div>
);

const HashtagIcon = () => (
  <DiscordHashIcon
    size="24"
    className="relative mx-2 h-6 w-auto text-gray-500"
  />
);

const Title = () => (
  <h1 className="flex text-[17px] font-semibold leading-[22px] text-black transition duration-300 ease-in-out">
    general
  </h1>
);

export default TopNavigation;
