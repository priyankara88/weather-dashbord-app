import { Request, Response } from "express";
import Widget from "../models/Widget";
import { getWeather } from "../services/weatherService";

export const getAllWidgets = async (_req: Request, res: Response) => {
  const widgets = await Widget.find();
  res.json(widgets);
};

export const getWidgets = async (req: Request, res: Response) => {
  const { location } = req.body;
  if (!location) {
    return res.status(400).json({ error: "Location is required" });
  }
  const widget = await Widget.findOne({ location });
  if (!widget) {
    return res.status(404).json({ error: "Widget not found" });
  }
  const weather = await getWeather(location);
  res.status(200).json({ widget, weather });
};

export const createWidget = async (req: Request, res: Response) => {
  const { location } = req.body;
  if (!location) return res.status(400).json({ error: "Location is required" });

  const widget = await new Widget({ location }).save();
  const weather = await getWeather(location);

  res.status(201).json({ widget, weather });
};

export const deleteWidget = async (req: Request, res: Response) => {
  await Widget.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
