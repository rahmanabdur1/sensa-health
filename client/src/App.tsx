
// import './App.css'
// import { RouterProvider } from 'react-router-dom';
// import { routes } from './Router/Routers/Routers';
// function App() {
  

//   return (
//     <>
//  <RouterProvider router={routes}></RouterProvider>
//     </>
//   )
// }

// export default App



import { Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { Main } from './layout/Main';
import { Home } from './Pages/Home/Home';
import { Procrastination } from './Pages/Procrastination/Procrastination';
import { Register } from './Pages/Copmponent/Register/Register';
import { Login } from './Pages/Copmponent/Login/Login';
import { AppFeatures } from './Pages/Copmponent/AppFeatures/AppFeatures';
import { About } from './Pages/Copmponent/About/About';
import { Blog } from './Pages/Copmponent/Blog/Blog';
import { Email } from './Pages/Email/Email';
import Checkout from './Pages/Checkout/Checkout';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/procrastination/:categoryId" element={<Procrastination />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appfeatures" element={<AppFeatures />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/email" element={<Email />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </I18nextProvider>
  );
};

export default App;
