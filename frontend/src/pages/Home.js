import React from 'react'
import Post from '../components/Post'
import GroupList from '../components/GroupList'

const Home = () => {
  const posts = [
    {
      "post_id": 1,
      // người đăng bài
      "user": [
        {
          "id": 23,
          "fullname": "Alex Samuel",
          "avatar": "https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
          "department": "Công nghệ thông tin",
        }
      ],
      "content": "Chúc sinh viên buổi sáng vui vẻ",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1633895136488-5a28683473a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
        },
      ],
      // số người đã like
      // length like: 2
      "likes": [
        {
          "id": 23,
          "fullname": "Alex Samuel",
        },
        {
          "id": 24,
          "fullname": "Alax Sumuel",
        }
      ],
      "comments": [
        {
          "user": [
            {
              "id": 23,
              "fullname": "Alex Samuel",
              "avatar": "https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
              "department": "Công nghệ thông tin",
            }
          ],
          "content": "nhớ like và share nha cả nhà 1",
          // only 1 media
          "image": {
            "url": "google.com"
          },
          "created_at": "2023-03-26 09:08:44"

        },
        {
          "user": [
            {
              "id": 52,
              "fullname": "Alax Sumuel",
              "avatar": "https://images.unsplash.com/photo-1700495525887-7554f360c531?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
              "department": "Kinh tế",
            }
          ],
          "content": "nhớ like và share nha cả nhà 2",
          "image": "",
          "created_at": "2023-03-26 09:08:44"
        },
      ],
      "created_at": "2023-03-26 09:08:44"
    }
  ]
  return (
    <div  className='grid grid-cols-4'>
      <GroupList />
      <div className='col-span-2'>
        {/* nếu biến posts có data thì truyền data vào component Post,
        nếu không thì thể hiện Loading ... */}
        {posts ? posts.map((post) => (
          <Post postData={post} />
        )) : 
        // viết một component loading để thể hiện trực quan hơn
        <p>Loading ...</p>}
      </div>
      <div>
          Khảo sát
      </div>
    </div>
  )
}

export default Home