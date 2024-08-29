const id = "post-1.md";
						const collection = "blog";
						const slug = "post-1";
						const body = "\n\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\n\n## What I've accomplished\n\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\n\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\n\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\n\n## What's next\n\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.";
						const data = {title:"My First Blog Post",author:"Astro Learner",isDraft:false,pubDate:new Date(1673010000000),tags:["astro","blogging","learning in public"],cover:
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
					,altText:"fist blog image",canonicalURL:"https://localhost:4321/blog/post-1"};
						const _internal = {
							type: 'content',
							filePath: "/home/sajid/sajidpervez.com/src/content/blog/post-1.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
