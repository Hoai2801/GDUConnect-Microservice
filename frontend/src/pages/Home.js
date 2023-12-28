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
          avatar: "https://source.unsplash.com/random",
          department: "Cong Nghe Thong tin",
        },
      ],
      createdAt: "2023-12-26 00:00:00",
      content: "Hello nha",
      images: [
        {
          id: 7,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 8,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 9,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 10,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 11,
          imageURL: "https://source.unsplash.com/random",
        },
      ],
      comments: [
        {
          id: 4,
          user: [
            {
              id: 1,
              fullname: "Hoaiagafafa",
              avatar: "https://source.unsplash.com/random",
              department: "kinh te - quan tri",
            },
          ],
          content: "wowjaljcoac",
          imageURL: "https://source.unsplash.com/random",
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
          avatar: "https://source.unsplash.com/random",
          department: "Cong Nghe Thong tin",
        },
      ],
      createdAt: "2023-12-26 00:00:00",
      content: "Hello nha",
      images: [
        {
          id: 7,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 8,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 9,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 10,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 11,
          imageURL: "https://source.unsplash.com/random",
        },
        {
          id: 12,
          imageURL: "https://source.unsplash.com/random",
        },
      ],
      comments: [
        {
          id: 4,
          user: [
            {
              id: 1,
              fullname: "Hoaiagafafa",
              avatar: "https://source.unsplash.com/random",
              department: "kinh te - quan tri",
            },
          ],
          content: "wowjaljcoac",
          imageURL: "https://source.unsplash.com/random",
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
  // real api
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/api/v1/post");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const result = await response.json();
  //       setPosts(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(posts);
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
    </div>
  );
};

export default Home;
