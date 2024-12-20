import { type NextRequest, NextResponse } from "next/server";
import blogData from "../../../../../blog-data.json";

const GET = (_req: NextRequest, { params }: { params: { id: string } }) => {
	const { id } = params;
	const blogArticle = blogData.find((blog) => blog.id === id);

	if (!blogArticle) {
		return NextResponse.json({}, { status: 404 });
	}

	return NextResponse.json(blogArticle, { status: 200 });
};

export { GET };
