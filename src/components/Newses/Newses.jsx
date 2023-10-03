import { useEffect, useState } from "react";
import News from "../News/News";

const Newses = ({navNews}) => {
    const [newses, setNewses] = useState([]);
    const [showAll, setShowAll] = useState([])
    const [flag, setFlag] = useState(false);

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

     let count = 5;
     let toDisplayNews = newses.slice(0,count);
     const handleShow = () => { 
         count = count + 5;
        console.log(count)
        toDisplayNews = newses.slice(0,count);
        setFlag(!flag)
    }
    useEffect(() => { 
        setShowAll(toDisplayNews)
     },[flag])

    return (
        <div>
            {
                showAll.map(news =>
                   <News
                   key={news._id}
                   news={news}
                   >
                   </News> 
                    )
            }
            <div className="flex justify-center items-center mt-10">
                 <button onClick={handleShow} className="btn btn-primary">More News</button>
            </div>
        </div>
    );
};

export default Newses;