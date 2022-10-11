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
      <div className="flex flex-grow-0 flex-shrink-0 items-center min-w-0">
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
    className="relative flex items-stretch
    bg-gray-300 dark:bg-gray-600 
    px-0.5 h-6 w-[144px] focus-within:w-[240px] rounded-[4px] transition-all duration-[.25s] ease-in-out"
  >
    <input
      className="text-sm w-full px-0.5
      bg-transparent outline-none overflow-hidden
      text-gray-800 placeholder-gray-500"
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
    className="relative h-6 w-auto mx-2 text-gray-500"
  />
);
const Title = () => (
  <h1 className="flex text-black font-semibold text-[17px] leading-[22px] transition duration-300 ease-in-out">
    tailwind-css
  </h1>
);

export default TopNavigation;
