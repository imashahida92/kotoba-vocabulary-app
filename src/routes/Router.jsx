import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import LetsLearn from '../pages/LetsLearn';
import Lesson from '../pages/Lesson';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgetPassword from '../pages/ForgetPassword';
import MyProfile from '../pages/MyProfile';
import UpdateProfile from '../pages/UpdateProfile';
import Tutorials from '../pages/Tutorials';
import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'start-learning', element: <LetsLearn /> },
      {
        path: 'lessons/:lessonNo',
        element: (
          <PrivateRoute>
            <Lesson />
          </PrivateRoute>
        ),
      },
      {
        path: 'tutorials',
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        ),
      },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      {
        path: 'my-profile',
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: 'update-profile',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
