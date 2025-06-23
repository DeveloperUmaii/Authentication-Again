import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../Pages/Login";
import Error from "../Components/Error";
import Register from "../Pages/Register";
import OutletLayOut from "../Outlet/OutletLayOut";
import SecretPrivate from "../Pages/SecretPrivate";
// import Error from "../Components/Error";

const Route = createBrowserRouter([
  {
    path:'/',
    element:<OutletLayOut />,
    errorElement:<Error></Error>,

    children:[
      {
        index:true,
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/secret',
        element:<SecretPrivate />
      }
    ]
  }
])

export default Route;