import { NameSpace } from '../../const';
import { City, Offers, State } from '../../types/types';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].allOffers;
export const getOffersByCity = (state: State): Offers => state[NameSpace.Offers].offersByCity;
export const getIsOffersLoading = (state: State): boolean => state[NameSpace.Offers].isOffersLoading;
export const getIsOffersNotFound = (state: State): boolean => state[NameSpace.Offers].isOffersNotFound;
export const getCityName = (state: State): string => state[NameSpace.Offers].cityName;
export const getCity = (state: State): City => state[NameSpace.Offers].city;
export const getSortType = (state: State): string => state[NameSpace.Offers].sortType;

