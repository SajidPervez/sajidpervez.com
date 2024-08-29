import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_DwZ9SlxK.mjs';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_lZVpnl8W.mjs';
import { $ as $$Image } from './_astro_assets_B5NxTYdv.mjs';
import 'clsx';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$MarkdownPostLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/MarkdownPostLayout.astro",
  "title": "My fifth Blog Post",
  "pubDate": "2022-07-01",
  "description": "This is the first post of my new Astro blog.",
  "author": "Astro Learner",
  "isDraft": false,
  "cover": "../images/post-1-cover.jpg",
  "altText": "The Astro logo on a dark background with a pink glow.",
  "tags": ["astro", "blogging", "learning in public"],
  "canonicalURL": "https://localhost:4321/blog/post-5"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "my-fifth-blog-post",
    "text": "My Fifth Blog Post"
  }, {
    "depth": 2,
    "slug": "what-ive-accomplished",
    "text": "What I’ve accomplished"
  }, {
    "depth": 2,
    "slug": "whats-next",
    "text": "What’s next"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "my-fifth-blog-post",
      children: "My Fifth Blog Post"
    }), "\n", createVNode(_components.p, {
      children: "Published on: 2022-07-01"
    }), "\n", createVNode(_components.p, {
      children: ["Welcome to my ", createVNode(_components.em, {
        children: "new blog"
      }), " about learning Astro! Here, I will share my learning journey as I build a new website."]
    }), "\n", createVNode(_components.h2, {
      id: "what-ive-accomplished",
      children: "What I’ve accomplished"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Installing Astro"
          }), ": First, I created a new Astro project and set up my online accounts."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Making Pages"
          }), ": I then learned how to make pages by creating new ", createVNode(_components.code, {
            children: ".astro"
          }), " files and placing them in the ", createVNode(_components.code, {
            children: "src/pages/"
          }), " folder."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Making Blog Posts"
          }), ": This is my first blog post! I now have Astro pages and Markdown posts!"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "whats-next",
      children: "What’s next"
    }), "\n", createVNode(_components.p, {
      children: "I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come."
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "src/content/blog/post-5.mdx";
const file = "/home/sajid/sajidpervez.com/src/content/blog/post-5.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/sajid/sajidpervez.com/src/content/blog/post-5.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
