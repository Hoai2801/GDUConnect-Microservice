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
    {
      id: 6,
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
      images: "",
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
  return (
    <>
      <div className="grid px-5" id="home">
        <div
          className="col-end-2 col-start-1 max-h-[calc(100vh-63px)] overflow-y-scroll post pt-[0.75rem] post-display"
          align="center"
        >
          <CreatePost />
          {posts ? (
            posts.map((post) => <Post postData={post} key={post.id} />)
          ) : (
            <p>Loading ...</p>
          )}
        </div>
        <div className="mt-[-0.75rem] pt-[0.75rem] grouplist-none">
          <GroupList />
        </div>
        <div className="mt-[-0.75rem] pt-[0.75rem] grouplist-display relative hidden">
          <div
            className="absolute top-3 left-3 mt-[12px] p-2 bg-slate-300 group hover:bg-black cursor-pointer trasition duration-300"
            style={{ clipPath: "circle()" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="group-hover:fill-white"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </div>
          <GroupList />
        </div>
      </div>
    </>
  );
};

export default Home;
