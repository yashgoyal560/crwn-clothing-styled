import ShopActiontypes from './shop.types';

export const updateCollections = collectionsmap => ({
    type: ShopActiontypes.UPDATE_COLLECTIONS,
    payload: collectionsmap
});