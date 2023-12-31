import express from "express";
const SneakerController = require("../controllers");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", SneakerController.getAllProducts);
router.get("/search", SneakerController.getAllProductsWithFilters);
router.get("/:sneakerID", SneakerController.getOne);
router.post("/create", upload.single("image"), SneakerController.createProduct);
router.put(
  "/productimages/:sneakerID",
  upload.array("images", 3),
  SneakerController.insertImagesOnProduct
);
router.put("/update/:sneakerID", SneakerController.updateProduct);
router.put(
  "/updateposterimage/:sneakerID",
  upload.single("image"),
  SneakerController.updatePosterImage
);
router.put(
  "/deleteproductimage/:sneakerID/:imageID/:type",
  SneakerController.deleteProductImage
);
router.delete("/delete/:sneakerID", SneakerController.deleteProduct);

export default router;
