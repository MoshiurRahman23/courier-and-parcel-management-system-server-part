import { Schema, model, Document, Types } from "mongoose";

export interface IParcel extends Document {
  customer: Types.ObjectId;
  agent?: Types.ObjectId;
  pickupAddress: string;
  deliveryAddress: string;
  size: "S" | "M" | "L";
  isCOD: boolean;
  amountCOD?: number;
  status: "Booked" | "PickedUp" | "InTransit" | "Delivered" | "Failed";
  coordinates?: { lat: number; lng: number };
}

const parcelSchema = new Schema<IParcel>(
  {
    customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    agent: { type: Schema.Types.ObjectId, ref: "User" },
    pickupAddress: String,
    deliveryAddress: String,
    size: { type: String, enum: ["S", "M", "L"], default: "S" },
    isCOD: Boolean,
    amountCOD: Number,
    status: { type: String, default: "Booked" },
    coordinates: { lat: Number, lng: Number },
  },
  { timestamps: true }
);

export default model<IParcel>("Parcel", parcelSchema);
