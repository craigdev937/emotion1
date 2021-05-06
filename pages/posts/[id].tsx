import { Article } from "../../styles/Article";
import { GetStaticPropsContext, GetStaticPaths } from "next";
import { IPost } from "../../models/IPost";

export default function BlogPost({ post }: IPost) {

    return (
        <Article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </Article>
    );
};

const URL = "https://jsonplaceholder.typicode.com/posts";

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(URL);
    const posts: IPost[] = await res.json();

    const paths = posts.map((post) => ({
        params: {id: post.id.toString()},
    }));

    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps = 
async (context: GetStaticPropsContext) => {
    const { params } = context;
    const emptyPost = {
        title: "Post not found!",
        body: "",
        id: 0,
        userId: 0,
    };
    
    if (!params?.id) {
        return {
            props: {
                post: emptyPost
            }
        }
    };

    const res = await fetch(`${URL}/${params.id}`);
    const post: IPost = await res.json();
    return {
        props: {
            post: post
        }
    }
};



