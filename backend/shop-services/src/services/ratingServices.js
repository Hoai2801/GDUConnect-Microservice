import Rating from "../moldes/rating";

const createRating = async (data, images) => {
  try {
    const { comment, rating, productId, userId } = data;
    let imagesUrl = [];
    if (images) {
      for (let i = 0; i < images.length; i++) {
        imagesUrl.push(images[i].path);
      }
    }
    const newRating = {
      comment: comment,
      rating: rating,
      images: imagesUrl,
      productId: productId,
      userId: userId,
    };

    const rs = await Rating.create(newRating)
      .then((rs) => {
        return { success: true, mess: "Create new Rating successfully" };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `Create new Rating error ${err} `,
        };
      });
    return rs;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

const getRatingWithId = async (id) => {
  try {
    const rs = await Rating.findOne({ _id: id })
      .then((rs) => {
        return {
          success: true,
          data: rs,
        };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `${err}`,
        };
      });
    return rs;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

const getAllRating = async () => {
  try {
    const rs = await Rating.find()
      .then((rs) => {
        return {
          success: true,
          data: rs,
        };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `${err}`,
        };
      });
    return rs;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

const getRatingWithProductId = async (id) => {
  try {
    const rs = await Rating.find({ productId: id })
      .then((rs) => {
        console.log(rs);
        const totalRating = rs.reduce((sum, rating) => sum + rating.rating, 0);
        const avgRating = totalRating / rs.length;
        return {
          success: true,
          data: {
            reviews: rs,
            avgRating: avgRating,
          },
        };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `${err}`,
        };
      });
    return rs;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

const updateRatingWithId = async (id, data, images) => {
  try {
    const { rating, comment } = data;
    let imagesUrl = [];
    if (images) {
      for (let i = 0; i < images.length; i++) {
        imagesUrl.push(images[i].path);
      }
    }
    const existingRating = await Rating.findOne({ _id: id })
      .then((rs) => {
        return rs;
      })
      .catch((err) => {
        return {
          success: false,
          mess: `${err}`,
        };
      });

    const updateRating = {
      rating: rating ? rating : existingRating.rating,
      comment: comment ? comment : existingRating.comment,
      images:
        imagesUrl && imagesUrl.length > 0 ? imagesUrl : existingRating.images,
    };
    const rs = await Rating.updateOne({ _id: id }, updateRating)
      .then((rs) => {
        return {
          success: true,
          mess: "Update Rating success",
        };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `${err}`,
        };
      });
    return rs;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

const removeRatingWithId = async (id) => {
  try {
    const rs = await Rating.updateOne({ _id: id }, { $set: { isDelete: true } })
      .then((rs) => {
        return {
          success: true,
          mess: "Remove Rating success",
        };
      })
      .catch((err) => {
        return {
          success: false,
          mess: `${err}`,
        };
      });
    return rs;
  } catch (error) {
    return {
      success: false,
      mess: `${error}`,
    };
  }
};

export default {
  createRating,
  getRatingWithId,
  getAllRating,
  getRatingWithProductId,
  updateRatingWithId,
  removeRatingWithId,
};
