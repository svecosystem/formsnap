import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { L as Layout, P, A, H as H2, a as Pre } from "./layout.js";
import "./index3.js";
import "./index4.js";
import "./index.js";
import "clsx";
import { S as Steps } from "./steps.js";
import { H as H3 } from "./h3.js";
const metadata = {
  "title": "Introduction",
  "description": "What is this?"
};
const Introduction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Formsnap takes the already incredible ${validate_component(A, "Components.a").$$render(
            $$result,
            {
              href: "https://github.com/ciscoheat/sveltekit-superforms",
              rel: "nofollow"
            },
            {},
            {
              default: () => {
                return `sveltekit-superforms`;
              }
            }
          )} (winner of ${validate_component(A, "Components.a").$$render(
            $$result,
            {
              href: "https://hack.sveltesociety.dev/winners",
              rel: "nofollow"
            },
            {},
            {
              default: () => {
                return `Svelte Hack 2023`;
              }
            }
          )} for best library), made by the brilliant ${validate_component(A, "Components.a").$$render(
            $$result,
            {
              href: "https://github.com/ciscoheat",
              rel: "nofollow"
            },
            {},
            {
              default: () => {
                return `Andreas Söderlund`;
              }
            }
          )} and adds a component layer of abstraction to make it even simpler to use while also providing more accessible forms by default.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `By design, ${validate_component(A, "Components.a").$$render(
            $$result,
            {
              href: "https://superforms.rocks",
              rel: "nofollow"
            },
            {},
            {
              default: () => {
                return `Superforms`;
              }
            }
          )} is a very low-level library that gives you the tools to build and customize the behavior of your forms to your liking. Unfortunately, this also comes at the cost of writing some boilerplate code to get a form up and running. Since most applications are form heavy, this can become quite tedious, time consuming, and error prone.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Formsnap aims to solve this by providing you with a set of components that <em data-svelte-h="svelte-q9thwe">automagically</em> handle a lot of the boilerplate, while still giving you the ability to customize the behavior of your forms. Additionally, your forms will be accessible by default. You don&#39;t even have to think about it. Everyone wins!`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `To better demonstrate the value-add, let&#39;s look at what it takes to build an accessible signup form that has custom client-side validation using <em data-svelte-h="svelte-1o348iw">only</em> Superforms, and compare it to the same when you combine it with Formsnap.`;
        }
      })} ${validate_component(H2, "Components.h2").$$render($$result, {}, {}, {
        default: () => {
          return `Initializing a Superform`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Since the following steps are the same whether you&#39;re just using Superforms, or combining it with Formsnap, we&#39;ll use this same initialization code for both examples.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `If you aren&#39;t already familiar with Superforms, it&#39;s highly recommended that you check out the ${validate_component(A, "Components.a").$$render(
            $$result,
            {
              href: "https://superforms.rocks",
              rel: "nofollow"
            },
            {},
            {
              default: () => {
                return `documentation`;
              }
            }
          )} before continuing. It&#39;s a fantastic library that you&#39;ll need to understand the basics of in order to get the most out of this project.`;
        }
      })} ${validate_component(Steps, "Steps").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
            default: () => {
              return `Define a Zod schema`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `Superforms requires us to define a ${validate_component(A, "Components.a").$$render($$result, { href: "https://zod.dev", rel: "nofollow" }, {}, {
                default: () => {
                  return `Zod`;
                }
              })} schema that describes the shape of our form. This schema is then used to validate the form data on the client (optional) and server, along with some other useful things.`;
            }
          })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="ts" data-theme="dark" data-svelte-h="svelte-1fi2jq4">src/routes/sign-up/schema.ts</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "ts",
              "data-theme": "dark"
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #7DCFFF">import</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">z</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #A9B1D6"> </span><span style="color: #7DCFFF">from</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">zod</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">signupFormSchema</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">z</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">object</span><span style="color: #9ABDF5">(&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">name</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">z</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">string</span><span style="color: #9ABDF5">()</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">min</span><span style="color: #9ABDF5">(</span><span style="color: #FF9E64">2</span><span style="color: #9ABDF5">)</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">max</span><span style="color: #9ABDF5">(</span><span style="color: #FF9E64">100</span><span style="color: #9ABDF5">)</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">email</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">z</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">string</span><span style="color: #9ABDF5">()</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">email</span><span style="color: #9ABDF5">()</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">password</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">z</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">string</span><span style="color: #9ABDF5">()</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">min</span><span style="color: #9ABDF5">(</span><span style="color: #FF9E64">10</span><span style="color: #9ABDF5">)</span></span>
<span data-line=""><span style="color: #9ABDF5">&#125;)</span><span style="color: #89DDFF">;</span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}<div data-rehype-pretty-code-title data-language="ts" data-theme="light" data-svelte-h="svelte-1w98p3y">src/routes/sign-up/schema.ts</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "ts",
              "data-theme": "light",
              "data-non-pp": true
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="light" style="display: grid;"><span data-line=""><span style="color: #0F4B6E">import</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">z</span><span style="color: #484C61"> &#125;</span><span style="color: #343B59"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">zod</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #5A4A78">signupFormSchema</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #343B58">z</span><span style="color: #4C505E">.</span><span style="color: #34548A">object</span><span style="color: #484C61">(&#123;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">name</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">z</span><span style="color: #4C505E">.</span><span style="color: #34548A">string</span><span style="color: #484C61">()</span><span style="color: #4C505E">.</span><span style="color: #34548A">min</span><span style="color: #484C61">(</span><span style="color: #965027">2</span><span style="color: #484C61">)</span><span style="color: #4C505E">.</span><span style="color: #34548A">max</span><span style="color: #484C61">(</span><span style="color: #965027">100</span><span style="color: #484C61">)</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">email</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">z</span><span style="color: #4C505E">.</span><span style="color: #34548A">string</span><span style="color: #484C61">()</span><span style="color: #4C505E">.</span><span style="color: #34548A">email</span><span style="color: #484C61">()</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">password</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">z</span><span style="color: #4C505E">.</span><span style="color: #34548A">string</span><span style="color: #484C61">()</span><span style="color: #4C505E">.</span><span style="color: #34548A">min</span><span style="color: #484C61">(</span><span style="color: #965027">10</span><span style="color: #484C61">)</span></span>
<span data-line=""><span style="color: #484C61">&#125;)</span><span style="color: #4C505E">;</span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}</div> ${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
            default: () => {
              return `Return the form from a load function`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `To seamlessly merge <code data-svelte-h="svelte-1mgw8u7">PageData</code> and <code data-svelte-h="svelte-kvt12y">ActionData</code>, we need to return the form from a load function. While this may seem a bit strange, if you&#39;ve ever tried to wrangle <code data-svelte-h="svelte-1mgw8u7">PageData</code> and <code data-svelte-h="svelte-kvt12y">ActionData</code> together manually, then you know why this is necessary.`;
            }
          })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="ts" data-theme="dark" data-svelte-h="svelte-sjec0g">src/routes/sign-up/+page.server.ts</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "ts",
              "data-theme": "dark"
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #7DCFFF">import</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">type</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">PageServerLoad</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #A9B1D6"> </span><span style="color: #7DCFFF">from</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./$types</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #7DCFFF">import</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">signupFormSchema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #A9B1D6"> </span><span style="color: #7DCFFF">from</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schema</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #7DCFFF">import</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">superValidate</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #A9B1D6"> </span><span style="color: #7DCFFF">from</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">sveltekit-superforms/server</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #7DCFFF">export</span><span style="color: #A9B1D6"> </span><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #7AA2F7">load</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">PageServerLoad</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">()</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">=></span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #9ABDF5">  </span><span style="color: #BB9AF7">return</span><span style="color: #9ABDF5"> &#123;</span></span>
<span data-line=""><span style="color: #9ABDF5">    </span><span style="color: #73DACA">form</span><span style="color: #89DDFF">:</span><span style="color: #9ABDF5"> </span><span style="color: #7AA2F7">superValidate</span><span style="color: #9ABDF5">(</span><span style="color: #C0CAF5">signupFormSchema</span><span style="color: #9ABDF5">)</span></span>
<span data-line=""><span style="color: #9ABDF5">  &#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}<div data-rehype-pretty-code-title data-language="ts" data-theme="light" data-svelte-h="svelte-aui1ii">src/routes/sign-up/+page.server.ts</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "ts",
              "data-theme": "light",
              "data-non-pp": true
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="light" style="display: grid;"><span data-line=""><span style="color: #0F4B6E">import</span><span style="color: #343B59"> </span><span style="color: #5A4A78">type</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">PageServerLoad</span><span style="color: #484C61"> &#125;</span><span style="color: #343B59"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./$types</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #0F4B6E">import</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">signupFormSchema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B59"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schema</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #0F4B6E">import</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">superValidate</span><span style="color: #484C61"> &#125;</span><span style="color: #343B59"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">sveltekit-superforms/server</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #0F4B6E">export</span><span style="color: #343B59"> </span><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #34548A">load</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">PageServerLoad</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #484C61">()</span><span style="color: #343B59"> </span><span style="color: #5A4A78">=></span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #484C61">  </span><span style="color: #5A4A78; font-style: italic">return</span><span style="color: #484C61"> &#123;</span></span>
<span data-line=""><span style="color: #484C61">    </span><span style="color: #33635C">form</span><span style="color: #4C505E">:</span><span style="color: #484C61"> </span><span style="color: #34548A">superValidate</span><span style="color: #484C61">(</span><span style="color: #343B58">signupFormSchema</span><span style="color: #484C61">)</span></span>
<span data-line=""><span style="color: #484C61">  &#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}</div>`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Before we dive into the following code examples, it&#39;s important to note that we&#39;re intentionally opting out of the native form validation provided by the browser, and instead using our own client-side validation. The reason for this is quite simple. Native browser validation while accessible, is not very customizable, and certainly not pretty.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Having this in mind, we now have the responsibility of ensuring our form is still accessible to users who may be using assistive technology. We&#39;ll be using the ${validate_component(A, "Components.a").$$render(
            $$result,
            {
              href: "https://www.w3.org/WAI/standards-guidelines/aria/",
              rel: "nofollow"
            },
            {},
            {
              default: () => {
                return `WAI ARIA`;
              }
            }
          )} spec to help us with this. If you discover any accessibility issues with the code in this guide or with Formsnap in general, please ${validate_component(A, "Components.a").$$render(
            $$result,
            {
              href: "https://github.com/huntabyte/formsnap/issues/new",
              rel: "nofollow"
            },
            {},
            {
              default: () => {
                return `open an issue`;
              }
            }
          )} so we can address it.`;
        }
      })} ${validate_component(H2, "Components.h2").$$render($$result, {}, {}, {
        default: () => {
          return `Using <em data-svelte-h="svelte-1o348iw">only</em> Superforms`;
        }
      })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-16b0bt">src/routes/sign-up/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="svelte" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">script</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">ts</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">type</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">PageData</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./$types</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">superForm</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">sveltekit-superforms/client</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">signupFormSchema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schemas.ts</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">export</span><span style="color: #C0CAF5"> </span><span style="color: #9D7CD8">let</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">data</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> PageData</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #9D7CD8">const</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">,</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">errors</span><span style="color: #89DDFF">,</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">enhance</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">&#125;</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">=</span><span style="color: #C0CAF5"> </span><span style="color: #7AA2F7">superForm</span><span style="color: #9ABDF5">(</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form</span><span style="color: #89DDFF">,</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #C0CAF5">    </span><span style="color: #73DACA">validators</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> signupFormSchema</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #9ABDF5">&#125;)</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">script</span><span style="color: #BA3C97">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">form</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">POST</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">use</span><span style="color: #89DDFF">:</span><span style="color: #7AA2F7">enhance</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">label</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">for</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">name</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Name</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">input</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">name</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">name</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">aria-describedby</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">name</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">?</span><span style="color: #DE5971"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">name-error name-desc</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">:</span><span style="color: #DE5971"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">name-desc</span><span style="color: #89DDFF">"</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">aria-invalid</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">name</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">?</span><span style="color: #DE5971"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">true</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">:</span><span style="color: #DE5971"> </span><span style="color: #FF9E64">undefined</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">bind</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5">value</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">form</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">name&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">span</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">name-desc</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Be sure to use your real name.</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">span</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">span</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">name-error</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">aria-live</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">assertive</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">#</span><span style="color: #BB9AF7">if</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">name</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">name&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">/</span><span style="color: #BB9AF7">if</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">span</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">label</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">for</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Email</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">input</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">aria-describedby</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">email</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">?</span><span style="color: #DE5971"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email-error email-desc</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">:</span><span style="color: #DE5971"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email-desc</span><span style="color: #89DDFF">"</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">aria-invalid</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">email</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">?</span><span style="color: #DE5971"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">true</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">:</span><span style="color: #DE5971"> </span><span style="color: #FF9E64">undefined</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">bind</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5">value</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">form</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">email&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">span</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email-desc</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">It's preferred that you use your company email.</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">span</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">span</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email-error</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">aria-live</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">assertive</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">#</span><span style="color: #BB9AF7">if</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">email</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">email&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">/</span><span style="color: #BB9AF7">if</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">span</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">label</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">for</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">password</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Password</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">input</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">password</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">password</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">password</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">aria-describedby</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">password</span></span>
<span data-line=""><span style="color: #DE5971">      </span><span style="color: #BB9AF7">?</span><span style="color: #DE5971"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">password-error password-desc</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">      </span><span style="color: #BB9AF7">:</span><span style="color: #DE5971"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">password-desc</span><span style="color: #89DDFF">"</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">aria-invalid</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">password</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">?</span><span style="color: #DE5971"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">true</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">:</span><span style="color: #DE5971"> </span><span style="color: #FF9E64">undefined</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #BB9AF7">bind</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5">value</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">form</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">password&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">span</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">password-desc</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Ensure the password is at least 10 characters.</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">span</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">span</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">id</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">password-error</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">aria-live</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">assertive</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">#</span><span style="color: #BB9AF7">if</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">password</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #7DCFFF">&#123;</span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">password&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">/</span><span style="color: #BB9AF7">if</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">span</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">button</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Submit</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">button</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">form</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-idzvit">src/routes/sign-up/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="svelte" data-theme="light" style="display: grid;"><span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">script</span><span style="color: #69323D"> </span><span style="color: #5A4A78">lang</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">ts</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #5A4A78">type</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">PageData</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./$types</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">superForm</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">sveltekit-superforms/client</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">signupFormSchema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schemas.ts</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">export</span><span style="color: #343B58"> </span><span style="color: #565F89; font-style: italic">let</span><span style="color: #343B58"> </span><span style="color: #5A4A78">data</span><span style="color: #4C505E">:</span><span style="color: #343B58"> PageData</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B58"> </span><span style="color: #4C505E">&#123;</span><span style="color: #343B58"> </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">,</span><span style="color: #343B58"> </span><span style="color: #5A4A78">errors</span><span style="color: #4C505E">,</span><span style="color: #343B58"> </span><span style="color: #5A4A78">enhance</span><span style="color: #343B58"> </span><span style="color: #4C505E">&#125;</span><span style="color: #343B58"> </span><span style="color: #4C505E">=</span><span style="color: #343B58"> </span><span style="color: #34548A">superForm</span><span style="color: #484C61">(</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form</span><span style="color: #4C505E">,</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B58">    </span><span style="color: #33635C">validators</span><span style="color: #4C505E">:</span><span style="color: #343B58"> signupFormSchema</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #484C61">&#125;)</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">script</span><span style="color: #B05467">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">form</span><span style="color: #69323D"> </span><span style="color: #5A4A78">method</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">POST</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">use</span><span style="color: #4C505E">:</span><span style="color: #34548A">enhance</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">label</span><span style="color: #69323D"> </span><span style="color: #5A4A78">for</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">name</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span><span style="color: #343B59">Name</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">input</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">id</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">name</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">name</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">aria-describedby</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">name</span><span style="color: #69323D"> </span><span style="color: #5A4A78">?</span><span style="color: #69323D"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">name-error name-desc</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">:</span><span style="color: #69323D"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">name-desc</span><span style="color: #4C505E">"</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">aria-invalid</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">name</span><span style="color: #69323D"> </span><span style="color: #5A4A78">?</span><span style="color: #69323D"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">true</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">:</span><span style="color: #69323D"> </span><span style="color: #965027">undefined</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">bind</span><span style="color: #4C505E">:</span><span style="color: #343B58">value</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">form</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">name&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">span</span><span style="color: #69323D"> </span><span style="color: #5A4A78">id</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">name-desc</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span><span style="color: #343B59">Be sure to use your real name.</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">span</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">span</span><span style="color: #69323D"> </span><span style="color: #5A4A78">id</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">name-error</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">aria-live</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">assertive</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #484C61">&#123;</span><span style="color: #4C505E">#</span><span style="color: #5A4A78">if</span><span style="color: #343B59"> </span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">name</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">name&#125;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #484C61">&#123;</span><span style="color: #4C505E">/</span><span style="color: #5A4A78">if</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">span</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">label</span><span style="color: #69323D"> </span><span style="color: #5A4A78">for</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span><span style="color: #343B59">Email</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">input</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">id</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">type</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">aria-describedby</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">email</span><span style="color: #69323D"> </span><span style="color: #5A4A78">?</span><span style="color: #69323D"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">email-error email-desc</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">:</span><span style="color: #69323D"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">email-desc</span><span style="color: #4C505E">"</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">aria-invalid</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">email</span><span style="color: #69323D"> </span><span style="color: #5A4A78">?</span><span style="color: #69323D"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">true</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">:</span><span style="color: #69323D"> </span><span style="color: #965027">undefined</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">bind</span><span style="color: #4C505E">:</span><span style="color: #343B58">value</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">form</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">email&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">span</span><span style="color: #69323D"> </span><span style="color: #5A4A78">id</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email-desc</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span><span style="color: #343B59">It's preferred that you use your company email.</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">span</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">span</span><span style="color: #69323D"> </span><span style="color: #5A4A78">id</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email-error</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">aria-live</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">assertive</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #484C61">&#123;</span><span style="color: #4C505E">#</span><span style="color: #5A4A78">if</span><span style="color: #343B59"> </span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">email</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">email&#125;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #484C61">&#123;</span><span style="color: #4C505E">/</span><span style="color: #5A4A78">if</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">span</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">label</span><span style="color: #69323D"> </span><span style="color: #5A4A78">for</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">password</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span><span style="color: #343B59">Password</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">input</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">id</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">password</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">password</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">type</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">password</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">aria-describedby</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">password</span></span>
<span data-line=""><span style="color: #69323D">      </span><span style="color: #5A4A78">?</span><span style="color: #69323D"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">password-error password-desc</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">      </span><span style="color: #5A4A78">:</span><span style="color: #69323D"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">password-desc</span><span style="color: #4C505E">"</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">aria-invalid</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">password</span><span style="color: #69323D"> </span><span style="color: #5A4A78">?</span><span style="color: #69323D"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">true</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">:</span><span style="color: #69323D"> </span><span style="color: #965027">undefined</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #5A4A78">bind</span><span style="color: #4C505E">:</span><span style="color: #343B58">value</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">form</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">password&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">span</span><span style="color: #69323D"> </span><span style="color: #5A4A78">id</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">password-desc</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span><span style="color: #343B59">Ensure the password is at least 10 characters.</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">span</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">span</span><span style="color: #69323D"> </span><span style="color: #5A4A78">id</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">password-error</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">aria-live</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">assertive</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #484C61">&#123;</span><span style="color: #4C505E">#</span><span style="color: #5A4A78">if</span><span style="color: #343B59"> </span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">password</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #0F4B6E">&#123;</span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">password&#125;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #484C61">&#123;</span><span style="color: #4C505E">/</span><span style="color: #5A4A78">if</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">span</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">button</span><span style="color: #B05467">></span><span style="color: #343B59">Submit</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">button</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">form</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `That&#39;s quite a bit of code required to get a simple, accessible form up and running. While clearly possible, we can&#39;t move as quickly as we&#39;d like to, it&#39;s not very DRY, and it&#39;s a bit ugly to look at.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `All is not lost though, as the whole idea behind Formsnap is to make this process simpler, without sacrificing too much of the flexibility that Superforms provides.`;
        }
      })} ${validate_component(H2, "Components.h2").$$render($$result, {}, {}, {
        default: () => {
          return `Using Superforms <em data-svelte-h="svelte-5z4sw5">and</em> Formsnap`;
        }
      })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-16b0bt">src/routes/sign-up/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="svelte" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">script</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">ts</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">type</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">PageData</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./$types</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">signupFormSchema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schemas.ts</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">Form</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">formsnap</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">export</span><span style="color: #C0CAF5"> </span><span style="color: #9D7CD8">let</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">data</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> PageData</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">script</span><span style="color: #BA3C97">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">POST</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">schema</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">signupFormSchema</span><span style="color: #7DCFFF">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">config</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">name</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Name</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Input</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Be sure to use your real name.</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Validation</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Email</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Input</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      It's preferred that you use your company email.</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Validation</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">password</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Password</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Input</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">password</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      Ensure the password is at least 10 characters.</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Validation</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-idzvit">src/routes/sign-up/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="svelte" data-theme="light" style="display: grid;"><span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">script</span><span style="color: #69323D"> </span><span style="color: #5A4A78">lang</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">ts</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #5A4A78">type</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">PageData</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./$types</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">signupFormSchema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schemas.ts</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">Form</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">formsnap</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">export</span><span style="color: #343B58"> </span><span style="color: #565F89; font-style: italic">let</span><span style="color: #343B58"> </span><span style="color: #5A4A78">data</span><span style="color: #4C505E">:</span><span style="color: #343B58"> PageData</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">script</span><span style="color: #B05467">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #69323D"> </span><span style="color: #5A4A78">method</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">POST</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">schema</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">signupFormSchema</span><span style="color: #0F4B6E">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">config</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">name</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span><span style="color: #343B59">Name</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Input</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span><span style="color: #343B59">Be sure to use your real name.</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Validation</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span><span style="color: #343B59">Email</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Input</span><span style="color: #69323D"> </span><span style="color: #5A4A78">type</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      It's preferred that you use your company email.</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Validation</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">password</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span><span style="color: #343B59">Password</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Input</span><span style="color: #69323D"> </span><span style="color: #5A4A78">type</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">password</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      Ensure the password is at least 10 characters.</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Validation</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `That&#39;s it! We just condensed a bunch of code, while retaining the same functionality. Now I know some of you might be thinking, &quot;gross, how many times do I have to type Form?&quot;, and I hear you.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `You can alias the names to whatever floats your boat, here&#39;s an example:`;
        }
      })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="ts" data-theme="dark" data-svelte-h="svelte-8vul9p">src/lib/no-form-form.ts</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "ts",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #7DCFFF">import</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #C0CAF5">Form</span><span style="color: #9ABDF5"> </span><span style="color: #89DDFF">as</span><span style="color: #9ABDF5"> </span><span style="color: #52BACD">FormSnap</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #A9B1D6"> </span><span style="color: #7DCFFF">from</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">formsnap</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">Form</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">FormSnap</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">Root</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">Field</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">FormSnap</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">Field</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">Label</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">FormSnap</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">Label</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">Input</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">FormSnap</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">Input</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">Description</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">FormSnap</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">Description</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">Validation</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">FormSnap</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">Validation</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #7DCFFF">export</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">Form</span><span style="color: #89DDFF">,</span><span style="color: #9ABDF5"> </span><span style="color: #52BACD">Field</span><span style="color: #89DDFF">,</span><span style="color: #9ABDF5"> </span><span style="color: #52BACD">Label</span><span style="color: #89DDFF">,</span><span style="color: #9ABDF5"> </span><span style="color: #52BACD">Input</span><span style="color: #89DDFF">,</span><span style="color: #9ABDF5"> </span><span style="color: #52BACD">Description</span><span style="color: #89DDFF">,</span><span style="color: #9ABDF5"> </span><span style="color: #52BACD">Validation</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #89DDFF">;</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}<div data-rehype-pretty-code-title data-language="ts" data-theme="light" data-svelte-h="svelte-127wuax">src/lib/no-form-form.ts</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "ts",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="light" style="display: grid;"><span data-line=""><span style="color: #0F4B6E">import</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123; </span><span style="color: #343B58">Form</span><span style="color: #484C61"> </span><span style="color: #4C505E">as</span><span style="color: #484C61"> </span><span style="color: #166775">FormSnap</span><span style="color: #484C61"> &#125;</span><span style="color: #343B59"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">formsnap</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #5A4A78">Form</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #343B58">FormSnap</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">Root</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #5A4A78">Field</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #343B58">FormSnap</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">Field</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #5A4A78">Label</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #343B58">FormSnap</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">Label</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #5A4A78">Input</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #343B58">FormSnap</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">Input</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #5A4A78">Description</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #343B58">FormSnap</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">Description</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #5A4A78">Validation</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #343B58">FormSnap</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">Validation</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #0F4B6E">export</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">Form</span><span style="color: #4C505E">,</span><span style="color: #484C61"> </span><span style="color: #166775">Field</span><span style="color: #4C505E">,</span><span style="color: #484C61"> </span><span style="color: #166775">Label</span><span style="color: #4C505E">,</span><span style="color: #484C61"> </span><span style="color: #166775">Input</span><span style="color: #4C505E">,</span><span style="color: #484C61"> </span><span style="color: #166775">Description</span><span style="color: #4C505E">,</span><span style="color: #484C61"> </span><span style="color: #166775">Validation</span><span style="color: #484C61"> &#125;</span><span style="color: #4C505E">;</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `If aliasing isn&#39;t your cup of tea either, there are alternative ways to use Formsnap that while a bit more verbose, still provide the same functionality, while giving you the ability to use native HTML elements or your own custom components. You can read more about this in the ${validate_component(A, "Components.a").$$render($$result, { href: "/docs/headless-usage" }, {}, {
            default: () => {
              return `Headless usage`;
            }
          })} section of the docs.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `To get started using Formsnap, head over to the ${validate_component(A, "Components.a").$$render($$result, { href: "/docs/quick-start" }, {}, {
            default: () => {
              return `Quick start`;
            }
          })} section of the docs, where you&#39;ll learn how to install and use the library.`;
        }
      })}`;
    }
  })}`;
});
export {
  Introduction as default,
  metadata
};
