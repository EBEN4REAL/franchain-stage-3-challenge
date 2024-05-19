import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ROUTER } from './Routes';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
		},
	},
});

export default function App() {
	return (
		<>
			<ToastContainer autoClose={1500} />
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={ROUTER} />
			</QueryClientProvider>
		</>
	);
}
