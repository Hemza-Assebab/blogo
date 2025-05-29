import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import UserContext from "./context/UserContext";
import ArticlesContext from "./context/ArticlesContext";

function App () {
  return (
    <UserContext>
      <ArticlesContext>
        <RouterProvider router={router} />
      </ArticlesContext>
    </UserContext>
  );
}

export default App;