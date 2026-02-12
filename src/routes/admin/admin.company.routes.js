import express from "express";

import auth
  from "../../middleware/auth.middleware.js";

import { adminOnly }
  from "../../middleware/admin.middleware.js";

import {

  getAdminCompanies,
  getCompanyCount,
  createCompany,
  updateCompany,
  approveCompany,
  rejectCompany,
  deleteCompany

} from
  "../../controller/admin/admin.company.controller.js";

const router = express.Router();


// ALWAYS keep static routes first
router.get("/count",
  auth,
  adminOnly,
  getCompanyCount
);

router.get("/",
  auth,
  adminOnly,
  getAdminCompanies
);

router.post("/",
  auth,
  adminOnly,
  createCompany
);

router.put("/:id",
  auth,
  adminOnly,
  updateCompany
);

router.put("/:id/approve",
  auth,
  adminOnly,
  approveCompany
);

router.put("/:id/reject",
  auth,
  adminOnly,
  rejectCompany
);

router.delete("/:id",
  auth,
  adminOnly,
  deleteCompany
);

export default router;
