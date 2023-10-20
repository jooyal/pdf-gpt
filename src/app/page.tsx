import Link from "next/link";
import { MaxWidthWrapper } from "../components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
	return (
		<div>
			<MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
				<div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:boder-gray-300 hover:bg-white/50 text-indigo-700">
					<p className="text-sm font-mono text-gray-700">PDF-GPT is now public!</p>
				</div>
				<h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
					Chat with your <span className="text-green-600">document</span> in{" "}
					{/* <span className="underline decoration-red-500 animate-underline-grow">seconds</span>. */}
					{/* <span className="underline decoration-red-500 animate-underline-grow">seconds</span>. */}
					<span className="relative">
						seconds
						<span className="absolute bottom-0 left-0 w-0 h-1.5 bg-red-500 animate-underline-grow"></span>
					</span>
				</h1>
				<p className="mt-5 max-w-prose text-zinc-700 font-mono sm:text-lg">
					PDF-GPT allows you to chat with any pdf documents. Upload your files and start asking your
					questions right away.
				</p>
				<Link
					href="/dashboard"
					target="_blank"
					className={buttonVariants({ size: "lg", className: "mt-5" })}
				>
					Get Started <ArrowRight className="ml-2 h-5 w-5" />
				</Link>
			</MaxWidthWrapper>
		</div>
	);
}
