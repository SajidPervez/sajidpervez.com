import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_DwZ9SlxK.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_lZVpnl8W.mjs';

const html = "<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","author":"Astro Learner","description":"After learning some Astro, I couldn't stop!","cover":"../images/post-1-cover.jpg","altText":"2nd blog image","pubDate":"08-09-2023","isDraft":false,"tags":["astro","blogging","learning in public","successes"],"canonicalURL":"https://localhost:4321/blog/post-2"};
				const file = "/home/sajid/sajidpervez.com/src/content/blog/post-2.md";
				const url = undefined;
				function rawContent() {
					return "After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!";
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
