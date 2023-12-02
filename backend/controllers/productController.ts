import { NextFunction, Request, Response } from "express";
import * as productService from "../services/productService";

export const createData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await productService.createService(req.body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to create data" });
  }
};

export const showData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await productService.showService();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get data" });
  }
};

export const showIdData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const result = await productService.showIdService(id);
    console.log(result);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get data" });
  }
};

export const updateData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result = await productService.updateService(id, req.body);
    if (result) {
      res.status(200).json({ message: "Data updated", result });
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update data" });
  }
};

export const deleteData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result = await productService.deleteService(id);
    if (result) {
      res.status(200).json({ message: "data deleted", result });
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete data" });
  }
};
