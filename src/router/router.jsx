import { createBrowserRouter } from "react-router-dom"
import Header from "../components/Header/Header"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                path: '/blog',
                element: <p>blog</p>
            }
        ]
    }
])

export default router