import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router'

import Homepage from './pages/Homepage';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Homepage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}