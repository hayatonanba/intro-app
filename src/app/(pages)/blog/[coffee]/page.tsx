import { db } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore/lite"

export async function getStaticProps() {
	const querySnapShot = await getDocs(collection(db, 'blogs'))
	const blogs = querySnapShot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}))
  return {
	props: {
		blogs,
	},
  }
}

const BlogList = ({blogs}) => {
	return (
		<div>
			<h1>ブログ一覧</h1>
			{blogs.map((blog) => (
				<div key={blog.id}>
					<h2>{blog.title}</h2>
					<p>{blog.content}</p>
				</div>
			))}
		</div>
	)
}

export default BlogList;


// const getBlogArticle = async (id: string) => {
// 	const res = await fetch(`http://localhost:3000/api/blog/${id}`);

// 	const blogArticle = res.json();

// 	return blogArticle;
// };

// const BlogArticlePage = async ({ params }: { params: { coffee: string } }) => {
// 	const blogArticle = await getBlogArticle(params.coffee);

// 	return (
// 		<div className="container mx-auto py-5">
// 			<h2 className="text-[50px]">{blogArticle.title}</h2>
// 			<p>{blogArticle.content}</p>
// 		</div>
// 	);
// };

// export default BlogArticlePage;
