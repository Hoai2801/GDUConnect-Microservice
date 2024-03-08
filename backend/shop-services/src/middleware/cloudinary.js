const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dqqkpgega",
  api_key: "782433662387241",
  api_secret: "6IozHHG1T075aajCQnGZ00RVY7Q",
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  params: {
    folder: "product-images",
  },
});

const uploadCloudProduct = multer({ storage });

module.exports = uploadCloudProduct;
