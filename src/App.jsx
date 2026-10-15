import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router'

import Homepage from './pages/Homepage';
import Icons from './components/Icons';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Homepage />} />
        <Route path='icons' element={<Icons />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}