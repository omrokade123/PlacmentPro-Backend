import User from "../models/User.js";
import bcrypt from "bcryptjs";

/**
 * @name getProfile
 * @route GET /api/profile
 * @description Get current user profile
 * @access private
 */
export const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    
    const user = await User.findById(userId).select("-passwordHash");
    
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "Profile fetched successfully",
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
        achievements: user.achievements,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching profile",
      error: error.message
    });
  }
};

/**
 * @name updateProfile
 * @route PUT /api/profile
 * @description Update user profile
 * @access private
 */
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const {
      firstName,
      lastName,
      phone,
      location,
      bio,
      title,
      skills,
      college,
      graduationYear,
      branch,
      dailyStudyTime,
      focusAreas
    } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Update basic profile info
    if (firstName !== undefined) user.firstName = firstName;
    if (lastName !== undefined) user.lastName = lastName;
    if (phone !== undefined) user.phone = phone;
    if (location !== undefined) user.location = location;
    if (bio !== undefined) user.bio = bio;
    if (title !== undefined) user.title = title;
    if (skills !== undefined) user.skills = skills;

    // Update profile sub-document
    if (college !== undefined || graduationYear !== undefined || branch !== undefined) {
      user.profile = {
        ...user.profile,
        ...(college !== undefined && { college }),
        ...(graduationYear !== undefined && { graduationYear }),
        ...(branch !== undefined && { branch })
      };
    }

    // Update preferences
    if (dailyStudyTime !== undefined || focusAreas !== undefined) {
      user.preferences = {
        ...user.preferences,
        ...(dailyStudyTime !== undefined && { dailyStudyTime }),
        ...(focusAreas !== undefined && { focusAreas })
      };
    }

    const updatedUser = await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        phone: updatedUser.phone,
        location: updatedUser.location,
        bio: updatedUser.bio,
        title: updatedUser.title,
        skills: updatedUser.skills,
        avatar: updatedUser.avatar,
        profile: updatedUser.profile,
        preferences: updatedUser.preferences,
        stats: updatedUser.stats,
        achievements: updatedUser.achievements
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating profile",
      error: error.message
    });
  }
};

/**
 * @name changePassword
 * @route POST /api/profile/change-password
 * @description Change user password
 * @access private
 */
export const changePassword = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { currentPassword, newPassword, confirmPassword } = req.body;

    // Validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        message: "New passwords do not match"
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters"
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Current password is incorrect"
      });
    }

    // Hash new password
    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    // Update password
    user.passwordHash = newPasswordHash;
    await user.save();

    res.status(200).json({
      message: "Password changed successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error changing password",
      error: error.message
    });
  }
};

/**
 * @name updatePreferences
 * @route PUT /api/profile/preferences
 * @description Update notification preferences
 * @access private
 */
export const updatePreferences = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { emailNotifications, weeklyDigest, marketingEmails } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.preferences = {
      ...user.preferences,
      ...(emailNotifications !== undefined && { emailNotifications }),
      ...(weeklyDigest !== undefined && { weeklyDigest }),
      ...(marketingEmails !== undefined && { marketingEmails })
    };

    await user.save();

    res.status(200).json({
      message: "Preferences updated successfully",
      preferences: user.preferences
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating preferences",
      error: error.message
    });
  }
};

/**
 * @name deleteAccount
 * @route DELETE /api/profile
 * @description Delete user account
 * @access private
 */
export const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        message: "Password is required to delete account"
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    // Delete user
    await User.findByIdAndDelete(userId);

    res.status(200).json({
      message: "Account deleted successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error deleting account",
      error: error.message
    });
  }
};
