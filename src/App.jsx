import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home/Home";

import Layout from "./Pages/Layout";
import PageYetToMake from "./Pages/OtherPages/PageYetToMake";
import Fourofour from "./Pages/OtherPages/Fourofour";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<PageYetToMake />} />
        <Route path="/featured" element={<PageYetToMake />} />
        <Route path="/product" element={<PageYetToMake />}/>
        <Route path="/testimonial" element={<PageYetToMake />} />
        <Route path="/:404" element={<Fourofour />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
