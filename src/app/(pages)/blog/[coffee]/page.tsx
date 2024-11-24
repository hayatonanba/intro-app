const BlogArticlePage = ({ params }: { params: { coffee: string } }) => {
	return (
		<div>
			<p>{params.coffee}</p>
		</div>
	);
};

export default BlogArticlePage;
