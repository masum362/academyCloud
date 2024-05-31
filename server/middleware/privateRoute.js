import jwt from "jsonwebtoken";
import { usersCollection } from "../db/connection.js";

const auth = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(404).json("invalid user");
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(404).send("invalid user");
    req.userId = decoded.id;
    next();
  });
};

const verifyAdmin = async(req, res, next) => {
  const userId = req.userId;
  const user = await usersCollection.findOne({uid:userId});
  if(user.role==="admin"){
    req.user = user;
    next();
  }
  else{
    return res.status(403).send("Something went wrong!");
  }
};

export  {auth,verifyAdmin};
