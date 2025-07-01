import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../app/config";

// export function signToken(payload: any, expires = "7d") {
//   return jwt.sign(payload, JWT_SECRET, { expiresIn: expires });
// }

export function verifyToken<T = any>(token: string) {
  return jwt.verify(token, JWT_SECRET) as T;
}
