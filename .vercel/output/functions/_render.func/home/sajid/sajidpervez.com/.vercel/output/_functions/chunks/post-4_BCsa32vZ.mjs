const id = "post-4.md";
						const collection = "blog";
						const slug = "post-4";
						const body = "This post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.";
						const data = {title:"My Fourth Blog Post",author:"Astro Learner",isDraft:false,pubDate:new Date(1659916800000),tags:["astro","successes"],cover:
						new Proxy({"src":"/_astro/post-1-cover.xUQltrRE.jpg","width":500,"height":326,"format":"jpg","fsPath":"/home/sajid/sajidpervez.com/src/content/images/post-1-cover.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sajid/sajidpervez.com/src/content/images/post-1-cover.jpg";
							}
							
							return target[name];
						}
					})
					,altText:"The word astro against an illustration of planets and stars.",canonicalURL:"https://localhost:4321/blog/post-4"};
						const _internal = {
							type: 'content',
							filePath: "/home/sajid/sajidpervez.com/src/content/blog/post-4.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
