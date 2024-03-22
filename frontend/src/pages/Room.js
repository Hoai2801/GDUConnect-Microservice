import React, { useState } from "react";
import { Link } from "react-router-dom";
const Room = () => {

  const [title, setTitle] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [isShowModal, setShowModal] = useState(false);

  // State to hold image previews
  const [imagePreviews, setImagePreviews] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState([]);


  // const [data, setData] = useState([]);
  const data = [
    {
      id: 4,
      userId: 1,
      title: "Phong tro Go Vap",
      district: "Go Vap",
      ward: "3",
      street: "Nguyen Kiem",
      area: 5,
      price: 5000000,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      createdAt: "2024-02-26",
      images: [],
    },
    {
      id: 5,
      userId: 1,
      title: "Phong tro Go Vap",
      district: "Go Vap",
      ward: "3",
      street: "Nguyen Kiem",
      area: 5,
      price: 5000000,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      createdAt: "2024-02-26",
      images: [
        {
          id: 1,
          imageURL:
            "https://images.unsplash.com/photo-1682687218904-de46ed992b58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      id: 6,
      userId: 1,
      title: "Phong tro Go Vap",
      district: "Go Vap",
      ward: "3",
      street: "Nguyen Kiem",
      area: 5,
      price: 5000000,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      createdAt: "2024-02-26",
      images: [],
    },
    {
      id: 7,
      userId: 1,
      title: "Phong tro Go Vap",
      district: "Go Vap",
      ward: "3",
      street: "Nguyen Kiem",
      area: 5,
      price: 5000000,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      createdAt: "2024-02-26",
      images: [],
    },
    {
      id: 8,
      userId: 1,
      title:
        "Phong tro Go Vap lajk gjlak jg lkjal kjgl aj gkljaljakf a lajglka aljgla lajglkajg lajglaj lajglka lajgla",
      district: "Go Vap",
      ward: "3",
      street: "Nguyen Kiem",
      area: 5,
      price: 5000000,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. loremThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      createdAt: "2024-02-26",
      images: [
        {
          id: 2,
          imageURL:
            "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvb218ZW58MHx8MHx8fDA%3D",
        },
      ],
    },
  ];

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/v1/room")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Create image previews for selected files
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);

    setSelectedFiles(files);
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

  return (
    <div className="flex flex-col w-full pl-[20px] pt-5 pb-[100px]">
      <div className="flex justify-center w-full">
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isShowModal ? "hidden" : "block"}`} onClick={() => setShowModal(true)}>
          Tạo bài đăng
        </button>
        <div className={`${isShowModal ? "block" : "hidden"}`}>
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue500 focus:bg-white transition duration-300"
              required

            ></input>
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <input
              className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue500 focus:bg-white transition duration-300"
              required

            ></input>
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input
              className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue-500 focus:bg-white transition duration-300"
              required

            ></input>
          </div>
          <div>
            <label className="block text-gray-700">Area</label>
            <input
              className="w-full pl-4 pr-12 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue-500 focus:bg-white transition duration-300"
              required

            ></input>
          </div>

          <div>
            <div
              className="flex px-1 gap-5 w-full btn-cp justify-center my-10"
              style={{ marginLeft: "10px", flexShrink: "0" }}
            >
              <input
                type="file"
                onChange={handleFileChange}
                id="actual-btn"
                hidden
                multiple
              />
              <label htmlFor="actual-btn" className="hover:cursor-pointer h-[35px] border rounded-lg w-[40%] text-center py-2">
                Thêm ảnh
              </label>

            </div>
            {/* Display image previews */}
            <div className="flex gap-2 w-[360px] flex-wrap">
              {imagePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview ${index}`}
                  className="w-16 h-16 object-cover rounded-md mt-2"
                />
              ))}
            </div>
            <button className="w-full bg-sky-600 hover:bg-sky-500 text-white py-4 text-[16px] mt-5 rounded-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {data ? (
          data.map((data) => (
            <Link to={`/room/${data.id}`}>
              <div key={data.id} className="flex h-[150px] w-[800px] rounded-lg">
                <div className="min-w-[250px] max-w-[250px] p-0 max-h-[150px] overflow-hidden rounded-lg">
                  <img
                    src={
                      data?.images?.[0]?.imageURL ||
                      "https://t3.ftcdn.net/jpg/05/62/05/20/360_F_562052065_yk3KPuruq10oyfeu5jniLTS4I2ky3bYX.jpg"
                    }
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="px-5 pt-2">
                  <div className="overflow-hidden text-ellipsis h-[30px]">
                    <h2 className="text-2xl font-semibold">{data.title}</h2>
                  </div>
                  <div className="h-[50px]">
                    <p className="overflow-ellipsis overflow-hidden max-h-[50px]">
                      {data.description}
                    </p>
                  </div>
                  <NumberFormatter number={data.price} /> vnđ/tháng
                  <p>
                    {data.area} m² - Quận {data.district}
                  </p>
                  <div className="flex justify-end items-end">
                    <p className="">{data.createdAt}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Room;
