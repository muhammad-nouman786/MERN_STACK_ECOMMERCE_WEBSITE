import App from "../App";
import Cart from "../pages/Cart";
import LoginSignup from "../pages/LoginSignup";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import ShopCategory from "../pages/ShopCategory";
import {createBrowserRouter} from 'react-router-dom'
import men_banner from "../Components/Assets/Frontend_Assets/banner_mens.png"
import women_banner from "../Components/Assets/Frontend_Assets/banner_women.png"
import kid_banner from "../Components/Assets/Frontend_Assets/banner_kids.png"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Shop />,
      },
      {
        path: "/mens",
        element: <ShopCategory category= "men" banner={men_banner}/>,
        
      },
      {
        path: "/womens",
        element: <ShopCategory category= "women" banner={women_banner}/>,
        
      },
      {
        path: "/kids",
        element: <ShopCategory  category= "kid" banner={kid_banner}/>,
       
      },
      {
        path: "/login",
        element: <LoginSignup />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: ":productId",
            element: <Product />,
          },
        ],
      },
    ],
  },
]);

export default router;
