import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GroupList = () => {
  // --> get real api <--
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
      try {
          const response = await axios.get('http://localhost:8080/api/v1/group');
          setData(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
      };

      fetchData();
  }, []);

  // mock data
  // const data = [
  //   {
  //     id: 2,
  //     name: "Khoa Công Nghệ Thông Tin",
  //     fb: "https://www.facebook.com/khoacongnghethongtinGDU",
  //     zalo: "",
  //     discord: "",
  //     otherLink: "",
  //     avatar:
  //       "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: 3,
  //     name: "Cau lac bo cau long",
  //     fb: "https://www.facebook.com/khoacongnghethongtinGDU",
  //     zalo: "",
  //     discord: "",
  //     otherLink: "",
  //     avatar:
  //       "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: 3,
  //     name: "Cau lac bo cau long",
  //     fb: "https://www.facebook.com/khoacongnghethongtinGDU",
  //     zalo: "",
  //     discord: "",
  //     otherLink: "",
  //     avatar:
  //       "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: 3,
  //     name: "Cau lac bo cau long",
  //     fb: "https://www.facebook.com/khoacongnghethongtinGDU",
  //     zalo: "",
  //     discord: "",
  //     otherLink: "",
  //     avatar:
  //       "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: 3,
  //     name: "Cau lac bo cau long",
  //     fb: "https://www.facebook.com/khoacongnghethongtinGDU",
  //     zalo: "",
  //     discord: "",
  //     otherLink: "",
  //     avatar:
  //       "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: 3,
  //     name: "Cau lac bo cau long",
  //     fb: "https://www.facebook.com/khoacongnghethongtinGDU",
  //     zalo: "",
  //     discord: "",
  //     otherLink: "",
  //     avatar:
  //       "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: 3,
  //     name: "Cau lac bo cau long",
  //     fb: "https://www.facebook.com/khoacongnghethongtinGDU",
  //     zalo: "",
  //     discord: "",
  //     otherLink: "",
  //     avatar:
  //       "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: 3,
  //     name: "Cau lac bo cau long",
  //     fb: "https://www.facebook.com/khoacongnghethongtinGDU",
  //     zalo: "",
  //     discord: "",
  //     otherLink: "",
  //     avatar:
  //       "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: 3,
  //     name: "Cau lac bo cau long",
  //     fb: "https://www.facebook.com/khoacongnghethongtinGDU",
  //     zalo: "",
  //     discord: "",
  //     otherLink: "",
  //     avatar:
  //       "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: 3,
  //     name: "Cau lac bo cau long",
  //     fb: "https://www.facebook.com/khoacongnghethongtinGDU",
  //     zalo: "",
  //     discord: "",
  //     otherLink: "",
  //     avatar:
  //       "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
  //   },
  // ];

  return (
    <div className="ml-5 h-[90vh] rounded-lg overflow-scroll  lg:block hidden clb-box">
      {data.map((group) => (
        <div key={group.id}>
          <Link to={"/group/" + group.id}>
            <div
              className="flex rounded-lg my-3 bg-white px-5 shadow-lg max-w-[290px]"
              style={{ alignItems: "center" }}
            >
              <div
                className="w-[80px] h-[80px] overflow-hidden flex"
                style={{ alignItems: "center" }}
              >
                <img
                  src={group.avatar}
                  alt="avatar"
                  className="w-full avt-clb"
                />
              </div>
              <p className="text-[16px] w-full">{group.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
