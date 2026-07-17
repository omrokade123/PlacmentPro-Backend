import User from "../models/User.js";

export const incrementUsage = async (userId, feature) => {

    const user = await User.findById(userId);

    if (!user) return;

    if (!user.usage[feature]) return;

    user.usage[feature].used += 1;

    await user.save();
};

export const resetUsage = async (userId) => {

    const user = await User.findById(userId);

    if (!user) return;

    Object.keys(user.usage).forEach(key => {
        user.usage[key].used = 0;
    });

    await user.save();
};