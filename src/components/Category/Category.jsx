import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"

const Category = () => {
    const [ categorys, setCategorys] = useState([]);
    const [isShow, setIsShow] = useState(false)
    
    useEffect(() => { 
        const url = async () =>{

            await fetch('/categories.json')
            .then (res => res.json())
            .then(data => setCategorys(data))
        }
        url();
    },[])
    const handleManue = () => { 
         setIsShow(!isShow)
        }
      const hamManue = {       
        display: isShow ? 'block' : 'none',
      }
     

     
    return (
        <div>
            <h3 className="text-xl text-center text-p font-bold mb-6 pl-4 flex justify-center items-center gap-4"><button onClick={handleManue} className="lg:hidden"><GiHamburgerMenu></GiHamburgerMenu></button>All Categorys</h3>
            <ul id="category" style={hamManue}>

            {
                categorys.map(category => <li key={category.id} className="pl-12 py-2 w-full focus:bg-[#E7E7E7]" style={{fontSize: "20px"}}><NavLink  >{category.name}</NavLink></li>)
            }
            </ul>
        </div>
    );
};

export default Category;