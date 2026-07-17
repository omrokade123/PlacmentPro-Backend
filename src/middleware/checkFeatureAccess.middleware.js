import User from "../models/User.js";
import { PLANS } from "../utils/plan.config.js";

export const checkFeatureAccess = (feature) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found"
        });
      }

      // Premium users have unlimited access
      if (
        user.subscription.plan === "pro" &&
        user.subscription.status === "active"
      ) {
        return next();
      }

      const usage = user.usage?.[feature];

      if (!usage) {
        return res.status(400).json({
          message: `Unknown feature: ${feature}`
        });
      }

      if (usage.used >= usage.limit) {
        return res.status(403).json({
          success: false,
          upgradeRequired: true,
          feature,
          message: `Free limit reached for ${feature}. Upgrade to continue.`,
          currentPlan: user.subscription.plan
        });
      }

      next();

    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Failed to validate feature access."
      });
    }
  };
};