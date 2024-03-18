'use client'
import { useState, useEffect } from "react";
import { sanityClient } from "./lib/sanity.js";

async function getData() {
  const query = `*[_type == "post"]`;
  const data = await sanityClient.fetch(query);
  console.log(data)
  return data;
 
}

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {data.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.overview}</p>
          <img src={post.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
