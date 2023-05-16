import { useState } from "react";
import "./App.css";
import Menubar from "./components/Menubar";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";
import Details from "./components/Details";
import SignIn from "./components/SignIn";

function App() {
  const [isSigning, setIsSigning] = useState<boolean>(false);
  console.log(isSigning)
  return (
    <>
    <div className="main">
      <Menubar signInhandler={setIsSigning}/>
      <div className="w-full flex flex-col">
        <Sidebar />
        <div className="w-full top-[0px] relative">
          <Slider />
        </div>
        <div className="w-full relative">
        <Details />
        </div>
      </div>
    </div>
      {isSigning &&<SignIn signInhandler={setIsSigning}/>}
    </>
  );
}

export default App;
