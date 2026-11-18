import mongoose from "mongoose";
import slugify from "slugify"


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Name is required"],
        trim: true
    },
    slug: {
        type: String,
        unique: true,
        required: [true, "Slug is required"],
        trim: true
    },
    image: {
        type: String
    },
    status: {
        type: Boolean,
        required: true
    }
},
    {
        timestamps: true
    }
)


// Automatically generate slug
categorySchema.pre("validate", function (next) {

    if (this.isModified("name")) {
        this.slug = slugify(this.name, {
            lower: true,
            strict: true
        });
    }

    next();
});


const categoryModel = mongoose.model("categories", categorySchema);
export default categoryModel;