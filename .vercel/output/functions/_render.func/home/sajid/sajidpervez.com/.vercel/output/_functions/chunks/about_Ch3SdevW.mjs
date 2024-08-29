import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DwZ9SlxK.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I am a product security engineer who is supposed to wear multiple hats within security multiple times during a day.</p>\n<ol>\n<li>I am core appsec engineer - talking to engineers about scanner findings and remediations, or doing threat modeling</li>\n<li>In the next meeting I am a cloud security person - helping a team with securing their api with cloud security controls</li>\n<li>Then I put on security architect hat - reviewing the solution architecture</li>\n<li>And at times I writing code to solve specific problem</li>\n</ol>\n<p>The role is an intersection of various skill sets from <em>cybersecurity</em>, <em>coding</em>, <em>empathy</em>, and full of <em>absolute challanges</em>.</p>";

				const frontmatter = {"title":"Sajid Pervez","pubDate":"01-07-2023","description":"This is the first post of my new Astro blog.","author":"Sajid","isDraft":false,"cover":["/src/assets/Sajid-1.jpeg","/src/assets/Sajid-2.jpeg","/src/assets/Sajid-3.jpeg"],"altText":"","tags":[],"canonicalURL":"https://localhost:4321/blog/about"};
				const file = "/home/sajid/sajidpervez.com/src/content/authors/about.md";
				const url = undefined;
				function rawContent() {
					return "\nI am a product security engineer who is supposed to wear multiple hats within security multiple times during a day.\n\n1. I am core appsec engineer - talking to engineers about scanner findings and remediations, or doing threat modeling \n2. In the next meeting I am a cloud security person - helping a team with securing their api with cloud security controls \n3. Then I put on security architect hat - reviewing the solution architecture \n4. And at times I writing code to solve specific problem \n\nThe role is an intersection of various skill sets from *cybersecurity*, *coding*, *empathy*, and full of *absolute challanges*.\n";
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

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
