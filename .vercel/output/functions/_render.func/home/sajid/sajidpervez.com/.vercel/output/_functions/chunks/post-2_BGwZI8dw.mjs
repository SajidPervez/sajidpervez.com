const id = "post-2.md";
						const collection = "blog";
						const slug = "post-2";
						const body = "After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!";
						const data = {title:"My Second Blog Post",author:"Astro Learner",isDraft:false,pubDate:new Date(1691503200000),tags:["astro","blogging","learning in public","successes"],cover:
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
					,altText:"2nd blog image",canonicalURL:"https://localhost:4321/blog/post-2"};
						const _internal = {
							type: 'content',
							filePath: "/home/sajid/sajidpervez.com/src/content/blog/post-2.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
