import React from "react";
import CreatePost from "../components/CreatePost";
import GroupList from "../components/GroupList";
import Post from "../components/Post";

const Home = () => {
  const posts = [
    {
      id: 4,
      user: [
        {
          id: 1,
          fullname: "Nguyen Van A",
          avatar:
            "https://images.unsplash.com/photo-1542372712-fc07597133cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          department: "Cong Nghe Thong tin",
        },
      ],
      content: "Hello nha",
      images: [
        {
          id: 7,
          imageURL:
            "https://images.unsplash.com/photo-1702165640016-bf7b60521f16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
        },
        {
          id: 8,
          imageURL:
            "https://images.unsplash.com/photo-1682687982298-c7514a167088?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 9,
          imageURL:
            "https://images.unsplash.com/photo-1682687982502-b05f0565753a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 10,
          imageURL:
            "https://images.unsplash.com/photo-1702657599836-7a3480e54c1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 11,
          imageURL:
            "https://images.unsplash.com/photo-1702700246109-ebf22d487aea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      comments: [
        {
          id: 4,
          user: [
            {
              id: 1,
              fullname: "Hoaiagafafa",
              avatar:
                "https://images.unsplash.com/photo-1529391387768-ab39476d6a52?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              department: "kinh te - quan tri",
            },
          ],
          content: "wowjaljcoac",
          imageURL:
            "https://images.unsplash.com/photo-1529391387768-ab39476d6a52?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          createdAt: "2023-12-10 20:17:40",
        },
      ],
      likes: [
        {
          id: 6,
          userId: 1,
        },
      ],
    },
    {
      id: 5,
      user: [
        {
          id: 1,
          fullname: "Nguyen Van A",
          avatar:
            "https://images.unsplash.com/photo-1542372712-fc07597133cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          department: "Cong Nghe Thong tin",
        },
      ],
      content: "Hello nha",
      images: [
        {
          id: 7,
          imageURL:
            "https://images.unsplash.com/photo-1702165640016-bf7b60521f16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
        },
        {
          id: 8,
          imageURL:
            "https://images.unsplash.com/photo-1682687982298-c7514a167088?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 9,
          imageURL:
            "https://images.unsplash.com/photo-1682687982502-b05f0565753a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 10,
          imageURL:
            "https://images.unsplash.com/photo-1702657599836-7a3480e54c1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 11,
          imageURL:
            "https://images.unsplash.com/photo-1702700246109-ebf22d487aea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 12,
          imageURL:
            "https://images.unsplash.com/photo-1702659610398-58d3fb3f65f2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      comments: [
        {
          id: 4,
          user: [
            {
              id: 1,
              fullname: "Hoaiagafafa",
              avatar:
                "https://images.unsplash.com/photo-1529391387768-ab39476d6a52?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              department: "kinh te - quan tri",
            },
          ],
          content: "wowjaljcoac",
          imageURL:
            "https://images.unsplash.com/photo-1702165640016-bf7b60521f16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
          createdAt: "2023-12-10 20:17:40",
        },
      ],
      likes: [
        {
          id: 6,
          userId: 1,
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-4">
      <GroupList />
      {/* px-5: add padding x 20px */}
      <div className="col-span-2 px-5 home ">
        <div className="home-post" align="center">
          <CreatePost />
          {/* nếu biến posts có data thì truyền data vào component Post,
          nếu không thì thể hiện Loading ... */}
          {posts ? (
            posts.map((post) => <Post postData={post} key={post.id} />)
          ) : (
            // viết một component loading để thể hiện trực quan hơn
            <p>Loading ...</p>
          )}
        </div>
      </div>
      <div className="survey">
        <div className="survey-box">Khảo sát</div>
      </div>
    </div>
  );
};

export default Home;
