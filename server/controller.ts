import Snack from './model/Snack';
import { Request, Response } from 'express';
import { NewSnack } from './types';

export const getAllSnacks = async (_: Request, res: Response) => {
  console.log('server');
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

export const getSelectedSnack = async (req: Request, res: Response) => {
  const {
    params: { foodType },
  } = req;
  try {
    const selectedSnack = await Snack.find({ food: foodType }).exec();
    return res.status(200).json({ result: true, selectedSnack });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ result: false, message: '데이터를 얻어오지 못했습니다.' });
  }
};
export const postNewSnack = async (req: Request, res: Response) => {
  const {
    body: {
      payload: { storeName, food, locationNum, location, time },
    },
  } = req;
  try {
    const newSnack = await Snack.create({
      storeName,
      food,
      locationNum,
      location,
      time,
    });
    return res.status(201).json({ result: true, newSnack });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ result: false, message: '데이터 생성에 실패했습니다' });
  }
};
