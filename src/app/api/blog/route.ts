import { NextResponse } from "next/server";

const GET = () => {
	return NextResponse.json({ hello: "hello" });
};

export { GET };
