import {apiInstance} from './base';
import {Cat} from './models';

const BASE_URL = '/meow';

export const getRandomCat = () => {
    return apiInstance.get<Cat>(BASE_URL);
};