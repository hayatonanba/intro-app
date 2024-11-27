import Link from "next/link";

interface TBlog {
	id: string;
	title: string;
	content: string;
}

const getBlogData = async () => {
	const res = await fetch("http://localhost:3000/api/blog");

	const blogData = await res.json();

	return blogData;
};

const BlogPage = async () => {
	const blogData = await getBlogData();

	return (
		<div className="container mx-auto py-[50px]">
			<div className="grid grid-cols-12 gap-3">
				{blogData.map((blog: TBlog) => (
					<div className="col-span-4 rounded border border-black p-5" key={blog.id}>
						<Link className="w-full" href={`/blog/${blog.id}`}>
							{blog.title}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogPage;
