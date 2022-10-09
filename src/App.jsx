import BaseContainer from "./components/BaseContainer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <BaseContainer />
    </div>
  );
}

export default App;
