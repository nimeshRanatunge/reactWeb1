import React, { useEffect, useState } from "react";
import NameListItem from "./NameListItem";

function NameList(){

  const [loadData, setLoadData] = useState(false)
  const [namelist, setNameList] = useState([
    {
      "id": 1,
    "name": {
        "title": "mr", 
        "first": "brad",
        "last": "gibson"
      },
      "location": {
        "city": "kilcoole",
       },
       "email": "brad.gibson@example.com",
       "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },
      "picture": {
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
},
{
  "id": 2,
    "name":{"title":"Mrs","first":"Yasemin","last":"Walraven"},
      "location": {
        "city":"Varsselder Veldhunten",
       },
       "email":"yasemin.walraven@example.com",
       "dob": {
        "date":"1966-04-26T11:14:41.210Z","age":55
      },
      "picture": {
        "medium":"https://randomuser.me/api/portraits/med/women/6.jpg",
      },
},
{
  "id": 3,
    "name":{"title":"Mr","first":"Kent","last":"Stiansen"},
      "location": {
        "city":"Movatn",
       },
       "email":"kent.stiansen@example.com",
       "dob": {
        "date":"1962-07-21T18:51:22.325Z","age":59
      },
      "picture": {
        "medium":"https://randomuser.me/api/portraits/med/men/88.jpg",
      },
},
  

]);
useEffect(()=>{
  fetch("https://randomuser.me/api").then((res)=>{
    return res.json()
  }).then(resdata=>{
    setNameList([...namelist,resdata.results[0]])
  })
},[loadData])


    const nameListcomponent = () =>{
        return namelist.map((xyz)=>{
            return(
              <NameListItem 
                key={xyz.id}
                name={xyz.name.first + " QQQQQQQQQQ" + xyz.name.last}
                city={xyz.location.city}
                email={xyz.email}
                birthday={xyz.dob.date}
                avatar={xyz.picture.medium}
            />
            )
          })
        }
    
        const addUserHandler = () => {
         setLoadData(true)
        }


   return(
    <React.Fragment>
       <div className="container mt-4">
       <h1>HelloO again!!</h1>
        <hr/>
       <button className="btn btn-primary" onClick={addUserHandler}>Add name</button>
        <ul>{nameListcomponent()}</ul>
       </div>
    </React.Fragment>
   );

   }

export default NameList