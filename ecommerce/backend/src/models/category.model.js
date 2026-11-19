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
        type: String,
        required: [true, "Image is required"],
    },
    status: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
)


// Automatically generate slug
categorySchema.pre("validate", function () {
    if (this.isModified("name")) {
        this.slug = slugify(this.name, {
            lower: true,
            strict: true
        });
    }

});


const categoryModel = mongoose.model("categories", categorySchema);
export default categoryModel;