import { useRouter } from "next/router";
import React from "react";

const index = () => {
	const router = useRouter();

	router.push("/");

	return <div></div>;
};

export default index;
