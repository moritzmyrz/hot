import { IconButton } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/window";
import MenuDrawer from "./drawers/Menu";

const Header = () => {
	const { width } = useWindowDimensions();
	const router = useRouter();

	const [menu, setMenu] = useState(false);

	useEffect(() => {
		if (width > 650) setMenu(false);
	}, [width]);

	return (
		<header>
			<MenuDrawer open={menu} setOpen={setMenu} />
			<div className="flex flex-row justify-between items-center h-20 px-5 mb-2 bg-white mx-auto border-b-2 border-gray-300">
				<div
					className="h-full flex flex-row cursor-pointer"
					onClick={() => router.push("/")}
				>
					<div className="flex items-center">
						<Image src="/logo.png" width={60} height={60} layout="fixed" />
					</div>
					<span className="text-3xl font-bold mt-8 font-gotham">Hot</span>
				</div>
				{width > 650 ? (
					<div className="flex space-x-5 font-semibold text-2xl text-black">
						<Link href="/">
							<a className="hover:text-orange-500">Hjem</a>
						</Link>
						<Link href="/employees">
							<a className="hover:text-orange-500">Ansatte</a>
						</Link>
						<Link href="/contact">
							<a className="hover:text-orange-500">Kontakt Oss</a>
						</Link>
					</div>
				) : (
					<IconButton
						color="primary"
						onClick={() => {
							setMenu(true);
						}}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</IconButton>
				)}
			</div>
		</header>
	);
};

export default Header;
