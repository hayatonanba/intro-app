const getBlogArticle = async (id: string) => {
	const res = await fetch(`http://localhost:3000/api/blog/${id}`);

	const blogArticle = res.json();

	return blogArticle;
};

const BlogArticlePage = async ({ params }: { params: { coffee: string } }) => {
	const blogArticle = await getBlogArticle(params.coffee);

	return (
		<div className="container mx-auto py-5">
			<h2 className="text-[50px]">{blogArticle.title}</h2>
			<p>{blogArticle.content}</p>
		</div>
	);
};

export default BlogArticlePage;
