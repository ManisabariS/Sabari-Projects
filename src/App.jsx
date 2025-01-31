import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import LoginPage from "./pages/LoginPage";
import ContactInfo from "./pages/ContactInfo";
import ContactForm from "./pages/ContactForm";
import ContactLayout from "./layouts/ContactLayout";
import NotFound from "./pages/NotFound";
import { ProductsLoader, UsersLoader } from "./utils/ProductsLoader";
import Product from "./pages/Product";
import Users from "./pages/Users";
import Payment from "./pages/Payment";
 
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path='products' element={<Products/>} loader={ProductsLoader}>
        <Route path=':id' element={<Product/>}  />
      </Route> */}
        <Route path="products" element={<Products />} loader={ProductsLoader} />{" "}
        
        <Route path="products/:id" element={<Product />} />{" "}

        <Route path="products/:id/payment" element={<Payment />} />{" "}
        
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="services" element={<Services />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />

        <Route path="users" element={<Users/> } loader={UsersLoader}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
