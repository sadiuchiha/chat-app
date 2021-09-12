import express from "express";
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    


  })
);

userRouter.post(
    "/register",
    expressAsyncHandler(async (req, res) => {
  
      
  
    })
  );

export default userRouter;
