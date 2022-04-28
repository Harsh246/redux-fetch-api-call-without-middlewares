
const initialState = {
  articles: [
    "avengers", "Jab we met","khali peeli"
  ],
  data:[]
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_ARTICLE") {
console.log("inside reducer "+action.type+" "+action.payload )
      var newState = {
      ...state,
          articles:  [...state.articles,action.payload]
      }
      

      // console.log(newState);
      // console.log(newState  == state);

      
      return newState;

  }
 else if (action.type === "ADD_DATA") {
    console.log("inside reducer "+action.type+" "+action.payload )
          var newState = {
          ...state,
              data:  [...action.payload]
          }
          
    
          console.log(newState.data);
          // console.log(newState  == state);
    
          
          return newState;
    
      }
    

  
  return state;
}

export default rootReducer;
