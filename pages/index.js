import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container max-w-screen-lg mx-auto flex flex-col justify-between items-center pt-40 h-screen">
				<h1 className="font-mono text-3xl font-semibold text-gray-700">
					Welcome to{" "}
					<a
						href="https://nextjs.org"
						className="text-blue-500 underline transition-all hover:text-blue-700"
					>
						Next.js with Mongoose!
					</a>
				</h1>
				<div className="mb-20 w-full text-center pt-10">
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</div>
			</main>
		</div>
	);
}
