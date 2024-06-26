import { ObjectId } from "mongodb";
import {
  booksCollection,
  borrowedBooksCollection,
  categoryCollection,
  usersCollection,
} from "../db/connection.js";
import jwt from "jsonwebtoken";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};

const homePage = async (req, res) => {
  console.log("homePage called");
};

const addUser = async (req, res) => {
  try {
    const user = req.body;
    // console.log(user);
    // console.log()
    console.log({ user });
    const isUser = await usersCollection.findOne({ uid: user.uid });
    if (isUser) {
      if (!isUser.displayName) {
        await usersCollection.updateOne(
          { uid: user.uid },
          { $set: { displayName: user.displayName, photoURL: user.photoURL } }
        );
      }
      return res.status(201).json({ message: "Already a user" });
    }

    console.log({ user });
    console.log(user.photoURL, user.displayName, user.email, user.uid);

    const response = await usersCollection.insertOne({
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email ? user.email : "",
      uid: user.uid,
    });
    console.log(response);
    return res
      .status(201)
      .json({ response, message: "user added successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = req.body;
    const isUser = await usersCollection.findOne({ uid: user.uid });
    if (isUser) {
      const token = jwt.sign({ id: isUser.uid }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res
        .cookie("token", token, cookieOptions)
        .status(200)
        .json({ message: "user logged in successfully", user: isUser });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: error.message });
  }
};

const logoutUser = (req, res) => {
  try {
    res
      .clearCookie("token", { ...cookieOptions, maxAge: 0 })
      .status(201)
      .json({ message: "user logged out" });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usersCollection.findOne({ uid: id });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: error.message });
  }
};

const addBook = async (req, res) => {
  try {
    const book = req.body;

    const response = await booksCollection.insertOne({
      ...book,
      uid: req.userId,
    });

    res.status(201).json({ response, message: "book added successfully" });
  } catch (error) {
    console.log(error);

    res.status(501).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = req.body;

    console.log({ id, book });
    const filter = { _id: new ObjectId(id) };
    const updatedBook = {
      $set: {
        ...book,
      },
    };
    const response = await booksCollection.updateOne(filter, updatedBook);

    console.log(response);
    res.status(201).json({ response, message: "book updated successfully" });
  } catch (error) {
    console.log(error);

    res.status(501).json({ message: error.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const response = booksCollection.find({});
    const books = await response.toArray();
    res.status(201).json({ books });
  } catch (error) {
    console.log(error);

    res.status(501).json({ message: error.message });
  }
};
const getCategoryBooks = async (req, res) => {
  const categoryName = req.params.id;
  console.log("category:", categoryName);
  try {
    const response = booksCollection.find({ Category: categoryName });
    const books = await response.toArray();
    res.status(201).json({ books });
  } catch (error) {
    console.log(error);

    res.status(501).json({ message: error.message });
  }
};

const getAvailableBooks = async (req, res) => {
  try {
    const response = booksCollection.find({
      quantity: { $gt: 0 },
    });
    const books = await response.toArray();
    res.status(201).json({ books });
  } catch (error) {
    console.log(error);

    res.status(501).json({ message: error.message });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: new ObjectId(id) };
    const book = await booksCollection.findOne(filter);
    res.status(201).json(book);
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: error.message });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const response = categoryCollection.find();
    const categories = await response.toArray();
    res.status(201).json(categories);
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: error.message });
  }
};

const getBorrowedBooks = async (req, res) => {
  try {
    const uid = req.userId;
    const books = await borrowedBooksCollection
      .aggregate([
        {
          $lookup: {
            from: "books",
            localField: "bookId",
            foreignField: "_id",
            as: "BooksDetails",
          },
        },
      ])
      .toArray();

    res.status(201).json({ books });
  } catch (error) {
    console.log(error);

    res.status(501).json({ message: error.message });
  }
};
const addBorrowedBook = async (req, res) => {
  try {
    const uid = req.userId;
    const borrowedBooks = req.body;

    const userBorrowedBooks = await borrowedBooksCollection
      .find({ uid })
      .toArray();

    console.log({ userBorrowedBooks });

    console.log("length", userBorrowedBooks.length);

    if (userBorrowedBooks.length >= 3) {
      console.log("inside from userborrowded 3 books condition");
      return res
        .status(203)
        .json({ message: " you already borrowed maximize books" });
    } else {
      const isAlreadyBorrowed = await borrowedBooksCollection.findOne({
        uid,
        bookId: new ObjectId(borrowedBooks.bookId),
      });
      console.log({ isAlreadyBorrowed });
      if (isAlreadyBorrowed) {
        return res.status(208).json({ message: "book already borrowed" });
      } else {
        const quantityResponse = await booksCollection.updateOne(
          { _id: new ObjectId(borrowedBooks.bookId) },
          {
            $inc: { quantity: -1 },
          }
        );

        const borrowBookAddedResponse = await borrowedBooksCollection.insertOne(
          {
            uid: borrowedBooks.uid,
            displayName: borrowedBooks.displayName,
            borrowedDate: borrowedBooks.borrowed_Date,
            returnDate: borrowedBooks.return_Date,
            bookId: new ObjectId(borrowedBooks.bookId),
          }
        );

        console.log({ quantityResponse, borrowBookAddedResponse });
        return res.status(201).json(borrowBookAddedResponse);
      }
    }
  } catch (error) {
    console.log(error);

    res.status(501).json({ message: error.message });
  }
};

const returnBorrowedBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    const deletedResponse = await borrowedBooksCollection.deleteOne({
      bookId: new ObjectId(bookId),
    });

    if (deletedResponse.deletedCount === 1) {
      const response = await booksCollection.updateOne(
        { _id: new ObjectId(bookId) },
        { $inc: { quantity: 1 } }
      );
      console.log(response);
      return res.status(201).json({ message: "book returned successfully" });
    } else {
      return res.status(203).json({ message: "book already returned" });
    }
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};

export {
  homePage,
  addUser,
  loginUser,
  logoutUser,
  getSingleUser,
  getBooks,
  getCategoryBooks,
  getAvailableBooks,
  addBook,
  updateBook,
  getSingleBook,
  getAllCategory,
  getBorrowedBooks,
  addBorrowedBook,
  returnBorrowedBook,
};
