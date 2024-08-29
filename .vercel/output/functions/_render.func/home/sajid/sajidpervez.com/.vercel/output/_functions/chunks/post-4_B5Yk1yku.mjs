import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_DwZ9SlxK.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_lZVpnl8W.mjs';

const html = "<p>This post should show up with my other blog posts, because <code>Astro.glob()</code> is returning a list of all my posts in order to create my list.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Fourth Blog Post","author":"Astro Learner","description":"This post will show up on its own!","isDraft":false,"cover":"../images/post-1-cover.jpg","altText":"The word astro against an illustration of planets and stars.","pubDate":"2022-08-08","tags":["astro","successes"],"canonicalURL":"https://localhost:4321/blog/post-4"};
				const file = "/home/sajid/sajidpervez.com/src/content/blog/post-4.md";
				const url = undefined;
				function rawContent() {
					return "This post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
