import React from "react";
import Head from "next/head";
import { IPost } from "../models/IPost";
import { InferGetStaticPropsType } from "next";
import { Container, Main, BlogTitle, List, 
    ListItem, PostTitle } from "../styles/emotion";

const title: string = "Next.js + TypeScript!";

export default function 
index({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log({ posts });
    return (
        <Container>
            <Head>
                <title>Egghead</title>
                <link rel="icon" href="peace.png" />
            </Head>

            <Main>
                <BlogTitle className="title">{title}</BlogTitle>
                <List>
                    {posts.map((post) => (
                        <ListItem key={post.id}>
                            <PostTitle>{post.title}</PostTitle>
                        </ListItem>
                    ))}
                </List>
            </Main>
        </Container>
    );
};

const URL = "https://jsonplaceholder.typicode.com/posts";

export const getStaticProps = async () => {
    const res = await fetch(URL);
    const posts: IPost[] = await res.json();
    return {
        props: {
            posts: posts
        }
    }
};




