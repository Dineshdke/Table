import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [data, setData] = useState([]);


  const avail = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const handleDate = () =>{
    setData(sortDate(avail));
    console.log(data,"After set")
  }

  const handleSort = () =>{
    setData(sortView(avail))
  }

  const sortDate = (avail) => {
    let sortData = avail.sort((a,b)=>{

      let one = new Date(a.date);
      let two = new Date(b.date);
      if(one<two){
        return 1;
      }
      if(one>two){
        return -1;
      }
      if(one == two) {
        if (one.views > two.views) {
                return -1;
              }
              return 1;
      }
    })
      // return -1;
      
    //   let nameA = a.date.split('-');
    //   let nameB = b.date.split('-');

    //   if (nameA[0] > nameB[0]) {
    //     return -1;
    //   }
    //   if (nameA[0] < nameB[0]) {
    //     return 1;
    //   }
    //   if (nameA[0]==nameB[0]) {
    //     if (nameA[1] > nameB[1]) {
    //       return -1;
    //     }
    //     if (nameA[1] < nameB[1]) {
    //       return 1;
    //     }
    //     if (nameA[1]==nameB[1]) {   
    //       if (nameA[2] > nameB[2]) {
    //         return -1;
    //       }
    //       if (nameA[2] < nameB[2]) {
    //         return 1;
    //       }
    //   }    
    // }
  
  // };
    return sortData;
  }

  const sortView = (avail) => {
    let sortData = avail.sort((a,b)=>{
      let nameA = a.views;
      let nameB = b.views;

      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      if (nameA==nameB) {
          let one = new Date(nameA[0]);
          let two = new Date(nameB[0]);
          if(one<two){
            return 1;
          }
          return -1;
    }});
    return sortData;
  }

  useEffect(()=>{
    setData(avail);
  },[])


  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={handleDate}>Sort by Date</button>
      <button onClick={handleSort}>Sort by Views</button>
      <table>
        <thead>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </thead>
        <tbody>
          {data.length>0 ? 
          (data.map((item,idx) => {
            return (
              <tr key={idx}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })):''}
        </tbody>
      </table>
    </>
  );
}

export default App;
