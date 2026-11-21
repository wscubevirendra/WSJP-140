import categoryModel from "../models/category.model.js"
import uploadImage from "../utils/uploadImage.js";

export const create = async (req, res) => {
    try {
        const file = await uploadImage(req, res, "categories");
        console.log(file)
        const { name } = req.body;
        console.log(req.body)
        if (!name) {
            return res.status(400).json({
                message: "All field are required",
                success: false
            })
        }

        const category = await categoryModel.findOne({ name })
        if (category) {
            return res.status(409).json({
                message: "category already create",
                success: false
            })
        }

        await categoryModel.create({
            name,
            image: file.path
        })

        return res.status(201).json({
            message: "category  create successfully",
            success: true
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false
        })

    }
}

export const read = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        console.log(categories)
        res.status(200).json({
            message: "Category Data Fetched",
            success: true,
            categories
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false
        })
    }
}

export const readById = async (req, res) => {
    try {
        const id = req.params.id
        const category = await categoryModel.findById({ _id: id });
        if (!category) {
            return res.status(404).json({
                message: "No Data Found",
                success: false
            })
        }

        res.status(200).json({
            message: "Category Data Fetched",
            success: true,
            category
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false
        })
    }
}

export const statusUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await categoryModel.findById({ _id: id });
        if (!category) {
            return res.status(404).json({
                message: "No Data Found",
                success: false
            })
        }

        await categoryModel.updateOne(id, { $set: { status: !category.status } });
        res.status(200).json({
            message: "Category Status Update Successfully",
            success: true

        })


    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false
        })
    }
}

export const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await categoryModel.findById({ _id: id });
        if (!category) {
            return res.status(404).json({
                message: "No Data Found",
                success: false
            })
        }

        await categoryModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Category Delete Successfully",
            success: true,
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false
        })
    }
}

export const updateById = async (req, res) => {
    try {
        const file = await uploadImage(req, res, "categories");
        const { name } = req.body
        const id = req.params.id;
        const category = await categoryModel.findById({ _id: id });
        if (!category) {
            return res.status(404).json({
                message: "No Data Found",
                success: false
            })
        }

        const body = {};


        if (name) body.name = name;
        if (file) body.image = file.path

        await categoryModel.findByIdAndUpdate(id, body)

        res.status(200).json({
            message: "Category Update Successfully",
            success: true,
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false
        })
    }
}

