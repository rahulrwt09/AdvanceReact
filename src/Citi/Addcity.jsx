import { useState } from "react";

function Addcity(){
    //name , population coun try
    const [formState, setForm]=useState({
        name:"",
        population:"",
        country:"india"
    });
    const handelChange=(e)=>{
     setForm({...formState, [e.target.name]:e.target.value});
     console.log(formState);
    };
    return (
        <>
        <form>
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
        </form>
        </>
    );
}
export default Addcity;