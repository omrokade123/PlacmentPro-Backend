import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import tokenBlacklistModel from "../models/MockInterview/blacklist.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required"
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, passwordHash });

    const token = jwt.sign(
      { userId: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        location: user.location,
        bio: user.bio,
        title: user.title,
        skills: user.skills,
        avatar: user.avatar,
        role: user.role,
        profile: user.profile,
        preferences: user.preferences,
        stats: user.stats,
        achievements: user.achievements
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Registration failed",
      error: error.message
    });
  }

};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const isPasswordMatch = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { userId: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        location: user.location,
        bio: user.bio,
        title: user.title,
        skills: user.skills,
        avatar: user.avatar,
        role: user.role,
        profile: user.profile,
        preferences: user.preferences,
        stats: user.stats,
        achievements: user.achievements
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Login failed",
      error: error.message
    });
  }

};

export const logout = async (req, res) => {
  try {
    let token = req.token;
    if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (token) {
      await tokenBlacklistModel.create({ token });
    } else {
      return res.status(400).json({
        message: "Token is required for logout"
      });
    }

    res.status(200).json({
      message: "User logged out successfully"
    });
  } catch (err) { 
    console.log(err);
    return res.status(401).json({
      message: "Internal Server Error"
    })
  }
}


export const getMeController = async (req, res) => {
  res.status(200).json({
    message: "User details fetched successfully",
    user: req.user
  });
}
