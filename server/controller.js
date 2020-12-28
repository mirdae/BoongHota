import Modal from './model/Snack';

export const allSnacks = (req, res) => {
  console.log(req);
};
export const selectSnack = (req, res) => {
  console.log(req);
};
export const newSnack = async (req, res) => {
  const {
    body: {
      payload: { storeName, food, locationNum, location, time }
    }
  } = req;
  try {
    const newSnack = await Modal.create({
      storeName,
      food,
      locationNum,
      location,
      time
    });
    return res.status(201).json({ newSnack: true, newSnack });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ newSnack: false, message: '데이터 생성에 실패했습니다' });
  }
};
