import axios from "axios";
import React, { useEffect, useState } from "react";
const Room = () => {
  const [data, setData] = useState();
  const mockData = [
    {
        "id": 4,
        "userId": 1,
        "title": "Phong tro Go Vap",
        "district": "Go Vap",
        "ward": "3",
        "street": "Nguyen Kiem",
        "area": 5,
        "price": 5000000,
        "description": "LKJklfjalkjglkjalkgjaljglkajglkjaglkjgklajglkjalkgjlkajglkag",
        "createdAt": "2024-02-26",
        "images": []
    },
    {
        "id": 5,
        "userId": 1,
        "title": "Phong tro Go Vap",
        "district": "Go Vap",
        "ward": "3",
        "street": "Nguyen Kiem",
        "area": 5,
        "price": 5000000,
        "description": "LKJklfjalkjglkjalkgjaljglkajglkjaglkjgklajglkjalkgjlkajglkag",
        "createdAt": "2024-02-26",
        "images": [
            {
                "id": 1,
                "imageURL": "http://res.cloudinary.com/dqqkpgega/image/upload/v1708937241/d5c48300-5654-4d45-b325-f12956435f8f.png"
            }
        ]
    },
    {
        "id": 6,
        "userId": 1,
        "title": "Phong tro Go Vap",
        "district": "Go Vap",
        "ward": "3",
        "street": "Nguyen Kiem",
        "area": 5,
        "price": 5000000,
        "description": "LKJklfjalkjglkjalkgjaljglkajglkjaglkjgklajglkjalkgjlkajglkag",
        "createdAt": "2024-02-26",
        "images": []
    },
    {
        "id": 7,
        "userId": 1,
        "title": "Phong tro Go Vap",
        "district": "Go Vap",
        "ward": "3",
        "street": "Nguyen Kiem",
        "area": 5,
        "price": 5000000,
        "description": "LKJklfjalkjglkjalkgjaljglkajglkjaglkjgklajglkjalkgjlkajglkag",
        "createdAt": "2024-02-26",
        "images": []
    },
    {
        "id": 8,
        "userId": 1,
        "title": "Phong tro Go Vap",
        "district": "Go Vap",
        "ward": "3",
        "street": "Nguyen Kiem",
        "area": 5,
        "price": 5000000,
        "description": "LKJklfjalkjglkjalkgjaljglkajglkjaglkjgklajglkjalkgjlkajglkag",
        "createdAt": "2024-02-26",
        "images": [
            {
                "id": 2,
                "imageURL": "http://res.cloudinary.com/dqqkpgega/image/upload/v1708939061/ea606f5c-8846-4d7e-ba09-80ac90aaee6d.png"
            }
        ]
    }
]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/room/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  return (
    <>
      <div>Room</div>
    </>
  );
};

export default Room;
