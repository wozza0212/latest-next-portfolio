import { getPostData, getAllPostSlugs } from "@/app/lib/get-posts";

const Blog = async () => {
    const allPostsData = getAllPostSlugs();
    console.log(`allPostsData: ${allPostsData}`)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1 className="text-5xl font-bold text-center">All Blog Posst Blog</h1>
          <p className="text-center">
           All Blog Posts page
          </p>
        </div>
      </main>
    );
  }
  
  export default Blog;