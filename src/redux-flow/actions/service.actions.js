import {
  LOAD_DATA_LIST_TOWN_HOUSE,
  LOAD_DATA_TOWN_HOUSE,
} from '../constants/service.constants';

export const loadDataListTownHouse = params => ({
  type: LOAD_DATA_LIST_TOWN_HOUSE,
  ...params,
});

export const loadDataTownHouse = params => ({
  type: LOAD_DATA_TOWN_HOUSE,
  ...params,
});
