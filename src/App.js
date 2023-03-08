import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./js/User";

const App = () =>
<BrowserRouter>
  <Routes>
    <Route path="/">
      <Route index element={<User/>}/>
    </Route>
  </Routes>
</BrowserRouter>;

export default App;