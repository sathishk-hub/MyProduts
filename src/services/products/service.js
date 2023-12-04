import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import { productsActions, selectProducts } from '../../store/products/slice';

const useProductsService = () => {
    const dispatch = useDispatch();
    const [skip, setSkip] = useState(0);
    const products = useSelector(selectProducts);
    return {
        products,
        fetchProducts: () => {
            dispatch(productsActions.fetchAll({ skip }));
        },
        fetchNextProductsSet: () => {
            setSkip(skip + 30);
            if (
                Number(products?.total) >
                Number(products?.skip) + Number(products?.limit)
            ) {
                dispatch(productsActions.fetchAll({ skip }));
            }
        },
    };
};

export default useProductsService;
