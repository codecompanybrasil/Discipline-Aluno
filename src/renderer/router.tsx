import { createBrowserRouter } from "react-router-dom";

import LoadingPage from "./Pages/LoadingPage";
import AvaliationListPage from "./Pages/AvaliationListPage";
import AvaliationDetailsPage from "./Pages/AvaliationDetailsPage";
import AvaliationPage from "./Pages/AvaliationPage";
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Redirect({to}: {to: string}) {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(to)
    })

    return (
        <>
        </>
    );
}

export default createBrowserRouter([
    {
        path: "/",
        element: <LoadingPage />,
    },
    {
        path: "/avaliacoes",
        element: <AvaliationListPage />,
    },
    {
        path: "/avaliacoes/:hash",
        element: <AvaliationPage />,
        loader: async ({ request, params }) => {
            const data = await fetch(
                `https://api.discipline.app.br/avaliations/${params.hash}/export`,
                { signal: request.signal },
            ).then(async (response: any) => {
                if (response.ok) {
                    return await response.json();
                }
            });

            return data;
        },
    },
    {
        path: "/avaliacoes/:hash/detalhes",
        element: <AvaliationDetailsPage />,
        loader: async ({ request, params }) => {
            const data = await fetch(
                `https://api.discipline.app.br/avaliations/${params.hash}`,
                { signal: request.signal },
            ).then(async (response: any) => {
                if (response.ok) {
                    return await response.json();
                }
            });

            return data;
        },
    },
    {
        path: "/main_window",
        element: <Redirect to="/" />
    }
]);
