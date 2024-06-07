import React from "react";
import { Link } from "react-router-dom";

const GroupList = () => {
  // --> get real api <--
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8080/api/v1/group");
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // mock data
  const data = [
    {
      id: 2,
      name: "Khoa Công Nghệ Thông Tin",
      fb: "https://www.facebook.com/khoacongnghethongtinGDU",
      zalo: "",
      discord: "",
      otherLink: "",
      avatar:
        "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    },
    // {
    //   id: 3,
    //   name: "Cau lac bo cau long",
    //   fb: "https://www.facebook.com/khoacongnghethongtinGDU",
    //   zalo: "",
    //   discord: "",
    //   otherLink: "",
    //   avatar:
    //     "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    // },
    // {
    //   id: 3,
    //   name: "Cau lac bo cau long",
    //   fb: "https://www.facebook.com/khoacongnghethongtinGDU",
    //   zalo: "",
    //   discord: "",
    //   otherLink: "",
    //   avatar:
    //     "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    // },
    // {
    //   id: 3,
    //   name: "Cau lac bo cau long",
    //   fb: "https://www.facebook.com/khoacongnghethongtinGDU",
    //   zalo: "",
    //   discord: "",
    //   otherLink: "",
    //   avatar:
    //     "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    // },
    // {
    //   id: 3,
    //   name: "Cau lac bo cau long",
    //   fb: "https://www.facebook.com/khoacongnghethongtinGDU",
    //   zalo: "",
    //   discord: "",
    //   otherLink: "",
    //   avatar:
    //     "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    // },
    // {
    //   id: 3,
    //   name: "Cau lac bo cau long",
    //   fb: "https://www.facebook.com/khoacongnghethongtinGDU",
    //   zalo: "",
    //   discord: "",
    //   otherLink: "",
    //   avatar:
    //     "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    // },
    // {
    //   id: 3,
    //   name: "Cau lac bo cau long",
    //   fb: "https://www.facebook.com/khoacongnghethongtinGDU",
    //   zalo: "",
    //   discord: "",
    //   otherLink: "",
    //   avatar:
    //     "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    // },
    // {
    //   id: 3,
    //   name: "Cau lac bo cau long",
    //   fb: "https://www.facebook.com/khoacongnghethongtinGDU",
    //   zalo: "",
    //   discord: "",
    //   otherLink: "",
    //   avatar:
    //     "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    // },
    // {
    //   id: 3,
    //   name: "Cau lac bo cau long",
    //   fb: "https://www.facebook.com/khoacongnghethongtinGDU",
    //   zalo: "",
    //   discord: "",
    //   otherLink: "",
    //   avatar:
    //     "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    // },
    // {
    //   id: 3,
    //   name: "Cau lac bo cau long",
    //   fb: "https://www.facebook.com/khoacongnghethongtinGDU",
    //   zalo: "",
    //   discord: "",
    //   otherLink: "",
    //   avatar:
    //     "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsdWJ8ZW58MHx8MHx8fDA%3D",
    // },
  ];

  return (
    <div
      className="clb-box ml-5 hidden h-[calc(100vh-63px)] overflow-scroll rounded-lg lg:block"
      align="center"
    >
      {data.map((group) => (
        <div key={group.id}>
          <Link to={"/group/" + group.id}>
            <div className="my-3 flex items-center rounded-lg bg-slate-50 px-5 shadow-lg">
              <div className="flex h-[80px] w-[80px] items-center overflow-hidden">
                <img
                  src={group.avatar}
                  alt="avatar"
                  className="avt-clb w-full"
                />
              </div>
              <p className="w-full text-[16px]">{group.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
