import { useState } from "react";

function Addcity({handelAddcity}){
    //name , population coun try
    const [formState, setForm]=useState({
        name:"",
        population:"",
        country:"india"
    });
    const handelChange=(e)=>{
        const val=e.target.type==="number"?Number(e.target.value):e.target.value;
     setForm({...formState, [e.target.name]:val});
    
    };
    const handelsubmit= (e)=>{
        e.preventDefault();
        handelAddcity(formState );
        console.log(formState)
    };
    return (
        <>
        <form onSubmit={handelsubmit}>
            <div>
                <input name='name'
                type="text"
                value={formState.name} 
                onChange={handelChange}
                placeholder="city"
                />
             </div>

            <div>
                <input
                name="population"
                type="number"
                value={formState.population}
                onChange={handelChange}
                placeholder="population"
                
                
                />
            </div>
            <div>
               <input type="submit" value="submit"/>
            </div>
        </form>
        </>
    );
}
export default Addcity;