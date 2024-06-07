import React from "react";
import { Link } from "react-router-dom";
const Shop = () => {
  const data = {
    success: true,
    data: [
      {
        _id: "65e48c3348ef7b328d9304e5",
        title: "The Catcher in the Rye",
        content: "hilajfka",
        price: 280000,
        images: ["https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"],
        fbUrl: "facebook.com",
        userIdRegister: 1,
        isDelete: false,
        createdAt: "2024-03-03T14:38:17.404Z",
        updatedAt: "2024-03-03T14:38:17.404Z",
        __v: 0,
      },
      // {
      //   _id: "65eb15f91e1030af78cbd7d9",
      //   title: "hello",
      //   content: "hilajfka",
      //   price: 600000,
      //   images: [],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-08T13:42:26.982Z",
      //   updatedAt: "2024-03-08T13:42:26.982Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65eb185f3a5bc95a91e53d46",
      //   title:
      //     "Iphone 15 promax aljgkajlgkj jlakjf aljfka lajfkla lajflajfl alsakjflak",
      //   content: "new iphone",
      //   price: 12000,
      //   images: [
      //     "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/cofiysj7w4qemn76r4ki.png",
      //     "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/sadk19jjz0r1rfq7d6zf.png",
      //   ],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-08T13:53:27.272Z",
      //   updatedAt: "2024-03-08T13:53:27.272Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65e48c3348ef7b328d9304e5",
      //   title: "hello",
      //   content: "hilajfka",
      //   price: 600000,
      //   images: [],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-03T14:38:17.404Z",
      //   updatedAt: "2024-03-03T14:38:17.404Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65eb15f91e1030af78cbd7d9",
      //   title: "hello",
      //   content: "hilajfka",
      //   price: 600000,
      //   images: [],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-08T13:42:26.982Z",
      //   updatedAt: "2024-03-08T13:42:26.982Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65eb185f3a5bc95a91e53d46",
      //   title:
      //     "Iphone 15 promax aljgkajlgkj jlakjf aljfka lajfkla lajflajfl alsakjflak",
      //   content: "new iphone",
      //   price: 12000,
      //   images: [
      //     "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/cofiysj7w4qemn76r4ki.png",
      //     "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/sadk19jjz0r1rfq7d6zf.png",
      //   ],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-08T13:53:27.272Z",
      //   updatedAt: "2024-03-08T13:53:27.272Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65e48c3348ef7b328d9304e5",
      //   title: "hello",
      //   content: "hilajfka",
      //   price: 600000,
      //   images: [],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-03T14:38:17.404Z",
      //   updatedAt: "2024-03-03T14:38:17.404Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65eb15f91e1030af78cbd7d9",
      //   title: "hello",
      //   content: "hilajfka",
      //   price: 600000,
      //   images: [],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-08T13:42:26.982Z",
      //   updatedAt: "2024-03-08T13:42:26.982Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65eb185f3a5bc95a91e53d46",
      //   title:
      //     "Iphone 15 promax aljgkajlgkj jlakjf aljfka lajfkla lajflajfl alsakjflak",
      //   content: "new iphone",
      //   price: 12000,
      //   images: [
      //     "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/cofiysj7w4qemn76r4ki.png",
      //     "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/sadk19jjz0r1rfq7d6zf.png",
      //   ],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-08T13:53:27.272Z",
      //   updatedAt: "2024-03-08T13:53:27.272Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65e48c3348ef7b328d9304e5",
      //   title: "hello",
      //   content: "hilajfka",
      //   price: 600000,
      //   images: [],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-03T14:38:17.404Z",
      //   updatedAt: "2024-03-03T14:38:17.404Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65eb15f91e1030af78cbd7d9",
      //   title: "hello",
      //   content: "hilajfka",
      //   price: 600000,
      //   images: [],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-08T13:42:26.982Z",
      //   updatedAt: "2024-03-08T13:42:26.982Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65eb185f3a5bc95a91e53d46",
      //   title:
      //     "Iphone 15 promax aljgkajlgkj jlakjf aljfka lajfkla lajflajfl alsakjflak alkjf akjfa akjf jakfj ajfk akjfak akjfka akjf jafk hihi",
      //   content: "new iphone",
      //   price: 12000,
      //   images: [
      //     "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/cofiysj7w4qemn76r4ki.png",
      //     "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/sadk19jjz0r1rfq7d6zf.png",
      //   ],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-08T13:53:27.272Z",
      //   updatedAt: "2024-03-08T13:53:27.272Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65e48c3348ef7b328d9304e5",
      //   title: "hello",
      //   content: "hilajfka",
      //   price: 600000,
      //   images: [],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-03T14:38:17.404Z",
      //   updatedAt: "2024-03-03T14:38:17.404Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65eb15f91e1030af78cbd7d9",
      //   title: "hello",
      //   content: "hilajfka",
      //   price: 600000,
      //   images: [],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-08T13:42:26.982Z",
      //   updatedAt: "2024-03-08T13:42:26.982Z",
      //   __v: 0,
      // },
      // {
      //   _id: "65eb185f3a5bc95a91e53d46",
      //   title:
      //     "Iphone 15 promax aljgkajlgkj jlakjf aljfka lajfkla lajflajfl alsakjflak",
      //   content: "new iphone",
      //   price: 12000,
      //   images: [
      //     "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/cofiysj7w4qemn76r4ki.png",
      //     "https://res.cloudinary.com/dqqkpgega/image/upload/v1709906014/product-images/sadk19jjz0r1rfq7d6zf.png",
      //   ],
      //   fbUrl: "facebook.com",
      //   userIdRegister: 1,
      //   isDelete: false,
      //   createdAt: "2024-03-08T13:53:27.272Z",
      //   updatedAt: "2024-03-08T13:53:27.272Z",
      //   __v: 0,
      // },
    ],
  };

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/v1/shop/product")
  //     .then(response => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data)
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, [])

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
    <div class="flex w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center py-10 2xl:max-w-[1140px]">
        <button className="flex max-w-3xl items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-center font-bold text-white transition duration-300 hover:bg-blue-700">
          Thêm sản phẩm
        </button>
        <div className="flex w-full flex-wrap justify-evenly gap-5 py-10">
          {data &&
            data.data.map((post) => {
              return (
                <Link to={`/shop/${post._id}`}>
                  <div class="mx-auto w-[300px] max-w-xl overflow-hidden rounded-lg shadow">
                    <div class="max-w-sm rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                      <a href="#">
                        <div className="h-[370px] w-[300px] object-cover">
                          <img
                            class="rounded-t-lg p-8"
                            src={
                              post.images[0] ||
                              "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                            }
                            alt="product"
                            className="object-fit h-full w-full"
                          />
                        </div>
                      </a>
                      <div class="px-5 pb-5">
                        <div className="h-[30px] w-[275px] overflow-hidden">
                          <h3 class="pt-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {post.title}
                          </h3>
                        </div>
                        <div class="mb-5 mt-2.5 flex items-center">
                          <svg
                            class="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            class="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            class="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            class="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            class="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <span class="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                            {post.ratingCount}
                          </span>
                        </div>
                        <div class="flex items-center justify-between">
                          <NumberFormatter number={post.price} />
                          <span className="text-[18px] text-white">VND</span>
                          <a
                            href="#"
                            class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
