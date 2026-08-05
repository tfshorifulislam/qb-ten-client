'use server';
import { Post } from "./types/post";

export const getPosts = async (): Promise<Post[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    return data;
};