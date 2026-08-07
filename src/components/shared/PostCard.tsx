import { getPosts } from "@/lib/getApi";
import { Post } from "@/lib/types/post";
import Image from "next/image";
import {
    ArrowBigUp,
    ArrowBigDown,
    MessageCircle,
    Share2,
} from "lucide-react";
import { Button } from "../ui/button";
const PostCard = async () => {
    const post: Post[] = await getPosts()
    return (
        <div className="space-y-6 p-4 md:p-0">
            {
                post.map
                    ((item: Post) =>
                        <div
                            key={item._id}
                            className="bg-[#fcfcfd] p-6 border border-[#C3C6D7] rounded-sm md:rounded-md lg:rounded-lg"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-12 overflow-hidden rounded-full">
                                    <Image
                                        src="/avatar.jpg"
                                        alt={item.userName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex justify-between w-full items-center">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-semibold text-gray-900">
                                            Q/{item.communityName}
                                        </span>

                                        {/* <span className="text-gray-400">•</span> */}

                                        {/* <span className="text-gray-500">
                                            u/{item.userName}
                                        </span> */}

                                        {/* <span className="text-gray-400">• 2h ago</span> */}
                                    </div>

                                    <div>
                                        <Button className="bg-blue-600 text-white hover:bg-blue-700">
                                            Join
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <div>
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
                                        className="object-cover rounded-sm md:rounded-md lg:rounded-lg"
                                    />
                                </div>
                            )}
                            {/* <div className="border-t w-full  mt-5"></div> */}

                            {/* Footer */}
                            {/* <div className="flex items-center gap-2 border-t px-4 py-3">
                                
                                <div className="flex items-center rounded-full bg-gray-100">
                                    <button className="flex items-center gap-1 rounded-l-full px-3 py-2 hover:bg-gray-200 transition">
                                        <ArrowBigUp size={20} />
                                        <span className="text-sm font-medium">{item.upvote}</span>
                                    </button>

                                    <button className="flex items-center gap-1 rounded-r-full px-3 py-2 hover:bg-gray-200 transition">
                                        <ArrowBigDown size={20} />
                                        <span className="text-sm font-medium">{item.downvote}</span>
                                    </button>
                                </div>

                               
                                <button className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-gray-100 transition">
                                    <MessageCircle size={18} />
                                    <span className="text-sm font-medium">{item.comment}</span>
                                </button>

                                
                                <button className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-gray-100 transition">
                                    <Share2 size={18} />
                                    <span className="text-sm font-medium">Share</span>
                                </button>
                            </div> */}
                        </div>
                    )
            }
        </div>
    );
};

export default PostCard;