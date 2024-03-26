import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Shop = () => {
  // const data = {
  //   success: true,
  //   data: [
  //     {
  //       _id: "65e48c3348ef7b328d9304e5",
  //       title: "hello",
  //       content: "hilajfka",
  //       price: 600000,
  //       images: [],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-03T14:38:17.404Z",
  //       updatedAt: "2024-03-03T14:38:17.404Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65eb15f91e1030af78cbd7d9",
  //       title: "hello",
  //       content: "hilajfka",
  //       price: 600000,
  //       images: [],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-08T13:42:26.982Z",
  //       updatedAt: "2024-03-08T13:42:26.982Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65eb185f3a5bc95a91e53d46",
  //       title:
  //         "Iphone 15 promax aljgkajlgkj jlakjf aljfka lajfkla lajflajfl alsakjflak",
  //       content: "new iphone",
  //       price: 12000,
  //       images: [
  //         "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/cofiysj7w4qemn76r4ki.png",
  //         "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/sadk19jjz0r1rfq7d6zf.png",
  //       ],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-08T13:53:27.272Z",
  //       updatedAt: "2024-03-08T13:53:27.272Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65e48c3348ef7b328d9304e5",
  //       title: "hello",
  //       content: "hilajfka",
  //       price: 600000,
  //       images: [],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-03T14:38:17.404Z",
  //       updatedAt: "2024-03-03T14:38:17.404Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65eb15f91e1030af78cbd7d9",
  //       title: "hello",
  //       content: "hilajfka",
  //       price: 600000,
  //       images: [],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-08T13:42:26.982Z",
  //       updatedAt: "2024-03-08T13:42:26.982Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65eb185f3a5bc95a91e53d46",
  //       title:
  //         "Iphone 15 promax aljgkajlgkj jlakjf aljfka lajfkla lajflajfl alsakjflak",
  //       content: "new iphone",
  //       price: 12000,
  //       images: [
  //         "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/cofiysj7w4qemn76r4ki.png",
  //         "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/sadk19jjz0r1rfq7d6zf.png",
  //       ],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-08T13:53:27.272Z",
  //       updatedAt: "2024-03-08T13:53:27.272Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65e48c3348ef7b328d9304e5",
  //       title: "hello",
  //       content: "hilajfka",
  //       price: 600000,
  //       images: [],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-03T14:38:17.404Z",
  //       updatedAt: "2024-03-03T14:38:17.404Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65eb15f91e1030af78cbd7d9",
  //       title: "hello",
  //       content: "hilajfka",
  //       price: 600000,
  //       images: [],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-08T13:42:26.982Z",
  //       updatedAt: "2024-03-08T13:42:26.982Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65eb185f3a5bc95a91e53d46",
  //       title:
  //         "Iphone 15 promax aljgkajlgkj jlakjf aljfka lajfkla lajflajfl alsakjflak",
  //       content: "new iphone",
  //       price: 12000,
  //       images: [
  //         "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/cofiysj7w4qemn76r4ki.png",
  //         "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/sadk19jjz0r1rfq7d6zf.png",
  //       ],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-08T13:53:27.272Z",
  //       updatedAt: "2024-03-08T13:53:27.272Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65e48c3348ef7b328d9304e5",
  //       title: "hello",
  //       content: "hilajfka",
  //       price: 600000,
  //       images: [],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-03T14:38:17.404Z",
  //       updatedAt: "2024-03-03T14:38:17.404Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65eb15f91e1030af78cbd7d9",
  //       title: "hello",
  //       content: "hilajfka",
  //       price: 600000,
  //       images: [],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-08T13:42:26.982Z",
  //       updatedAt: "2024-03-08T13:42:26.982Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65eb185f3a5bc95a91e53d46",
  //       title:
  //         "Iphone 15 promax aljgkajlgkj jlakjf aljfka lajfkla lajflajfl alsakjflak alkjf akjfa akjf jakfj ajfk akjfak akjfka akjf jafk hihi",
  //       content: "new iphone",
  //       price: 12000,
  //       images: [
  //         "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/cofiysj7w4qemn76r4ki.png",
  //         "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/sadk19jjz0r1rfq7d6zf.png",
  //       ],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-08T13:53:27.272Z",
  //       updatedAt: "2024-03-08T13:53:27.272Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65e48c3348ef7b328d9304e5",
  //       title: "hello",
  //       content: "hilajfka",
  //       price: 600000,
  //       images: [],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-03T14:38:17.404Z",
  //       updatedAt: "2024-03-03T14:38:17.404Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65eb15f91e1030af78cbd7d9",
  //       title: "hello",
  //       content: "hilajfka",
  //       price: 600000,
  //       images: [],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-08T13:42:26.982Z",
  //       updatedAt: "2024-03-08T13:42:26.982Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "65eb185f3a5bc95a91e53d46",
  //       title:
  //         "Iphone 15 promax aljgkajlgkj jlakjf aljfka lajfkla lajflajfl alsakjflak",
  //       content: "new iphone",
  //       price: 12000,
  //       images: [
  //         "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/cofiysj7w4qemn76r4ki.png",
  //         "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/sadk19jjz0r1rfq7d6zf.png",
  //       ],
  //       fbUrl: "facebook.com",
  //       userIdRegister: 1,
  //       isDelete: false,
  //       createdAt: "2024-03-08T13:53:27.272Z",
  //       updatedAt: "2024-03-08T13:53:27.272Z",
  //       __v: 0,
  //     },
  //   ],
  // };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/shop/product")
      .then(response => response.json())
      .then((data) => {
        setData(data);
        console.log(data)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [])

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
    <div class="flex items-center w-full justify-center">
      <div className="2xl:max-w-[1140px]">
        <div className="w-full h-[100px] text-center bg-red-400">
        Thêm sản phẩm
        </div>
        <div className="flex w-full justify-evenly flex-wrap py-10 gap-5">
          {data &&
            data.map((post) => {
              return (
                <Link to={`/shop/${post._id}`}>
                  <div class="max-w-xl mx-auto w-[300px] shadow rounded-lg overflow-hidden">
                    <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <div className="w-[300px] h-[370px] object-cover">
                          <img
                            class="rounded-t-lg p-8"
                            src={
                              post.images[0] ||
                              "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                            }
                            alt="product"
                            className="w-full h-full object-fit"
                          />
                        </div>
                      </a>
                      <div class="px-5 pb-5">
                        <div className="h-[30px] overflow-hidden w-[275px]">
                          <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                            {post.title}
                          </h3>
                        </div>
                        <div class="flex items-center mt-2.5 mb-5">
                          <svg
                            class="w-5 h-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            class="w-5 h-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            class="w-5 h-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            class="w-5 h-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            class="w-5 h-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                           {post.ratingCount}
                          </span>
                        </div>
                        <div class="flex items-center justify-between">
                          <NumberFormatter number={post.price} />
                          <span className="text-white text-[18px]">Vnd</span>
                          <a
                            href="#"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        {/* <div>Shop</div> */}
      </div>
    </div>
  );
};

export default Shop;
