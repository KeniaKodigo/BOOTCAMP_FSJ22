import { MyProvider } from "./context/UserDataContext";
import { Home } from "./pages/Home/Home";
import { Session } from "./pages/Session/Session";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
export default function App() {

  return (
    <>
    <MyProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/login' element={<Session />}/>
        </Routes>
      </BrowserRouter>
    </MyProvider>
    </>
  );
}