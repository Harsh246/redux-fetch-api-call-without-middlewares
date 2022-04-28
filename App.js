import React from "react";
import List from "./List";
import store from "../store/index";
import Form from "./Form";
import { connect } from "react-redux";
import { fetchdata } from "../actions";

class App extends React.Component{

 rerender = ()=>
{
  console.log("rendrdhfj");
this.forceUpdate();
}
     

  render()
  
  {
    return(
 <div>
    <h2>Articles</h2>
<ul>
    {
      store.getState().articles.map((e,ind) => <List key={ind} title={e}/>)
    
    
    }</ul>
    <br></br>
     <br></br>
        <Form  rerender={this.rerender}/>
    {/* <button type="button" onClick={()=> this.props.dispatch(fetchdata())}>fetch courses</button>
  */}

<button type="button" onClick={()=>{ 
  
  let res =  fetchdata();

  res.then((data)=> {this.props.dispatch(data)
  console.log("baadmei hu mai toh" )
  
  
  });

  
  }
  
  }>fetch courses</button>
 
</div> 
    )
  }
}

const mapState = (state) =>{

  return{ articles: state.articles};
  

}

// const mapdis = (dispatch)=>
// {
//   return{
//     fetchdata: fetchdata(dispatch)
//   }
// }


// export default connect(mapState, mapdis)(App);


export default connect(mapState)(App);
