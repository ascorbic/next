import Head from "next/head";
import Link from "next/link";

const Blog = () => {
    return (
        <>
            <Head>
                <title>My blog</title>
            </Head>
            <div>Welcome, blog reader</div>
            <Link href="/">
                <a>go back home</a>
            </Link>
        </>
    )
}

export default Blog;