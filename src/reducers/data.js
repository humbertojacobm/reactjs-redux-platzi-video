function data(state,action){
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      // const list = state.data.categories[2].playlist;
      var mediaItems = [];      
      state.data.categories.forEach((cat) => {
        const results = cat.playlist.filter((item) => {
                          return item.author.includes(
                             action.payload.query);
                        });        
        if(results.length)
          mediaItems.push(results)
            
      });
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