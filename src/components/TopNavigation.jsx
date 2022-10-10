import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const TopNavigation = () => {
  return (
    <section className="top-navigation shadow-sm-discord">
      <div className="relative flex flex-auto">
        <HashtagIcon />
        <Title />
      </div>
      <div className="flex flex-grow-0 flex-shrink-0 items-center min-w-0">
        <ThemeIcon />
        <Search />
        <BellIcon />
        <UserCircle />
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
  <div className="search">
    <input className="search-input" type="text" placeholder="Search" />
    <FaSearch size="18" className="text-gray-500 my-auto" />
  </div>
);
const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserCircle = () => (
  <FaUserCircle size="24" className="top-navigation-icon" />
);
const HashtagIcon = () => (
  <FaHashtag size="24" className="relative h-6 w-auto mx-2 text-gray-500" />
);
const Title = () => (
  <h1 className="flex text-black font-semibold text-[17px] leading-[22px] transition duration-300 ease-in-out">
    tailwind-css
  </h1>
);

export default TopNavigation;
