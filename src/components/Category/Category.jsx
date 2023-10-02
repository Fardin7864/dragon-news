import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
    const [ categorys, setCategorys] = useState([]);

    useEffect(() => { 
        const url = async () =>{

           await fetch('/categories.json')
          .then (res => res.json())
          .then(data => setCategorys(data))
        }
        url();
     },[])
     console.log(categorys)
    return (
        <div>
            <h3 className="text-xl text-center">All Categorys</h3>
            <ul id="category">

            {
                categorys.map(category => <li key={category.id} className="pl-12 py-2 w-full focus:bg-[#E7E7E7]" style={{fontSize: "20px"}}><NavLink  >{category.name}</NavLink></li>)
            }
            </ul>
        </div>
    );
};

export default Category;