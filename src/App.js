import { Routes, Route } from "react-router-dom";
import MainPages from "./pages/MainPages";

function App() {

  return (
    <>
    {/* <h1>Hello</h1> */}
    <Routes>
      <Route path="/" element={<MainPages/>} />
    </Routes>
    </>
  );
}

export default App;


// import { Routes, Route } from "react-router-dom";
// import MainPages from "./pages/MainPages";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<MainPages />} />
//     </Routes>
//   );
// }

// export default App;
