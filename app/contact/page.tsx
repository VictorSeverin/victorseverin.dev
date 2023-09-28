"use client";
import { Github, Mail, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [

	{
		icon: <FileText size={20} />,
		href: "https://utfs.io/f/1d0b25c9-8907-4cb2-b5d3-002f193476c9-fgc05v.pdf",
		label: "Download",
		handle: "Resume",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:victor.severin7@gmail.com",
		label: "Email",
		handle: "victor.severin7@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/VictorSeverin",
		label: "Github",
		handle: "VictorSeverin",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/victor-severin-1a2589233/",
		label: "LinkedIn",
		handle: "Victor Severin",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
