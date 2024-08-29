const id = "post-5.mdx";
						const collection = "blog";
						const slug = "post-5";
						const body = "\n# My Fifth Blog Post\n\nPublished on: 2022-07-01\n\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\n\n## What I've accomplished\n\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\n\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\n\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\n\n## What's next\n\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.";
						const data = {title:"My fifth Blog Post",author:"Astro Learner",isDraft:false,pubDate:new Date(1656633600000),tags:["astro","blogging","learning in public"],cover:
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
					,altText:"The Astro logo on a dark background with a pink glow.",canonicalURL:"https://localhost:4321/blog/post-5"};
						const _internal = {
							type: 'content',
							filePath: "/home/sajid/sajidpervez.com/src/content/blog/post-5.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
