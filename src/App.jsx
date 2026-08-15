import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import PrivateRoute from './routes/PrivateRoute'

import Home from './pages/Home'
import LetsLearn from './pages/LetsLearn'
import Lesson from './pages/Lesson'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import MyProfile from './pages/MyProfile'
import UpdateProfile from './pages/UpdateProfile'
import Tutorials from './pages/Tutorials'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'lets-learn', element: <LetsLearn /> },
        {
          path: 'lessons/:lesson_no',
          element: (
            <PrivateRoute>
              <Lesson />
            </PrivateRoute>
          ),
        },
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
        {
          path: 'tutorials',
          element: (
            <PrivateRoute>
              <Tutorials />
            </PrivateRoute>
          ),
        },
        { path: 'about-us', element: <AboutUs /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  {
    basename: '/kotoba-vocabulary-app/',
  }
)

export default router