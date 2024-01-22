import React,{useState,useEffect} from 'react'
import NewsCard from './NewsCard';

export default function NewsList({data}) {

    const [News, setNews] = useState([]);

    const FetchNews = async () => {
      const response = await fetch(`http://localhost:9001/get_path/news/${data}`);
      const res = await response.json();
  
      setNews(res);
    }

    useEffect(() => {
      FetchNews()
    },[])

  return (
    <div className='w-full h-max block'>
      {
        News.map((data,index) => (
            <NewsCard key={index} img={data} description={data} />
        ))
      }
    </div>
  )
}