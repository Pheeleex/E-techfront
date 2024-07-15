import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import HomePage from './Components/Pages/HomePage/HomePage'
import Page from "./Components/Auth/SignUp";
import RootLayout from "./Components/Layouts/RootLayout";
import SignIn from "./Components/Auth/SignIn";


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='SignUp' element ={<Page />} />
      <Route path="SignIn" element ={<SignIn />} />
  </Route>
)
)

function App() {

  return (
    (<RouterProvider router={router} />)
  )
}

export default App
