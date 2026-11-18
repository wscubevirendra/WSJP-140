import categoryModel from "../models/category.model.js"

export const create = async (req, res) => {
    try {
        const { name } = req.body;
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
            name: name
        })

        return res.status(201).json({
            message: "category  create successfully",
            success: true
        })

    } catch (error) {
        res.status(500).json({
            message: error.response || "Internal Server Error",
            success: false
        })

    }
}

export const read = (req, res) => {
    try {

    } catch (error) {

    }
}


export const readById = (req, res) => {
    try {

    } catch (error) {

    }
}

export const statusUpdate = (req, res) => {
    try {

    } catch (error) {

    }
}

export const deleteById = (req, res) => {
    try {

    } catch (error) {

    }
}


export const updateById = (req, res) => {
    try {

    } catch (error) {

    }
}

