import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./js/User";

const App = () => 
<BrowserRouter>
    <Routes>
        <Route path="/user" element={<User/>}/>
    </Routes>
</BrowserRouter>;
export default App;