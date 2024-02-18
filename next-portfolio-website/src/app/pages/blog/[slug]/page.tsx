import BlogPostFooter from "./components/footer";

const BlogPostPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p style={{ color: "white" }}>Blog Post Page</p>
      </div>
      <BlogPostFooter />
    </main>

  );
};

export default BlogPostPage;
