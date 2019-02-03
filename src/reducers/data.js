import schema from '../schemas/index.js'
import { fromJS } from 'immutable';

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: [],
})

function data(state = initialState,action){
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      // const list = state.data.categories[2].playlist;
      let mediaItems = [];
      if (action.payload.query)
      {
        state.data.categories.forEach((cat) => {
          const results = cat.playlist.filter((item) => {
                            return item.author.toUpperCase().includes(
                               action.payload.query.toUpperCase());
                          });        
          if(results.length)
            mediaItems.push(...results)
              
        });
      }
      // const results = list.filter((item) => {
      //                   return item.author.includes(action.payload.query);
      //                 })
      return {
        ...state,
        search: mediaItems
      };
    }
    default:
      return state;
  }
}
export default data;