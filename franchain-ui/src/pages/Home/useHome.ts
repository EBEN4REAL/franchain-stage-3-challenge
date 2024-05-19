import { useQuery } from 'react-query';

import { getProducts } from '../../services/Product.service';

export default function useHome() {

	const { data } = useQuery({
		queryKey: ["Product"],
		queryFn: getProducts,
	});

	return {
		products: data || [],
	};
}
