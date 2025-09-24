import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    const payload = {
      statusCode: err.statusCode || 500,
      data: null,
      message: err.message || "Error",
      success: false,
      errors: err.errors || [],
    };
    return res.status(payload.statusCode).json(payload);
  }

  console.error(err); // send to your logging system in prod
  const payload = {
    statusCode: 500,
    data: null,
    message: "Internal Server Error",
    success: false,
  };
  return res.status(500).json(payload);
};
