import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toast from "../components/Toast";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Room = () => {

  const token = Cookies.get("token");
  const jwt = token ? jwtDecode(token) : "";

  const [title, setTitle] = useState("");
  const [district, setDistrict] = useState("afadf");
  const [ward, setWard] = useState("afaf");
  const [street, setStreet] = useState("afaf");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [isShowModal, setShowModal] = useState(false);

  const [districtAPI, setDistrictAPI] = useState([]);


  const [wardAPI, setWardAPI] = useState([]);

  // State to hold image previews
  const [imagePreviews, setImagePreviews] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const [showToast, setShowToast] = useState(false);
  const [contentToast, setContentToast] = useState("Đăng bài thất baị")


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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios.get('https://vapi.vnappmob.com/api/province/district/79')
      .then(response => {
        setDistrictAPI(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching districts:', error);
      });
  }, []);

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    setDistrict(districtId);
    setWard(''); // Reset selected ward
    if (districtId) {
      // Fetch wards for the selected district
      axios.get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
        .then(response => {
          setWardAPI(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching wards:', error);
        });
    } else {
      // If no district is selected, clear wards
      setWard([]);
    }
  };

  const createNewRoom = async () => {
    // const data = {
    //   userId: jwt.id,
    //   title: title,
    //   district: district,
    //   ward: ward,
    //   street: street,
    //   area: area,
    //   price: price,
    //   description: description,
    //   image: selectedFiles.map((file) => file.name),
    //   phoneNumber: 1,
    //   facebook: 1,
    // }
    // fetch("http://localhost:8080/api/v1/room", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${jwt}`,
    //   },
    //   body: data,
    // })
    //   .then((response) => {
    //     response.json()
    //     if (response.status === 200) {
    //       setContentToast("Tạo phòng trọ thành công");

    //       setTitle("");
    //       setDistrict("");
    //       setWard("");
    //       setStreet("");
    //       setArea("");
    //       setPrice("");
    //       setDescription("");
    //       setImagePreviews([]);
    //       setSelectedFiles([]);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (title === "" || district === "" || ward === "" || street === "" || area === "" || price === "" || description === "") {
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

    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        data.append("file", file);
      });
    }

    const response = await axios.post(
      "http://localhost:8080/api/v1/room",
      data,
      config
    ).catch((error) => {
      console.log(error)
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
    }

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }

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
    <div className="flex flex-col w-full pl-[20px] pt-5 pb-[100px] items-center">
      <div className="flex justify-center w-full mb-5">
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isShowModal ? "hidden" : "block"}`} onClick={() => setShowModal(true)}>
          Tạo bài đăng
        </button>
        <div className={`${isShowModal ? "absolute" : "hidden"} bg-white rounded-lg shadow-lg w-[800px] p-10 border`}>
          <div>
              
          <button onClick={null} className="float-right border p-2 rounded-lg w-10 h-10 shadow-2xl">X</button>
          </div>
          <div className="mb-2 mt-3">
            <label className="block text-gray-700">Tiêu đề</label>
            <input
              className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue500 focus:bg-white transition duration-300"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="mb-2 mt-3">
            {/* <label className="block text-gray-700">Miêu tả</label>
            <input
              className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue500 focus:bg-white transition duration-300"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input> */}
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Nhập miêu tả căn phòng của bạn (ở ghép, tiện ích, yêu cầu...)</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDescription(data);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }

                />
          </div>
          <div className="mb-2 mt-3">
            <label className="block text-gray-700">Giá</label>
            <input
              className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue-500 focus:bg-white transition duration-300"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div className="mb-2 mt-3">
   
          <label className="block text-gray-700">Chọn quận</label>
          <select value={district} onChange={handleDistrictChange} className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1">

            <option value="" className="block text-gray-700">Chọn quận</option>
            {districtAPI.map(district => (
              <option key={district.district_id} value={district.district_id}>{district.district_name}</option>
            ))}
          </select>
          </div>
          <div className="mb-2 mt-3">

          <label className="block text-gray-700">Chọn phường</label>

          {/* Ward Dropdown */}
          <select value={ward} onChange={handleWardChange} className="w-full px-4 py-3 bg-gray-200 mt-2 ring-1">
            <option value="">Chọn phường</option>
            {wardAPI.map(ward => (
              <option key={ward.ward_id} value={ward.ward_id}>{ward.ward_name}</option>
            ))}
          </select>

          </div>
          <div className="mb-2 mt-3">
            <label className="block text-gray-700">Diện tích phòng</label>
            <input
              className="w-full pl-4 pr-12 py-3 bg-gray-200 mt-2 ring-1 focus:border-blue-500 focus:bg-white transition duration-300"
              required
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
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
            <button className="w-full bg-sky-600 hover:bg-sky-500 text-white py-4 text-[16px] mt-5 rounded-lg"
              onClick={() => createNewRoom()}>
              Đăng bài
            </button>
          </div>
        </div>
      </div>
      {
        showToast ? <Toast content={contentToast} /> : null
      }
      <div className="flex flex-col gap-5 w-[800px]">
        {data ? (
          data.map((data) => (
            <Link to={`/room/${data.id}`} key={data.id}>
              <div
                key={data.id}
                className="flex shadow rounded-lg bg-slate-50 p-4"
              >
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
                  <div className="flex justify-between">

                    <p className="justify-end">
                      {data.area} m² - Quận {data.district}
                    </p>
                    <div className="flex justify-end items-end">
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
