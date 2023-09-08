import { createBrowserRouter } from "react-router-dom"
import Header from "../components/Header/Header"
import Home from "../components/Layout/Home/Home"
import getAllJobs from "../tools/getJobTool"
import JobDetails from "../components/JobDetails/JobDetails"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        loader: getAllJobs,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/blog',
                element: <p>blog</p>
            },
            {
                path: '/details/:jobId',
                element: <JobDetails/>,
                loader: ({params})=>params.jobId
            }
        ]
    }
])

export default router