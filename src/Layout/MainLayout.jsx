//React Router Dom
import { Outlet } from 'react-router-dom'
//Components
import { Footer, MainNavbar } from '../Components'

export default function MainLayout() {
    return (
        <div>
            <MainNavbar />
            <Outlet />
            <Footer />
        </div>
    )
}
