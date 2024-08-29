const id = "post-3.md";
						const collection = "blog";
						const slug = "post-3";
						const body = "It wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!";
						const data = {title:"My Third Blog Post",author:"Astro Learner",isDraft:false,pubDate:new Date(1657843200000),tags:["astro","learning in public","setbacks","community"],cover:
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
					,altText:"The Astro logo on a dark background with rainbow rays.",canonicalURL:"https://localhost:4321/blog/post-3"};
						const _internal = {
							type: 'content',
							filePath: "/home/sajid/sajidpervez.com/src/content/blog/post-3.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
