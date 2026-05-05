"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { delay } from "@/components/utils";
import axios from "axios";

import BlogCard from "@/components/blogCard";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  const getBlogs = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    await delay(1000);
    setBlogsLoading(false);
    setBlogs(data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <main className="">
      <div className="container">
        <div className="jumbotron py-5">
          <h1>Blogs</h1>
        </div>
        <div className="row gap-4 pb-5">
          {blogsLoading &&
            [...Array(25).keys()].map((placeholder, index) => (
              <BlogCard key={index} loading={true} />
            ))}
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}
