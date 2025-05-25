import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import { router } from "./router";

function App () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;