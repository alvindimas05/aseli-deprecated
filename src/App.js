import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./js/User";
import Post from "./js/Post";

const App = () => 
<BrowserRouter>
    <Routes>
        <Route path="/user" element={<User/>}/>
        <Route path="/post" element={<Post/>}/>
    </Routes>
</BrowserRouter>;
export default App;