// React Router Dom
import { createBrowserRouter } from "react-router-dom";
//Views
import { About, Home } from "../Views";
//Layout
import { MainLayout } from "../Layout";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
])

export default router