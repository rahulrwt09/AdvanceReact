import {useState, useEffect} from "react";
import {getCities,  addcity,deletecity } from "./api";
import Addcity from "./Addcity";
import axios from "axios";
function Citi() {
    const[data, setData]=useState([]);
    const [page, setPage]=useState(1);
    const [totalCount, setTotalCount]= useState(0);
  
   const handelgetcity= (page)=>{
    getCities({page:page,limit:5,sort:"population", order:"asc"})
    .then((res)=>{
        setData(res.data);
        setTotalCount(Number(res.headers["x-total-count"]));
    })
    .catch((err)=>console.log(err));
   }

    useEffect(()=>{
        handelgetcity(page)
    }, [page]);


const handelpagechange= (val)=>{
    const updatePage= page+val;
    setPage(updatePage);
}
const handelAddcity = (data)=>{
  addcity(data);
  handelAddcity(page)
}
const handeldeletecity=(id)=>{
    deletecity(id) 
    handelgetcity(page);
}
return ( 
    <>
      <div>
        <Addcity handelAddcity={handelAddcity}/>
         <h1>Citis</h1>
         {/* {data.map((city)=>{
            console.log(city.name);
            <div id={city.id}>
              {city.name}-
              {city.population}
            </div>
         })} */}
         {data.map((city)=>{
    console.log(city.name);
    return (
        <div id={city.id}>
            <p>
            {city.name} - {city.population}
            </p>
            <button onClick={()=>handeldeletecity(city.id)}>Delete</button>
        </div>
    );
})}
 

         <button disabled={page===1}
          onClick={()=>
        handelpagechange(-1)}
         >
             prev
         </button>
         <button disabled>
          {page}
         </button>
         <button disabled={page===Math.ceil(totalCount/5)
        }
        onClick={()=>
            handelpagechange(1)
        }
        >
            next
         </button>
      </div>
    </>
)
};
export default Citi;