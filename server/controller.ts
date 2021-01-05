import Shop from './model/Shop';
import { Request, Response } from 'express';

export const getAllShop = async (_: Request, res: Response) => {
  try {
    const allShop = await Shop.find({});
    return res.status(200).json({ result: true, allShop });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ result: false, message: '데이터를 얻어오지 못했습니다.' });
  }
};

export const getSelectedShop = async (req: Request, res: Response) => {
  const {
    params: { shopType }
  } = req;
  try {
    const selectedShop = await Shop.find({ type: shopType }).exec();
    return res.status(200).json({ result: true, selectedShop });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ result: false, message: '데이터를 얻어오지 못했습니다.' });
  }
};

export const postNewShop = async (req: Request, res: Response) => {
  const {
    body: { name, type, geoLocation, address, time }
  } = req;
  console.log('여기까지 옴?');
  try {
    const newShop = await Shop.create({
      name,
      type,
      geoLocation,
      address,
      time
    });
    return res.status(201).json({ result: true, newShop });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ result: false, message: '데이터 생성에 실패했습니다' });
  }
};
