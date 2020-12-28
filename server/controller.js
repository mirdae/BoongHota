import Snack from './model/Snack';

export const getAllSnacks = async (_, res) => {
  try {
    const allSnacks = await Snack.find({});
    return res.status(200).json({ result: true, allSnacks });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ result: false, message: '데이터를 얻어오지 못했습니다.' });
  }
};

export const getSelectedSnack = async (req, res) => {
  const {
    query: { id }
  } = req;
  try {
    const selectedSnack = await Snack.find({ food: id }).exec();
    return res.status(200).json({ result: true, selectedSnack });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ result: false, message: '데이터를 얻어오지 못했습니다.' });
  }
};
export const postNewSnack = async (req, res) => {
  const {
    body: {
      payload: { storeName, food, locationNum, location, time }
    }
  } = req;
  try {
    const newSnack = await Snack.create({
      storeName,
      food,
      locationNum,
      location,
      time
    });
    return res.status(201).json({ result: true, newSnack });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ result: false, message: '데이터 생성에 실패했습니다' });
  }
};
