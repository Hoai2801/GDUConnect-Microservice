import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toast from "../components/Toast";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const Room = () => {
  const token = Cookies.get("token");
  const jwt = token ? jwtDecode(token) : "";

  const [title, setTitle] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [facebook, setFacebook] = useState("");

  const [isShowModal, setShowModal] = useState(false);

  const [districtAPI, setDistrictAPI] = useState([]);

  const [wardAPI, setWardAPI] = useState([]);

  // State to hold image previews
  const [imagePreviews, setImagePreviews] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const [showToast, setShowToast] = useState(false);
  const [contentToast, setContentToast] = useState("Đăng bài thất baị");

  const [data, setData] = useState(null);
  // const data = [
  //   {
  //     id: 4,
  //     userId: 1,
  //     title: "Phong tro Go Vap",
  //     district: "Go Vap",
  //     ward: "3",
  //     street: "Nguyen Kiem",
  //     area: 5,
  //     price: 5000000,
  //     description:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  //     createdAt: "2024-02-26",
  //     images: [],
  //   },
  //   {
  //     id: 5,
  //     userId: 1,
  //     title: "Phong tro Go Vap",
  //     district: "Go Vap",
  //     ward: "3",
  //     street: "Nguyen Kiem",
  //     area: 5,
  //     price: 5000000,
  //     description:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  //     createdAt: "2024-02-26",
  //     images: [
  //       {
  //         id: 1,
  //         imageURL:
  //           "https://images.unsplash.com/photo-1682687218904-de46ed992b58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     userId: 1,
  //     title: "Phong tro Go Vap",
  //     district: "Go Vap",
  //     ward: "3",
  //     street: "Nguyen Kiem",
  //     area: 5,
  //     price: 5000000,
  //     description:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  //     createdAt: "2024-02-26",
  //     images: [],
  //   },
  //   {
  //     id: 7,
  //     userId: 1,
  //     title: "Phong tro Go Vap",
  //     district: "Go Vap",
  //     ward: "3",
  //     street: "Nguyen Kiem",
  //     area: 5,
  //     price: 5000000,
  //     description:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  //     createdAt: "2024-02-26",
  //     images: [],
  //   },
  //   {
  //     id: 8,
  //     userId: 1,
  //     title:
  //       "Phong tro Go Vap lajk gjlak jg lkjal kjgl aj gkljaljakf a lajglka aljgla lajglkajg lajglaj lajglka lajgla",
  //     district: "Go Vap",
  //     ward: "3",
  //     street: "Nguyen Kiem",
  //     area: 5,
  //     price: 5000000,
  //     description:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. loremThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  //     createdAt: "2024-02-26",
  //     images: [
  //       {
  //         id: 2,
  //         imageURL:
  //           "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvb218ZW58MHx8MHx8fDA%3D",
  //       },
  //     ],
  //   },
  // ];

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/room")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get("https://vapi.vnappmob.com/api/province/district/79")
      .then((response) => {
        setDistrictAPI(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching districts:", error);
      });
  }, []);

  const handleDistrictChange = (event) => {
    // console.log("reset" + district + " with " + event.target.value);
    const parts = event.target.value.split(",");
    const districtId = parts[0];
    setDistrict(parts[1]);
    setWard(""); // Reset selected ward
    if (districtId) {
      // Fetch wards for the selected district
      axios
        .get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
        .then((response) => {
          setWardAPI(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching wards:", error);
        });
    } else {
      // If no district is selected, clear wards
      setWard([]);
    }
  };

  const createNewRoom = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (
      title === "" ||
      district === "" ||
      ward === "" ||
      street === "" ||
      area === "" ||
      price === "" ||
      description === ""
    ) {
      setContentToast("Vui lòng nhập đầy đủ thông tin");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return;
    }
    if (phoneNumber.length < 10) {
      setContentToast("Số điện thoại không hợp lệ");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return;
    }
    const data = new FormData();
    data.append("userId", jwt.id);
    data.append("title", title);
    data.append("district", district);
    data.append("ward", ward);
    data.append("street", street);
    data.append("area", area);
    data.append("price", price);
    data.append("description", description);
    data.append("phoneNumber", phoneNumber);
    data.append("facebook", facebook);

    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        data.append("image", file);
      });
    }

    const response = await axios
      .post("http://localhost:8080/api/v1/room", data, config)
      .catch((error) => {
        console.log(error);
      });

    if (response?.status === 200) {
      setContentToast("Đăng bài thanh cong");
      setTitle("");
      setDistrict("");
      setWard("");
      setStreet("");
      setArea("");
      setPrice("");
      setDescription("");
      setImagePreviews([]);
      setSelectedFiles([]);
      setPhoneNumber("");
      setFacebook("");
    }

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Create image previews for selected files
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);

    setSelectedFiles(files);
  };

  const handleWardChange = (event) => {
    setWard(event.target.value);
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
    <div className="flex h-screen w-full flex-col items-center pb-[100px] pl-[20px] pt-5">
      <div className="mb-5 flex w-full justify-center">
        <button
          className={`rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-700 ${
            isShowModal ? "hidden" : "block"
          }`}
          onClick={() => setShowModal(true)}
        >
          Tạo bài đăng
        </button>
        <div
          className={`${
            isShowModal ? "fixed" : "hidden"
          } top-5 my-[80px] h-[80vh] w-[800px] overflow-scroll rounded-lg border bg-white p-10 shadow-lg`}
        >
          <div>
            <button
              onClick={() => setShowModal(false)}
              className="float-right h-10 w-10 rounded-lg border p-2 shadow-2xl"
            >
              X
            </button>
          </div>
          <div className="mb-2 mt-3">
            <label className="block text-lg font-semibold text-gray-700">
              Tiêu đề
            </label>
            <input
              className="focus:border-blue500 mt-2 w-full bg-gray-200 px-4 py-3 ring-1 transition duration-300 focus:bg-white"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="mb-2 mt-3">
            <CKEditor
              // Bảng ckeditor cơ bản
              editor={ClassicEditor}
              // như textholder
              data={description}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              // khi user nhập nội dung
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
              // khi user click chuột ra ngoài
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              // khi user click chuột vào ckeditor
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
          <div className="mb-2 mt-3">
            <label className="block font-semibold text-gray-700">Giá</label>
            <input
              className="mt-2 w-full bg-gray-200 px-4 py-3 ring-1 transition duration-300 focus:border-blue-500 focus:bg-white"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div className="mb-2 mt-3">
            <label className="block font-semibold text-gray-700">
              Chọn quận
            </label>
            <select
              onChange={handleDistrictChange}
              className="mt-2 w-full bg-gray-200 px-4 py-3 ring-1"
            >
              <option value="" className="block text-gray-700">
                Chọn quận
              </option>
              {districtAPI.map((district) => (
                <option
                  key={district.district_id}
                  value={[district.district_id, district.district_name]}
                >
                  {district.district_name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2 mt-3">
            <label className="block font-semibold text-gray-700">
              Chọn phường
            </label>

            {/* Ward Dropdown */}
            <select
              value={ward}
              onChange={handleWardChange}
              className="mt-2 w-full bg-gray-200 px-4 py-3 ring-1"
            >
              <option value="">Chọn phường</option>
              {wardAPI.map((ward) => (
                <option key={ward.ward_id} value={ward.ward_name}>
                  {ward.ward_name}
                </option>
              ))}
            </select>

            <div className="mb-2 mt-3">
              <label className="block font-semibold text-gray-700">Đường</label>
              <input
                className="mt-2 w-full bg-gray-200 py-3 pl-4 pr-12 ring-1 transition duration-300 focus:border-blue-500 focus:bg-white"
                required
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mb-2 mt-3">
            <label className="block font-semibold text-gray-700">
              Diện tích phòng
            </label>
            <input
              className="mt-2 w-full bg-gray-200 py-3 pl-4 pr-12 ring-1 transition duration-300 focus:border-blue-500 focus:bg-white"
              required
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            ></input>
          </div>
          <div className="mb-2 mt-3">
            <label className="block font-semibold text-gray-700">
              Liên lạc bằng số điện thoại
            </label>
            <input
              className="mt-2 w-full bg-gray-200 py-3 pl-4 pr-12 ring-1 transition duration-300 focus:border-blue-500 focus:bg-white"
              required
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <div className="mb-2 mt-3">
            <label className="block font-semibold text-gray-700">
              Liên lạc bằng facebook
            </label>
            <input
              className="mt-2 w-full bg-gray-200 py-3 pl-4 pr-12 ring-1 transition duration-300 focus:border-blue-500 focus:bg-white"
              required
              type="text"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            ></input>
          </div>

          <div>
            <div
              className="btn-cp my-10 flex w-full justify-center gap-5 px-1"
              style={{ marginLeft: "10px", flexShrink: "0" }}
            >
              <input
                type="file"
                onChange={handleFileChange}
                id="actual-btn"
                hidden
                multiple
              />
              <label
                htmlFor="actual-btn"
                className="h-[35px] w-[40%] rounded-lg border py-2 text-center hover:cursor-pointer"
              >
                Thêm ảnh
              </label>
            </div>
            {/* Display image previews */}
            <div className="flex w-[360px] flex-wrap gap-2">
              {imagePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview ${index}`}
                  className="mt-2 h-16 w-16 rounded-md object-cover"
                />
              ))}
            </div>
            <button
              className="mt-5 w-full rounded-lg bg-sky-600 py-4 text-[16px] text-white hover:bg-sky-500"
              onClick={() => createNewRoom()}
            >
              Đăng bài
            </button>
          </div>
        </div>
      </div>
      {showToast ? <Toast content={contentToast} /> : null}
      <div className="flex w-[800px] flex-col gap-5">
        {data ? (
          data.map((data) => (
            <Link to={`/room/${data.id}`} key={data.id}>
              <div
                key={data.id}
                className="flex rounded-lg bg-slate-50 p-4 shadow"
              >
                <div className="max-h-[150px] min-w-[250px] max-w-[250px] overflow-hidden rounded-lg p-0">
                  <img
                    src={
                      data.image.length > 0
                        ? data.image[0].imageURL
                        : "https://t3.ftcdn.net/jpg/05/62/05/20/360_F_562052065_yk3KPuruq10oyfeu5jniLTS4I2ky3bYX.jpg"
                    }
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-5 pt-2">
                  <div className="h-[30px] overflow-hidden text-ellipsis">
                    <h2 className="text-2xl font-semibold">{data.title}</h2>
                  </div>
                  <div className="h-[50px]">
                    <div
                      dangerouslySetInnerHTML={{ __html: data.description }}
                      className="max-h-[50px] overflow-hidden overflow-ellipsis"
                    ></div>
                  </div>
                  <NumberFormatter number={data.price} /> vnđ/tháng
                  <div className="flex justify-between">
                    <p className="justify-end">
                      {data.area} m² - Quận {data.district}
                    </p>
                    <div className="flex items-end justify-end">
                      <p className="">{data.created_at}</p>
                    </div>
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
