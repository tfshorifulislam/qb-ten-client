import { getPosts } from "@/lib/getApi";
import { Post } from "@/lib/types/post";
import Image from "next/image";
import {
    ArrowBigUp,
    ArrowBigDown,
    MessageCircle,
    Share2,
} from "lucide-react";
const PostCard = async () => {
    const post: Post[] = await getPosts()
    return (
        <div className="border p-4 space-y-4">
            {
                post.map
                    ((item: Post) =>
                        <div
                            key={item._id}
                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-orange-400 hover:shadow-lg"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 p-4">
                                <Image
                                    src={`https://ui-avatars.com/api/?name=${item.userName}&background=random`}
                                    alt={item.userName}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />

                                <div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-semibold text-gray-900">
                                            r/{item.communityName}
                                        </span>

                                        <span className="text-gray-400">•</span>

                                        <span className="text-gray-500">
                                            u/{item.userName}
                                        </span>

                                        <span className="text-gray-400">• 2h ago</span>
                                    </div>

                                    <p className="text-xs text-gray-400">{item.userEmail}</p>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="px-4">
                                <h2 className="text-xl font-bold text-gray-900">
                                    {item.title}
                                </h2>
                            </div>

                            {/* Post Image */}
                            {item.image && (
                                <div className="relative mt-4 aspect-video w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* Footer */}
                            <div className="flex items-center justify-between border-t px-4 py-3">
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-1 rounded-full px-3 py-2 transition hover:bg-gray-100">
                                        <ArrowBigUp size={20} />
                                        <span>{item.upvote}</span>
                                    </button>

                                    <button className="flex items-center gap-1 rounded-full px-3 py-2 transition hover:bg-gray-100">
                                        <ArrowBigDown size={20} />
                                        <span>{item.downvote}</span>
                                    </button>
                                </div>

                                <button className="flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-gray-100">
                                    <MessageCircle size={18} />
                                    <span>{item.comment}</span>
                                </button>

                                <button className="flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-gray-100">
                                    <Share2 size={18} />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default PostCard;