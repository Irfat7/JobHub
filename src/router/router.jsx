import { createBrowserRouter } from "react-router-dom"
import Header from "../components/Header/Header"
import Home from "../components/Layout/Home/Home"
import getAllJobs from "../tools/getJobTool"
import JobDetails from "../components/JobDetails/JobDetails"
import AppliedJobs from "../components/AppliedJobs/AppliedJobs"
import { getLocalStorage } from "../Utility/LocalStorageManager"
import ErrorPage from "../components/ErrorPage/ErrorPage"
import Marks from "../components/Marks/Marks"
import Blogs from "../components/Blogs/Blogs"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        loader: getAllJobs,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/statistics',
                element: <Marks/>
            },
            {
                path: '/applied-jobs',
                element: <AppliedJobs />,
            },
            {
                path: '/blog',
                element: <Blogs/>
            },
            {
                path: '/details/:jobId',
                element: <JobDetails />,
                loader: ({ params }) => params.jobId
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    },
])

export default router