import { SET_COLLECTION, SET_AGE } from '../actions/collectionActions01';

const initState = {
  idx: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COLLECTION: {
      // payload의 하위에 ids와 entities를 저장
      const ids = payload.map((entity) => entity['id']);
      // reduce() : 객체 변환
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return {
        ...state,
        ids,
        entities,
      };
    }

    case SET_AGE: {
      const { id, age } = payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: { ...state.entities[id], age },
        },
      };
    }

    default:
      return state;
  }
};
