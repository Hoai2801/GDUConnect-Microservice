import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomDetail = () => {
  const [data, setData] = useState([]);
  const {id} = useParams();
  // const data = {
  //   id: 8,
  //   userId: 1,
  //   title:
  //     "Phong tro Go Vap lajk gjlak jg lkjal kjgl aj gkljaljakf a lajglka aljgla lajglkajg lajglaj lajglka lajgla",
  //   district: "Go Vap",
  //   ward: "3",
  //   street: "Nguyen Kiem",
  //   area: 5,
  //   price: 5000000,
  //   description:
  //     "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. loremThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  //   createdAt: "2024-02-26",
  //   images: [
  //     {
  //       id: 2,
  //       imageURL:
  //         "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvb218ZW58MHx8MHx8fDA%3D",
  //     },
  //   ],
  // };

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
      </div>
    </div>
  );
};

export default RoomDetail;
