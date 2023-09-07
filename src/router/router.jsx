import { createBrowserRouter } from "react-router-dom"
import Header from "../components/Header/Header"
import Home from "../components/Layout/Home/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/blog',
                element: <p>blog</p>
            }
        ]
    }
])

export default router