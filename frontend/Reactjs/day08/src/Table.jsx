
export default function Table({ formData = [], removeHandler }) {

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* User Table */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800">
                            User Details
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                        #
                                    </th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                        Name
                                    </th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                        Email
                                    </th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                        Age
                                    </th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {
                                    formData.map((user, index) => {
                                        return (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                                                <td className="px-6 py-4 text-gray-800 font-medium">
                                                    {user.name}
                                                </td>
                                                <td className="px-6 py-4 text-gray-600">
                                                    {user.email}
                                                </td>
                                                <td className="px-6 py-4 text-gray-600">{user.age}</td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        onClick={() => removeHandler(index)}

                                                        className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-200 transition"
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
