import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomDetail = () => {
  const [data, setData] = useState([]);
  const {id} = useParams();
//   const mockData = {
//     "id": null,
//     "userId": {
//         "id": 1,
//         "fullname": "Hoai",
//         "avatar": null,
//         "department": "CNTT"
//     },
//     "title": "Phong tro Go Vap",
//     "district": "Go Vap",
//     "ward": "3",
//     "area": 5,
//     "price": 5000000,
//     "description": "LKJklfjalkjglkjalkgjaljglkajglkjaglkjgklajglkjalkgjlkajglkag",
//     "facebook": "facebook.com",
//     "phoneNumber": "0123456",
//     "image": [
//         {
//             "id": 1,
//             "imageURL": "http://res.cloudinary.com/dqqkpgega/image/upload/v1709108126/450bfa4a-77fe-42d7-a925-97641ab42ef0.png"
//         },
//         {
//             "id": 2,
//             "imageURL": "http://res.cloudinary.com/dqqkpgega/image/upload/v1709108128/7030baa6-5ead-490e-9c9d-834e9616e296.png"
//         }
//     ],
//     "created_at": "2024-02-28"
// }

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/room/" + id)
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  }, [id]);

  console.log(data)

  return (
    <div className="flex items-center flex-col">
      <div>{/* images */}</div>
      <div className="w-[800px]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">{data.title}</h2>
        </div>
        <div className="text-gray-400">
          <p className="text-xl text-red-400">
            {data.price} -{" "}
            <span className="text-black">
              {data.area} m<sup>2</sup>
            </span>
          </p>
          <p>
            Quận {data.district} - Phường {data.ward} - Đường {data.street}
          </p>
          <p className="">Ngày đăng: {data.createdAt}</p>
        </div>
        <div>
          <p className="font-semibold text-xl">Thông tin mô tả</p>
          <p>{data.description}</p>
        </div>
        <div>
            <p className="font-semibold text-xl">Liên hệ</p>
            <div>
            <a href={data.facebook} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
              <p>Số điện thoại: {data.phoneNumber}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
