import ratingServices from "../services/ratingServices";

const createNewRating = async (req, res) => {
  try {
    const { comment, rating, userId, productId } = req.body;
    const images = req.files;
    if (!comment || !rating || !productId || !userId) {
      return res.status(400).json({
        mess: "Please input data",
      });
    }
    const rs = await ratingServices.createRating(req.body, images);
    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      mess: `${error}`,
    });
  }
};

const getRatingWithId = async (req, res) => {
  try {
    const id = req.params.id;
    const rs = await ratingServices.getRatingWithId(id);

    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

const getRatingWithProductId = async (req, res) => {
  try {
    const id = req.params.id;
    const rs = await ratingServices.getRatingWithProductId(id);

    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

const getAllRating = async (req, res) => {
  try {
    const rs = await ratingServices.getAllRating();
    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

const updateRatingWithId = async (req, res) => {
  try {
    const images = req.files;
    const id = req.params.id;
    const rs = await ratingServices.updateRatingWithId(id, req.body, images);
    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

const deleteRatingWithId = async (req, res) => {
  try {
    const id = req.params.id;
    const rs = await ratingServices.removeRatingWithId(id);
    return res.status(200).json(rs);
  } catch (error) {
    return res.status(400).json({
      success: false,
      mess: `${error}`,
    });
  }
};

export default {
  createNewRating,
  getRatingWithId,
  getAllRating,
  getRatingWithProductId,
  updateRatingWithId,
  deleteRatingWithId,
};
