const express = require("express");
import uploadCloudProduct from "../middleware/cloudinary";
import ctrlProduct from "../controller/product";
import ctrlRating from "../controller/rating";
import ctrlOption from "../controller/option"
let router = express.Router();

let initRouter = (app) => {
  console.log("first")
  // Product
  router
    .route("/product")
    .post(uploadCloudProduct.array("images", 5), ctrlProduct.createNewProduct)
    .get(ctrlProduct.getAllProduct);
  router
    .route("/product/:id")
    .get(ctrlProduct.getProductWithId)
    .put(uploadCloudProduct.array("images", 5), ctrlProduct.updateProductWithId)
    .delete(ctrlProduct.deleteProductWithId);
  // Rating
  router
    .route("/rating")
    .post(uploadCloudProduct.array("images", 5), ctrlRating.createNewRating)
    .get(ctrlRating.getAllRating);
  router
    .route("/rating/:id")
    .get(ctrlRating.getRatingWithId)
    .put(uploadCloudProduct.array("images", 5), ctrlRating.updateRatingWithId)
    .delete(ctrlRating.deleteRatingWithId);
  router.route("/rating/product/:id").get(ctrlRating.getRatingWithProductId);
  // Option
  router
    .route("/option")
    .post(ctrlOption.createNewOption)
    .get(ctrlOption.getAllOption);
  return app.use("/api/v1/shop", router);
};

module.exports = initRouter;
