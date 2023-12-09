import React from "react";
import CreatePost from "../components/CreatePost";
import GroupList from "../components/GroupList";
import Post from "../components/Post";

const Home = () => {
  const posts = [
    {
      post_id: 1,
      // người đăng bài
      user: [
        {
          id: 23,
          fullname: "Alex Samuel",
          avatar:
            "https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
          department: "Công nghệ thông tin",
        },
      ],
      content: "Chúc sinh viên buổi sáng vui vẻ",
      images: [
        {
          url: [
            "https://images.unsplash.com/photo-1633895136488-5a28683473a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
            "https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1633895136488-5a28683473a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
          ],
        },
      ],
      // số người đã like
      // length like: 2
      likes: [
        {
          id: 23,
          avatar:
            "https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
          fullname: "Alex Samuel",
        },
      ],
      comments: [
        {
          user: [
            {
              id: 23,
              fullname: "Alex Samuel",
              avatar:
                "https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
              department: "Công nghệ thông tin",
            },
          ],
          content: "nhớ like và share nha cả nhà 1",
          // only 1 media
          image: {
            url: "https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
          },
          created_at: "2023-03-26 09:08:44",
        },
        {
          user: [
            {
              id: 52,
              fullname: "Alax Sumuel",
              avatar:
                "https://images.unsplash.com/photo-1700495525887-7554f360c531?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
              department: "Kinh tế",
            },
          ],
          content: "nhớ like và share nha cả nhà 2",
          image: {
            url: "https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
          },
          created_at: "2023-03-26 09:08:44",
        },
      ],
      created_at: "2023-03-26 09:08:44",
    },
    {
      post_id: 2,
      // người đăng bài
      user: [
        {
          id: 23,
          fullname: "Alex Samuel",
          avatar:
            "https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
          department: "Công nghệ thông tin",
        },
      ],
      content: "Chúc sinh viên buổi toi vui vẻ",
      images: [
        {
          url: [
            "https://images.unsplash.com/photo-1682686581663-179efad3cd2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
            "https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
          ],
        },
      ],
      // số người đã like
      // length like: 2
      likes: [
        {
          id: 23,
          avatar:
            "https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
          fullname: "Alex Samuel",
        },
        {
          id: 24,
          avatar:
            "https://images.unsplash.com/photo-1700495525887-7554f360c531?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
          fullname: "Alax Sumuel",
        },
      ],
      comments: [
        {
          user: [
            {
              id: 52,
              fullname: "Alax Sumuel",
              avatar:
                "https://images.unsplash.com/photo-1700495525887-7554f360c531?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
              department: "Kinh tế",
            },
          ],
          content: "nhớ like và share nha cả nhà 2",
          image: {
            url: "https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
          },
          created_at: "2023-03-26 09:08:44",
        },
      ],
      created_at: "2023-03-26 09:08:49",
    },
  ];
  return (
    <div className="grid grid-cols-4">
      <GroupList />
      {/* px-5: add padding x 20px */}
      <div className="col-span-2 px-5">
        <div className="home-post" align="center">
          <CreatePost />
          {/* nếu biến posts có data thì truyền data vào component Post,
          nếu không thì thể hiện Loading ... */}
          {posts ? (
            posts.map((post) => <Post postData={post} key={post.post_id} />)
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
