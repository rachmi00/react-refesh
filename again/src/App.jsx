import React from 'react'


const App = () => {
  const stories= [
    {
      title: "React",
      url: "htps://reactjs.org/",
      author: 'Jordan Walke',
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "htps://redux.js.org/",
      author: 'Dan Abramov',
      points: 5,
      objectID: 1,
    }
  ];
  return (
    <div>
      <Search/>
      <List list={stories}/>
    </div>
  )
}


const handleChange=(event)=>{
  //synthetic event 
  console.log(event);
  //value of target
  console.log(event.target.value);

}
const Search=()=>{
  return(
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
      <hr />
    </div>
  )
}


const List = (props) => {
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a> - {item.author} ({item.points} points)
        </li>
      ))}
    </ul>
  );
};

// const Item = (props)=>(
//   <li>
// <span>
//                 <a href={props.item.url}>{props.item.title}</a>
//               </span>
//               <span>{props.item.author}</span>
//               <span>{props.item.num_comments}</span>
//               <span>{props.item.points}</span>
//   </li>
// )

export default App