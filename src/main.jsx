import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import InputContainer from './components/InputContainer.jsx'
import About from './components/About.jsx'
import InputForm from './components/InputForm.jsx'
import InputShowPage from './components/InputShowPage.jsx'
import FourOhFour from './components/FourOhFour.jsx'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <InputContainer />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/new-input',
                element: <InputForm />
            },
            {
                path: '/input/:id',
                element: <InputShowPage />
            },
        ]
    },
    {
        path: '*',
        element: <FourOhFour />
    }
]

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)