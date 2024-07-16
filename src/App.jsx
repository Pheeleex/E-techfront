import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes
} from "react-router-dom";
import HomePage from './Components/Pages/HomePage/HomePage'
import Page from "./Components/Auth/SignUp";
import RootLayout from "./Components/Layouts/RootLayout";
import SignIn from "./Components/Auth/SignIn";
import Courses from "./Components/Pages/HomePage/Courses";
import Reviews from "./Components/Pages/HomePage/Reviews";
import { UserProvider } from "./Components/UserContext";
import User from "./Components/Auth/User";


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='SignUp' element ={<Page />} />
      <Route path="SignIn" element ={<SignIn />} />
      <Route path="User" element ={<User />} />
  </Route>
)
)

function App() {
  return (
      <UserProvider>
    (<RouterProvider router={router} />)
    </UserProvider>
  )
}

export default App
