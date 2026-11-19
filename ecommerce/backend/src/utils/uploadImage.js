import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";


const uploadImage = (req, res, folder) => {
    // Create Cloudinary storage for the selected folder.
    const storage = new CloudinaryStorage({
        cloudinary,
        params: {
            folder: folder,
            allowed_formats: ["jpg", "jpeg", "png", "webp"],
        },
    });
    // Create Multer upload instance.
    const upload = multer({
        storage,
        limits: {
            fileSize: 2 * 1024 * 1024, // Maximum 2 MB
        },
    });
    // Convert Multer callback into a Promise.
    return new Promise((resolve, reject) => {
        upload.single("image")(req, res, (error) => {
            if (error) {
                return reject(error);
            }
            resolve(req.file);
        });
    });
};
export default uploadImage
