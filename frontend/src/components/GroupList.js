import React from "react";
import { Link } from "react-router-dom";

const GroupList = () => {
  // get real api
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //     const fetchData = async () => {
  //     try {
  //         const response = await fetch('http://localhost:8080/api/v1/group/all');
  //         if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //         }

  //         const result = await response.json();
  //         setData(result);
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //     }
  //     };

  //     fetchData();
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
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/376827570_635964728638325_4651782039819255769_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=596444&_nc_ohc=rScaDcVNndYAX8KH_Qe&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfCTZugEOAAQ2Qy73O5I4AqtGCcIyGvgsrMLYSRVumvjwg&oe=65722F87",
    },
    {
      id: 3,
      name: "Cau lac bo cau long",
      fb: "https://www.facebook.com/khoacongnghethongtinGDU",
      zalo: "",
      discord: "",
      otherLink: "",
      avatar:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/376827570_635964728638325_4651782039819255769_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=596444&_nc_ohc=rScaDcVNndYAX8KH_Qe&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfCTZugEOAAQ2Qy73O5I4AqtGCcIyGvgsrMLYSRVumvjwg&oe=65722F87",
    },
    {
      id: 3,
      name: "Cau lac bo cau long",
      fb: "https://www.facebook.com/khoacongnghethongtinGDU",
      zalo: "",
      discord: "",
      otherLink: "",
      avatar:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/376827570_635964728638325_4651782039819255769_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=596444&_nc_ohc=rScaDcVNndYAX8KH_Qe&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfCTZugEOAAQ2Qy73O5I4AqtGCcIyGvgsrMLYSRVumvjwg&oe=65722F87",
    },
    {
      id: 3,
      name: "Cau lac bo cau long",
      fb: "https://www.facebook.com/khoacongnghethongtinGDU",
      zalo: "",
      discord: "",
      otherLink: "",
      avatar:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/376827570_635964728638325_4651782039819255769_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=596444&_nc_ohc=rScaDcVNndYAX8KH_Qe&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfCTZugEOAAQ2Qy73O5I4AqtGCcIyGvgsrMLYSRVumvjwg&oe=65722F87",
    },
    {
      id: 3,
      name: "Cau lac bo cau long",
      fb: "https://www.facebook.com/khoacongnghethongtinGDU",
      zalo: "",
      discord: "",
      otherLink: "",
      avatar:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/376827570_635964728638325_4651782039819255769_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=596444&_nc_ohc=rScaDcVNndYAX8KH_Qe&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfCTZugEOAAQ2Qy73O5I4AqtGCcIyGvgsrMLYSRVumvjwg&oe=65722F87",
    },
    {
      id: 3,
      name: "Cau lac bo cau long",
      fb: "https://www.facebook.com/khoacongnghethongtinGDU",
      zalo: "",
      discord: "",
      otherLink: "",
      avatar:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/376827570_635964728638325_4651782039819255769_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=596444&_nc_ohc=rScaDcVNndYAX8KH_Qe&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfCTZugEOAAQ2Qy73O5I4AqtGCcIyGvgsrMLYSRVumvjwg&oe=65722F87",
    },
    {
      id: 3,
      name: "Cau lac bo cau long",
      fb: "https://www.facebook.com/khoacongnghethongtinGDU",
      zalo: "",
      discord: "",
      otherLink: "",
      avatar:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/376827570_635964728638325_4651782039819255769_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=596444&_nc_ohc=rScaDcVNndYAX8KH_Qe&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfCTZugEOAAQ2Qy73O5I4AqtGCcIyGvgsrMLYSRVumvjwg&oe=65722F87",
    },
    {
      id: 3,
      name: "Cau lac bo cau long",
      fb: "https://www.facebook.com/khoacongnghethongtinGDU",
      zalo: "",
      discord: "",
      otherLink: "",
      avatar:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/376827570_635964728638325_4651782039819255769_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=596444&_nc_ohc=rScaDcVNndYAX8KH_Qe&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfCTZugEOAAQ2Qy73O5I4AqtGCcIyGvgsrMLYSRVumvjwg&oe=65722F87",
    },
    {
      id: 3,
      name: "Cau lac bo cau long",
      fb: "https://www.facebook.com/khoacongnghethongtinGDU",
      zalo: "",
      discord: "",
      otherLink: "",
      avatar:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/376827570_635964728638325_4651782039819255769_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=596444&_nc_ohc=rScaDcVNndYAX8KH_Qe&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfCTZugEOAAQ2Qy73O5I4AqtGCcIyGvgsrMLYSRVumvjwg&oe=65722F87",
    },
    {
      id: 3,
      name: "Cau lac bo cau long",
      fb: "https://www.facebook.com/khoacongnghethongtinGDU",
      zalo: "",
      discord: "",
      otherLink: "",
      avatar:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/376827570_635964728638325_4651782039819255769_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=596444&_nc_ohc=rScaDcVNndYAX8KH_Qe&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfCTZugEOAAQ2Qy73O5I4AqtGCcIyGvgsrMLYSRVumvjwg&oe=65722F87",
    },
  ];

  return (
    <div className="ml-5 h-[90vh] rounded-lg  pr-5 overflow-scroll shadow-lg lg:block hidden clb-box">
      {data.map((group) => (
        <div key={group.id}>
          <Link to={"/group/" + group.id}>
            <div
              className="flex rounded-lg my-3"
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
