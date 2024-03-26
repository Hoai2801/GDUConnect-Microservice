import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "../components/Toast";
const RoomDetail = () => {
  const [index, setIndex] = useState(0);

  const token = Cookies.get("token") 
  const jwt = jwtDecode(token);

  const navigate = useNavigate();


  const [isDetailImagesOpen, setDetailImagesOpen] = useState(false);

  function nextImage() {
    setIndex((currentIndex) =>
      currentIndex === data.image.length - 1 ? 0 : currentIndex + 1
    );
  }

  function previousImage() {
    setIndex((i) => (i === 0 ? data.image.length - 1 : i - 1));
  }

  function togglePopUpImage() {
    setDetailImagesOpen(!isDetailImagesOpen);
  }
  const [data, setData] = useState(null);
  const { id } = useParams();

  const [showToast, setShowToast] = useState(false);
  const [contentToast, setContentToast] = useState("Xóa bài đăng thành công");
  // const data = {
  //   id: null,
  //   user: {
  //     id: 1,
  //     fullname: "Hoai",
  //     avatar:
  //       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  //     department: "CNTT",
  //   },
  //   title: "Phòng trọ gần trường cần tìm bạn cùng phòng",
  //   district: "Gò Vấp",
  //   ward: "3",
  //   street: "Nguyễn Kiệm ",
  //   area: 5,
  //   price: 4999000,
  //   description: `Phòng dạng KTX Nam trống 1 giường tầng nha. Phòng như 1 căn hộ mini, đầy đủ nội thất thiết yếu. Phòng rất  rộng và thoải mái không giống như mấy khu phòng KTX khác,
  //   - Có sẵn bàn học riêng cho từng người, có tủ quần áo riêng, có khu bàn ghế tiếp khách, khu bếp nấu ăn, tủ lạnh riêng trong phòng, máy lạnh, Toilet riêng, máy giặt ngay ngoài cửa phòng. Ban công, cửa sổ siêu rộng, thoáng mát.
  //   - Chỉ dành cho Nam.
  //   - Giờ giấc tự do, lối đi lên phòng riêng biệt, để xe bên dưới nhà.
  //   - Hiện còn trống 1 giường`,
  //   facebook: "facebook.com",
  //   phoneNumber: "0353056313",
  //   image: [
  //     {
  //       id: 1,
  //       imageURL:
  //         "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  //     },
  //     // {
  //     //   id: 2,
  //     //   imageURL:
  //     //     "http://res.cloudinary.com/dqqkpgega/image/upload/v1709108128/7030baa6-5ead-490e-9c9d-834e9616e296.png",
  //     // },
  //   ],
  //   created_at: "2024-02-28",
  // };

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/room/" + id)
      .then(response => response.json())
      .then((data) => {
        setData(data);
        console.log(data)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });

  }, [id]);

  const deletePost = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(
      "http://localhost:8080/api/v1/room/" + data.id + "?user_id=" + jwt.id,
      config
    ).catch((error) => {
      console.log(error)
    });

    // if (response) {
    //   console.log(response);
    // }

    if (response?.status === 200) {
      setShowToast(true);
      setTimeout(() => {
        navigate("/room");
      }, 3000)

    }
  };

  function NumberFormatter({ number }) {
    // Use Intl.NumberFormat for accurate formatting
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    const formattedNumber = formatter.format(number);

    return <span className="text-xl text-red-400">{formattedNumber}</span>;
  }

  // console.log(data.image.length);
  return (
    <>
      {data ?
        <div>
          {showToast ? <Toast showToast={showToast} content={contentToast} /> : null}
          <div className="flex py-10 justify-center mx-auto max-w-[936px] flex-col lg:flex-row 2xl:max-w-[1140px]">
            <div className="ml-4 w-[800px]">
              <div>
                <p className="text-[27px] font-semibold">{data.title}</p>
                <p className="text-[14px]">
                  Quận {data.district} - Phường {data.ward} - Đường {data.street}
                </p>
                <p className="text-[14px]">Ngày đăng: {data.created_at}</p>
              </div>
              <div className="flex mr-4 my-[25px] py-[14px] border-room">
                <div className="flex flex-col text-xl">
                  <p className="text-[14px]">Mức giá</p>
                  <NumberFormatter number={data.price} />
                  <p className="text-[14px]">vnđ/tháng</p>
                </div>
                <div className="ml-10">
                  <p className="text-[14px]">Diện tích</p>
                  <p className="text-[20px]">
                    {data.area} m<sup>2</sup>
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-[20px]">Thông tin mô tả</p>
                {/* <p className="mt-[7px] w-[80%]">{data.description}</p> */}
                <div dangerouslySetInnerHTML={{ __html: data.description }}>
                    
                </div>
                <p className="font-semibold text-[20px] mt-[35px] mb-[7px]">
                  Hình ảnh
                </p>
                <div className="flex gap-5">
                    
                {data.image.length > 0 ? (
                  data.image.map((image) => (
                    <img
                      key={image.id}
                      src={image.imageURL}
                      alt=""
                      className="max-w-[50vw] mb-[7px] rounded mr-4 cursor-pointer w-[150px] h-[150px]"
                      onClick={togglePopUpImage}
                    ></img>
                  ))
                ) : (
                  <p className="text-[14px]">Không có hình ảnh</p>
                )}
                </div>
              </div>
            </div>
            <div className="lg:min-w-[210px] lg:max-w-[210px] 2xl:min-w-[262px] 2xl:max-w-[262px] mx-[50px]">
              <div
                className="w-full ring-1 ring-gray-200 rounded p-[14px]"
                align="center"
              >
                <img
                  className="h-[56px] w-[56px] object-cover"
                  src={data.user.avatar ? data.user.avatar : "https://inkythuatso.com/uploads/thumbnails/800/2023/03/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg"}
                  alt=""
                  style={{ clipPath: "circle()" }}
                ></img>
                <p className="mt-[7px] text-gray-500">Được đăng bởi</p>
                <p className="font-bold text-[20px]">{data.user.fullname}</p>
                <p>Khoa {data.user.department}</p>
                {data.phoneNumber && (
                  
                <div className="p-[14px] mt-[21px] bg-sky-400 rounded font-mono text-white font-bold text-[20px] ring-1">
                  {data.phoneNumber}
                </div>
                )}
                {data.facebook && (

                <a href={`${data.facebook}`}>
                  <div className="p-[14px] ring-1 rounded ring-gray-500 mt-[7px]">
                    Facebook
                  </div>
                </a>
                )}
              </div>
              <a href="/room">
                <div
                  className="bg-[#F2F2F2] p-[14px] mt-4 rounded cursor-pointer"
                  align="center"
                >
                  <p>Xem thêm phòng trọ</p>
                </div>
              </a>
              <div className="mt-4 flex justify-center">
                  
              { data.user.id === jwt.id ?

              <button onClick={() => deletePost()} className="bg-red-400 p-[14px] mt-4 rounded cursor-pointer w-full">Xóa bài</button>
              : ""
              }
              </div>
            </div>
          </div>
          <div
            className={`${isDetailImagesOpen ? "" : "hidden"} z-10 inset-0 fixed`}
          >
            <div className="z-20 h-screen w-full relative bg-[rgba(0,0,0,0.7)] flex justify-center items-center">
              <div
                className="absolute top-3 right-3 z-50 cursor-pointer"
                onClick={togglePopUpImage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 -960 960 960"
                  width="30"
                  className="fill-white"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </div>
              <img
                className="max-w-[80vw]"
                src={data.image.length > 0 ?data.image[index].imageURL : ""}
                alt=""
              />
              <div
                onClick={previousImage}
                className="group btn-img flex btn-img-left top-0 bottom-0 items-center justify-center w-[70px] duration-400 transition-all cursor-pointer hover:w-[60px] left-0 absolute"
              >
                {data.image.length > 1 ? (
                  <button className="bg-gray-400 group-hover:bg-white text-black p-2 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 -960 960 960"
                      width="30"
                    >
                      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                    </svg>
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div
                onClick={nextImage}
                className="btn-img flex btn-img-right absolute right-0 top-0 bottom-0  items-center justify-center w-[70px] transition-all duration-400 cursor-pointer hover:w-[60px] group"
              >
                {data.image.length > 1 ? (
                  <button className="bg-gray-400 group-hover:bg-white text-black p-2 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 -960 960 960"
                      width="30"
                    >
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        : <p>Loading...</p>}
    </>
  );
};

export default RoomDetail;
