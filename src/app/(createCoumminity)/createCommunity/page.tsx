"use client";

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

  const onSubmit = (data: CommunityForm) => {
    console.log(data);

    // Image
    console.log(data.coverImage[0]);

    // এখানে FormData বানিয়ে backend এ পাঠাবে
  };

  return (
    <div className="mx-auto w-11/12 max-w-2xl rounded-2xl border bg-white p-8">
      <h1 className="mb-1 text-3xl font-bold">
        Create Community
      </h1>

      <p className="mb-8 text-sm text-gray-500">
        Build your own community and start discussions or earnings.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Name */}
        <div>
          <label className="mb-2 block font-medium">
            Community Name
          </label>

          <input
            type="text"
            placeholder="reactjs"
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
            placeholder="Tell people about your community..."
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
              required: true,
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
              required: true,
            })}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Type */}
        <div>
          <label className="mb-2 block font-medium">
            Community Type
          </label>

          <select
            {...register("type")}
            className="w-full rounded-lg border p-3"
          >
            <option value="public">
              🌍 Public
            </option>

            <option value="private">
              🔒 Private
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500 cursor-pointer">
          Create Community
        </button>
      </form>
    </div>
  );
}