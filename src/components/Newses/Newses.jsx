import { useEffect, useState } from "react";
import News from "../News/News";

const Newses = ({navNews}) => {
    const [newses, setNewses] = useState([]);
    const [showAll, setShowAll] = useState(false)

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

     const toDisplayNews = !showAll ? newses.slice(0,5) : newses;


    return (
        <div>
            {
                toDisplayNews.map(news =>
                   <News
                   key={news._id}
                   news={news}
                   >
                   </News> 
                    )
            }
            <div className="flex justify-center items-center mt-10">

            {
                !showAll && <button onClick={() => setShowAll(!showAll)} className="btn btn-primary">All News</button> || ''
            }
            </div>
        </div>
    );
};

export default Newses;