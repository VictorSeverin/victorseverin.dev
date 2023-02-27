import Link from "next/link";
import React from "react";
import { allProjects, Project } from "contentlayer/generated";
import { Navigation } from "../components/nav";

export default function ProjectsPage() {
	const featured = allProjects.find(
		(project) => project.slug === "planetfall",
	)!;
	const top2 = allProjects.find((project) => project.slug === "envshare")!;
	const top3 = allProjects.find((project) => project.slug === "qstash")!;
	const sorted = allProjects
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are from work and some are on my own time.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<article className="w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
						<div className="text-xs text-zinc-100">
							{featured.date ? (
								<time dateTime={new Date(featured.date).toISOString()}>
									{new Date(featured.date).toDateString()}
								</time>
							) : (
								<span>SOON</span>
							)}
						</div>
						<h2
							id="featured-post"
							className="mt-4 text-3xl font-bold tracking-tight text-zinc-100 group-hover:text-white sm:text-4xl font-display"
						>
							{featured.title}
						</h2>
						<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
							{featured.description}
						</p>
						<div className="mt-4">
							<Link
								className="text-zinc-200 hover:text-zinc-50"
								href={`/projects/${featured.slug}`}
							>
								Read more <span aria-hidden="true">&rarr;</span>
							</Link>
						</div>
					</article>
					<div className="flex flex-col w-full max-w-2xl gap-8 pt-12 mx-auto border-t border-gray-900/10 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
						{[top2, top3].map((project) => (
							<Card key={project.slug} project={project} />
						))}
					</div>
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid max-w-2xl grid-cols-1 gap-4 mx-auto lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
					{sorted.map((project) => (
						<Card key={project.slug} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}

const Card: React.FC<{ project: Project; border?: boolean }> = ({
	project,
	border,
}) => {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className={`flex max-w-xl flex-col items-start group   duration-200 transition-all py-4 lg:p-4  ${
				border
					? "hover:bg-zinc-900 hover:border-zinc-700 border border-zinc-800 rounded"
					: ""
			} `}
		>
			<div className="text-xs text-zinc-100">
				{project.date ? (
					<time dateTime={new Date(project.date).toISOString()}>
						{new Date(project.date).toDateString()}
					</time>
				) : (
					<span>SOON</span>
				)}
			</div>
			<div className="relative duration-150 ">
				<h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-100 group-hover:text-white font-display ">
					<span className="absolute inset-0" />
					{project.title}
				</h3>
				<p className="mt-5 text-sm leading-6 duration-150 text-zinc-400 line-clamp-3 group-hover:text-zinc-300">
					{project.description}
				</p>
			</div>
		</Link>
	);
};