import BaseContainer from "./components/BaseContainer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="absolute flex h-full w-full overflow-hidden bg-gray-300 dark:bg-gray-900">
      <SideBar />
      <BaseContainer />
    </div>
  );
}

export default App;
