import logger from "#config/logger.js";
import jwt, { sign } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = "1d";

export const jwttoken = {
  sign: (payload) => {
    try {
      return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    } catch (err) {
      logger.error("Failed to authenticate user", err);
      throw new Error("Failed to authenticate user");
    }
  },
  verify: (token) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (err) {
      logger.error("Failed to authenticate user", err);
      throw new Error("Failed to authenticate user");
    }
  },
};
