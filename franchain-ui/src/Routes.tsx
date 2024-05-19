import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './layout/RootLayout/RootLayout';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

export const ROUTER = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/checkout",
				element: <Checkout />,
			},
		],
	},
]);
