import axios from "axios";
import { format } from "date-fns";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShopDetail = () => {
  // const data = {
  //   id: 1,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   content:
  //     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   price: 109.95,
  //   images: [
  //     "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //   ],
  // };

  const [post, setData] = useState([]);
  const [rating, setRating] = useState([]);

  //rating
  const [contentRating, setContentRating] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const images = null;
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/shop/product/" + id)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:8080/api/v1/shop/rating/" + id)
      .then((res) => {
        setRating(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  let token = Cookies.get("token");
  let jwt = token ? jwtDecode(token) : "";

  // const handleRatingChange = (event) => {
  //   setRatingValue(event.target.value);
  // };
  const handleRatingSubmit = (event) => {
    const ratingData = {
      userId: jwt.id,
      productId: id,
      comment: contentRating,
      rating: ratingValue,
      images: images,
    };
    //bear token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:8080/api/v1/shop/rating", ratingData, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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

  useEffect(() => {
    fetchPost();
  }, [id]);

  async function fetchPost() {
    fetch("http://localhost:8080/api/v1/shop/product/" + id)
      .then((res) => res.json()) // Parse the response JSON
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("http://localhost:8080/api/v1/shop/rating/product/" + id)
      .then((res) => res.json()) // Parse the response JSON
      .then((rating) => {
        console.log(rating);
        setRating(rating);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // console.log(post ? post?.data._id : "no data")
  // console.log(post?.data ? post.data[0] ? post.data[0].images : "no image": "no data")

  return (
    <section class="body-font mx-4 overflow-hidden bg-white text-gray-700">
      {post.data && post.data[0] && (
        <img
          alt="ecommerce"
          class="w-full rounded border border-gray-200 object-cover object-center lg:w-1/2"
          src={post?.data?.images ? post?.data[0]?.images[0] : ""}
        />
      )}
      <div class="container mx-auto py-5 2xl:max-w-[1280px]">
        <div class="mx-auto flex flex-wrap lg:w-5/6 2xl:mx-0">
          <img
            alt="ecommerce"
            class="w-full rounded border border-gray-200 object-cover object-center lg:w-1/2"
            src={post?.data?.images[0]}
          />
          <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h2 class="title-font text-sm tracking-widest text-gray-500">
              J.D. Salinger
            </h2>
            <h1 class="title-font mb-1 text-3xl font-medium text-gray-900">
              {post?.data?.title}
            </h1>
            <div class="mb-4 flex">
              <span class="flex items-center">
                <svg
                  fill={rating?.data?.avgRating >= 1 ? "currentColor" : "none"}
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class={`h-4 w-4 text-red-500`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill={rating?.data?.avgRating >= 1 ? "currentColor" : "none"}
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill={rating?.data?.avgRating >= 1 ? "currentColor" : "none"}
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill={rating?.data?.avgRating >= 1 ? "currentColor" : "none"}
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill={rating?.data?.avgRating >= 1 ? "currentColor" : "none"}
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span class="ml-3 text-gray-600">
                  {rating?.data?.reviews?.length} Reviews
                </span>
              </span>
              <span class="ml-3 flex border-l-2 border-gray-200 py-2 pl-3">
                <a class="cursor-pointer text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-2 cursor-pointer text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-2 cursor-pointer text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post?.data?.content }}
              class="leading-relaxed"
            ></div>
            <div class="mb-5 mt-6 flex items-center border-b-2 border-gray-200 pb-5">
              <div class="flex">
                <span class="mr-3">Color</span>
                <button class="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-red-500 focus:outline-none"></button>
              </div>
              <div class="ml-6 flex items-center">
                <span class="mr-3">Size</span>
                <div class="relative">
                  <select class="cursor-pointer appearance-none rounded border border-gray-400 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span class="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex">
              <span class="title-font text-2xl font-medium text-gray-900">
                <NumberFormatter number={30000} />
              </span>
              <a
                href={"" + post?.data?.fbUrl}
                class="ml-auto flex rounded border-0 bg-red-500 px-6 py-2 text-white hover:bg-red-600 focus:outline-none"
              >
                Mua ngay
              </a>
              <button class="group relative ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full py-10 lg:w-5/6 2xl:mx-0">
          {/* <div class="flex items-center mb-2">
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              4.95
            </p>
            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              out of
            </p>
            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              5
            </p>
          </div> */}
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {rating?.data?.reviews?.length} Đánh giá
          </p>
          <div class="mt-4 flex items-center">
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              5 sao
            </a>
            <div class="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
              <div
                class={`h-5 rounded bg-yellow-300 w-[${
                  (post?.data?.totalStart5 / post?.data?.ratingCount) * 100
                }%]`}
              ></div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
              {(post?.data?.totalStart5 / post?.data?.ratingCount) * 100} %
            </span>
          </div>
          <div class="mt-4 flex items-center">
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              4 sao
            </a>
            <div class="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
              <div
                class={`h-5 rounded bg-yellow-300 w-[${
                  (post?.data?.totalStart4 / post?.data?.ratingCount) * 100
                }%]`}
              ></div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
              {(post?.data?.totalStart4 / post?.data?.ratingCount) * 100} %
            </span>
          </div>
          <div class="mt-4 flex items-center">
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              3 sao
            </a>
            <div class="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
              <div
                class={`h-5 rounded bg-yellow-300 w-[${
                  (post?.data?.totalStart3 / post?.data?.ratingCount) * 100
                }%]`}
              ></div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
              {(post?.data?.totalStart3 / post?.data?.ratingCount) * 100} %
            </span>
          </div>
          <div class="mt-4 flex items-center">
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              2 sao
            </a>
            <div class="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
              <div
                class={`h-5 rounded bg-yellow-300 w-[${
                  (post?.data?.totalStart2 / post?.data?.ratingCount) * 100
                }%]`}
              ></div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
              {(post?.data?.totalStart2 / post?.data?.ratingCount) * 100} %
            </span>
          </div>
          <div class="mt-4 flex items-center">
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              1 sao
            </a>
            <div class="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
              <div
                class={`h-5 rounded bg-yellow-300 w-[${
                  (post?.data?.totalStart1 / post?.data?.ratingCount) * 100
                }%]`}
              ></div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
              {(post?.data?.totalStart1 / post?.data?.ratingCount) * 100} %
            </span>
          </div>
        </div>

        <div className="mx-auto w-full py-10 lg:w-5/6 2xl:mx-0">
          <div class="flex w-full flex-col justify-center py-6">
            <div class="py-3 sm:mx-auto sm:max-w-xl lg:min-w-full">
              <div class="min-w-1xl flex w-full flex-col rounded-xl border-t bg-white shadow-lg">
                <div class="px-12 py-5">
                  <h2 class="text-3xl font-semibold text-gray-800">
                    Đánh giá sản phẩm!
                  </h2>
                </div>
                <div class="flex w-full flex-col items-center bg-gray-200">
                  <div class="flex flex-col items-center space-y-3 py-6">
                    <div class="flex space-x-3">
                      <svg
                        class={`h-12 w-12 cursor-pointer text-yellow-500 ${
                          ratingValue >= 1 ? "fill-yellow-500" : "fill-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onMouseEnter={() => setRatingValue(1)}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        class={`h-12 w-12 cursor-pointer text-yellow-500 ${
                          ratingValue >= 2 ? "fill-yellow-500" : "fill-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onMouseEnter={() => setRatingValue(2)}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        class={`h-12 w-12 cursor-pointer text-yellow-500 ${
                          ratingValue >= 3 ? "fill-yellow-500" : "fill-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onMouseEnter={() => setRatingValue(3)}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        class={`h-12 w-12 cursor-pointer text-yellow-500 ${
                          ratingValue >= 4 ? "fill-yellow-500" : "fill-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onMouseEnter={() => setRatingValue(4)}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        class={`h-12 w-12 cursor-pointer text-yellow-500 ${
                          ratingValue === 5
                            ? "fill-yellow-500"
                            : "fill-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onMouseEnter={() => setRatingValue(5)}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div class="flex w-3/4 flex-col">
                    <textarea
                      rows="3"
                      class="resize-none rounded-xl p-4 text-gray-500"
                      placeholder="Đánh giá của bạn"
                      value={contentRating}
                      onChange={(e) => setContentRating(e.target.value)}
                    ></textarea>
                    <button
                      onClick={() => handleRatingSubmit()}
                      class="my-8 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 py-3 text-lg text-white hover:shadow-lg"
                    >
                      Đánh giá
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full py-10 lg:w-5/6 2xl:max-w-[1280px]">
        {rating
          ? rating.data?.reviews.map((review) => {
              return (
                <article key={review.id} className="mb-5">
                  <div class="mb-4 flex items-center">
                    <img
                      class="me-4 h-10 w-10 rounded-full"
                      src={
                        "https://inkythuatso.com/uploads/thumbnails/800/2023/03/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg"
                      }
                      alt=""
                    />
                    <div class="font-medium">
                      <p>{/* {userData.fullname} */}</p>
                    </div>
                  </div>
                  <div class="mb-1 flex items-center space-x-1 rtl:space-x-reverse">
                    <svg
                      class={`h-4 w-4 text-yellow-300 ${
                        review.rating >= 1 ? "fill-yellow-300" : "fill-gray-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class={`h-4 w-4 text-yellow-300 ${
                        review.rating >= 2 ? "fill-yellow-300" : "fill-gray-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class={`h-4 w-4 text-yellow-300 ${
                        review.rating >= 3 ? "fill-yellow-300" : "fill-gray-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class={`h-4 w-4 text-yellow-300 ${
                        review.rating >= 4 ? "fill-yellow-300" : "fill-gray-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class={`h-4 w-4 text-yellow-300 ${
                        review.rating === 5
                          ? "fill-yellow-300"
                          : "fill-gray-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    {/* <h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                Thinking to buy another one!
              </h3> */}
                  </div>
                  <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
                    <p>
                      Đánh giá vào ngày{" "}
                      {format(new Date(review.createdAt), "yyyy-MM-dd")}
                    </p>
                  </footer>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    {review.comment}
                  </p>
                </article>
              );
            })
          : "loading"}
      </div>
    </section>
  );
};

export default ShopDetail;
