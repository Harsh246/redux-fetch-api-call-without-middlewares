const ADD_ARTICLE = "ADD_ARTICLE"; 

const ADD_DATA = "ADD_DATA";




export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };


  export function adddata(payload) {
    return { type: ADD_DATA, payload }
  };


  export async function  fetchdata()
  {

    let gotdata = [];

   const result =  await fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
.then((data)=>
{
  gotdata= data;
  console.log(data);
  
  return{
  type: ADD_DATA,
  payload:[...gotdata]
}

})

console.log(result);
return result;


  }
