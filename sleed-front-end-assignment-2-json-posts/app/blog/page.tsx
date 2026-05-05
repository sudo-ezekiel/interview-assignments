"use client";

import { useState, useEffect } from "react";

import axios from "axios";

import { delay } from "@/components/utils";

const Blogs = (props: any) => {
  const [blog, setBlog] = useState<any>({});
  const [blogLoading, setBlogLoading] = useState(true);

  const [blogComments, setBlogComments] = useState<any>([]);
  const [blogCommentsLoading, setBlogCommentsLoading] = useState(true);

  const { blogID } = props.searchParams;

  const getBlogDetails = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${blogID}`
    );
    await delay(1000);
    setBlogLoading(false);
    setBlog(data);
  };

  const getBlogComments = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${blogID}/comments`
    );
    await delay(1000);
    setBlogCommentsLoading(false);
    setBlogComments(data);
  };

  useEffect(() => {
    getBlogDetails();
  }, [blogID]);

  useEffect(() => {
    getBlogComments();
  }, [blog]);

  return (
    <div className="container">
      <div className="jumbotron py-5">
        <h1>Blog Details</h1>
      </div>

      {blogLoading && (
        <div
          className="row gap-4 p-5"
          style={{ backgroundColor: "#F4F4F4", minHeight: "22vh" }}
        >
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="spinner-border m-auto" role="status"></div>
            </div>
          </div>
        </div>
      )}

      {!blogLoading && (
        <div
          className="row gap-4 p-5"
          style={{ backgroundColor: "#F4F4F4", minHeight: "20vh" }}
        >
          <div className="col-12">User ID: {blog?.userId}</div>
          <div className="col-12">Title: {blog?.title}</div>
          <div className="col-12">
            <p>Body:</p>
            <div className="w-100">{blog?.body}</div>
          </div>
        </div>
      )}

      <div className="jumbotron pt-5 mt-5 pb-4">
        <h4>Comments</h4>
      </div>

      {blogCommentsLoading && (
        <div className="row gap-4 pb-5">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="spinner-border m-auto" role="status"></div>
            </div>
          </div>
        </div>
      )}

      {blogComments?.length > 0 && (
        <div className="row gap-4 pb-5">
          {blogComments.map((comment: any, index: number) => {
            return (
              <div
                className="col-12"
                key={index}
                style={{ backgroundColor: "#F4F4F4" }}
              >
                <div className="row gap-4 p-5">
                  <div className="col-12">Name: {comment?.name}</div>
                  <div className="col-12">Email: {comment?.email}</div>
                  <div className="col-12">
                    <p>Body:</p>
                    <div className="w-100">{comment?.body}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Blogs;
