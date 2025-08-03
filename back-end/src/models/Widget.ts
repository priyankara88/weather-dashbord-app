import mongoose, { Schema, Document } from "mongoose";

export interface IWidget extends Document {
  location: string;
  createdAt: Date;
}

const WidgetSchema = new Schema<IWidget>({
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IWidget>("Widget", WidgetSchema);
