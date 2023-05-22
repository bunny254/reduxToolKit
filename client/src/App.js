//Importing all dependencies

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//Importing components
import NavBar from "./components/navBar";
import ProductsListing from "./components/products";
import ShoppingCart from "./components/shoppingCart";
import  {Provider} from "react-redux";
import store from "./store/store";

const Layout=()=>{
  return(
    <Provider store={store}>
    <div>
      
      <NavBar/>
      <Outlet/>
      
    </div>
    </Provider>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<ProductsListing/>
      },
      {
        path:"/cart",
        element:<ShoppingCart/>
      },
    ]
  },
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
