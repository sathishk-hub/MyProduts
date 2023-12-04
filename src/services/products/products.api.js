import makeApi from '../../libs/axios/api';

const BASE_URL = 'https://dummyjson.com';

const api = makeApi(BASE_URL);

const ALL_PRODUCTS = '/products';

const getAllProducts = async payload =>
    api.get(`${ALL_PRODUCTS}?skip=${payload?.skip}`);

export default getAllProducts;
