
import { useState } from "react";

export default function UserForm({ updateForm }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [errors, setErrors] = useState({});

    // 1. Update individual input values
    function handleChange(event) {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    }

    // 2. Validate form fields
    function validateForm() {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Please enter your name";
        }

        if (!form.email.trim()) {
            newErrors.email = "Please enter your email";
        } 

        if (form.age.trim() === "") {
            newErrors.age = "Please enter your age";
        } 

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    // 3. Submit form
    function submitHandler(event) {
        event.preventDefault();

        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        updateForm(form);

        // Optional: reset form after successful submission
        setForm({
            name: "",
            email: "",
            age: ""
        });

        setErrors({});
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    User Registration
                </h2>

                <p className="text-gray-500 mb-6">
                    Please fill in your details below.
                </p>

                <form
                    onSubmit={submitHandler}
                    className="space-y-5"
                    noValidate
                >
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {errors.name && (
                            <p className="my-2 text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {errors.email && (
                            <p className="my-2 text-sm text-red-500">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Age */}
                    <div>
                        <label
                            htmlFor="age"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Age
                        </label>

                        <input
                            id="age"
                            type="number"
                            name="age"
                            value={form.age}
                            onChange={handleChange}
                            min="1"
                            max="120"
                            step="1"
                            placeholder="Enter your age"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {errors.age && (
                            <p className="my-2 text-sm text-red-500">
                                {errors.age}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
