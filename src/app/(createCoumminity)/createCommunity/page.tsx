"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type CommunityForm = {
    name: string;
    description: string;
    category: string;
    coverImage: FileList;
    type: "public" | "private";
};

export default function CreateACommunity() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CommunityForm>();

    const [loading, setLoading] = useState(false)

    // const {data:session } = useSession()
    // const userEmail= session?.email;
    // const userName= session?.name;


    const onSubmit = async (data: CommunityForm) => {
        try {
            setLoading(true)
            let imageUrl = "";

            // Upload image to ImgBB
            const image = data.coverImage[0];

            if (image) {
                const formData = new FormData();
                formData.append("image", image);

                const response = await fetch(
                    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const result = await response.json();

                if (result.success) {
                    imageUrl = result.data.display_url;
                }
            }

            // Backend এ পাঠানোর data
            const communityData = {
                name: data.name,
                description: data.description,
                category: data.category,
                coverImage: imageUrl,
                type: data.type,
                // adminEmail: userEmail,
                // adminName: userName
            };

            console.log("Community Data:", communityData);

            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create/community`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(communityData),
            });

        } catch (error) {
            console.error("Error:", error);
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <div className="mx-auto my-10 w-11/12 max-w-2xl rounded-xl border bg-white p-8 shadow">
            <h1 className="text-3xl font-bold">Create Community</h1>
            <p className="mt-2 text-gray-500">
                Build your own community and start discussions.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-6"
            >
                {/* Community Name */}
                <div>
                    <label className="mb-2 block font-medium">
                        Community Name
                    </label>

                    <input
                        type="text"
                        placeholder="React Bangladesh"
                        {...register("name", {
                            required: "Community name is required",
                        })}
                        className="w-full rounded-lg border p-3"
                    />

                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="mb-2 block font-medium">
                        Description
                    </label>

                    <textarea
                        rows={5}
                        placeholder="Write something about your community..."
                        {...register("description", {
                            required: "Description is required",
                        })}
                        className="w-full rounded-lg border p-3"
                    />

                    {errors.description && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.description.message}
                        </p>
                    )}
                </div>

                {/* Category */}
                <div>
                    <label className="mb-2 block font-medium">
                        Category
                    </label>

                    <select
                        {...register("category", {
                            required: "Category is required",
                        })}
                        className="w-full rounded-lg border p-3"
                    >
                        <option value="">Select Category</option>
                        <option value="Technology">Technology</option>
                        <option value="Programming">Programming</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Education">Education</option>
                        <option value="Sports">Sports</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Business">Business</option>
                        <option value="Lifestyle">Lifestyle</option>
                    </select>

                    {errors.category && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.category.message}
                        </p>
                    )}
                </div>

                {/* Cover Image */}
                <div>
                    <label className="mb-2 block font-medium">
                        Cover Image
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        {...register("coverImage", {
                            required: "Cover image is required",
                        })}
                        className="w-full rounded-lg border p-3"
                    />

                    {errors.coverImage && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.coverImage.message}
                        </p>
                    )}
                </div>

                {/* Community Type */}
                {/* <div>
                    <label className="mb-2 block font-medium">
                        Community Type
                    </label>

                    <select
                        {...register("type")}
                        className="w-full rounded-lg border p-3"
                    >
                        <option value="public">🌍 Public</option>
                        <option value="private">🔒 Private</option>
                    </select>
                </div> */}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading ? "Creating..." : "Create Community"}
                </button>
            </form>
        </div>
    );
}