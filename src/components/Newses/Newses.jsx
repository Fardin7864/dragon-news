import { useEffect, useState } from "react";
import News from "../News/News";

const Newses = ({navNews}) => {
    const [newses, setNewses] = useState([]);

    useEffect(() => { 
        const data = async () =>{
            await fetch('/news.json')
            .then(res => res.json())
            .then(data => {
                setNewses(data)
                navNews(data)
            })
        }

        data();
     },[])


    return (
        <div>
            {
                newses.map(news =>
                   <News
                   key={news._id}
                   news={news}
                   >
                   </News> 
                    )
            }
        </div>
    );
};

export default Newses;