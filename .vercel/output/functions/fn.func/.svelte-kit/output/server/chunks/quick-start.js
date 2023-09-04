import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { L as Layout, H as H2, P, A, a as Pre } from "./layout.js";
import "./index3.js";
import "./index4.js";
import "./index.js";
import "clsx";
import { S as Steps } from "./steps.js";
import { H as H3 } from "./h3.js";
const metadata = {
  "title": "Quick start",
  "description": "Learn how to take off with Formsnap by building a settings form."
};
const Quick_start = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(H2, "Components.h2").$$render($$result, {}, {}, {
        default: () => {
          return `Installation`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Since Formsnap is built on top of ${validate_component(A, "Components.a").$$render(
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
          )}, you&#39;ll need to install it as well as ${validate_component(A, "Components.a").$$render($$result, { href: "https://zod.dev", rel: "nofollow" }, {}, {
            default: () => {
              return `Zod`;
            }
          })}.`;
        }
      })} <div data-rehype-pretty-code-fragment>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "bash",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="bash" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #C0CAF5">npm</span><span style="color: #A9B1D6"> </span><span style="color: #9ECE6A">install</span><span style="color: #A9B1D6"> </span><span style="color: #9ECE6A">formsnap</span><span style="color: #A9B1D6"> </span><span style="color: #9ECE6A">sveltekit-superforms</span><span style="color: #A9B1D6"> </span><span style="color: #9ECE6A">zod</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "bash",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="bash" data-theme="light" style="display: grid;"><span data-line=""><span style="color: #343B58">npm</span><span style="color: #343B59"> </span><span style="color: #485E30">install</span><span style="color: #343B59"> </span><span style="color: #485E30">formsnap</span><span style="color: #343B59"> </span><span style="color: #485E30">sveltekit-superforms</span><span style="color: #343B59"> </span><span style="color: #485E30">zod</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(H2, "Components.h2").$$render($$result, {}, {}, {
        default: () => {
          return `Tutorial: Build a settings form`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Before diving into this tutorial, it&#39;s important to have some familiarity with ${validate_component(A, "Components.a").$$render(
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
          )}, as Formsnap is built on top of it and uses the same APIs.`;
        }
      })} ${validate_component(Steps, "Steps").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
            default: () => {
              return `Define a Zod schema`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `This schema will represent the shape of our form data. It&#39;s used to validate the form data on the client (optional) and server, along with some other useful things.`;
            }
          })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="ts" data-theme="dark" data-svelte-h="svelte-tt5f6q">src/routes/settings/schema.ts</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "ts",
              "data-theme": "dark"
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="ts" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #7DCFFF">import</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">z</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #A9B1D6"> </span><span style="color: #7DCFFF">from</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">zod</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">settingsSchema</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">z</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">object</span><span style="color: #9ABDF5">(&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">email</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">z</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">string</span><span style="color: #9ABDF5">()</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">email</span><span style="color: #9ABDF5">(</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">Please enter a valid email.</span><span style="color: #89DDFF">"</span><span style="color: #9ABDF5">)</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">bio</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">z</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">string</span><span style="color: #9ABDF5">()</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">optional</span><span style="color: #9ABDF5">()</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">theme</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">z</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">eum</span><span style="color: #9ABDF5">([</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">light</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">dark</span><span style="color: #89DDFF">"</span><span style="color: #9ABDF5">])</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">default</span><span style="color: #9ABDF5">(</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">light</span><span style="color: #89DDFF">"</span><span style="color: #9ABDF5">)</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">language</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">z</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">eum</span><span style="color: #9ABDF5">([</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">en</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">es</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">fr</span><span style="color: #89DDFF">"</span><span style="color: #9ABDF5">])</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">default</span><span style="color: #9ABDF5">(</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">en</span><span style="color: #89DDFF">"</span><span style="color: #9ABDF5">)</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">marketingEmails</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">z</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">boolean</span><span style="color: #9ABDF5">()</span><span style="color: #89DDFF">.</span><span style="color: #7AA2F7">default</span><span style="color: #9ABDF5">(</span><span style="color: #FF9E64">true</span><span style="color: #9ABDF5">)</span></span>
<span data-line=""><span style="color: #9ABDF5">&#125;)</span><span style="color: #89DDFF">;</span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}<div data-rehype-pretty-code-title data-language="ts" data-theme="light" data-svelte-h="svelte-94ug98">src/routes/settings/schema.ts</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "ts",
              "data-theme": "light",
              "data-non-pp": true
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="ts" data-theme="light" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #0F4B6E">import</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">z</span><span style="color: #484C61"> &#125;</span><span style="color: #343B59"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">zod</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #5A4A78">settingsSchema</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #343B58">z</span><span style="color: #4C505E">.</span><span style="color: #34548A">object</span><span style="color: #484C61">(&#123;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">email</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">z</span><span style="color: #4C505E">.</span><span style="color: #34548A">string</span><span style="color: #484C61">()</span><span style="color: #4C505E">.</span><span style="color: #34548A">email</span><span style="color: #484C61">(</span><span style="color: #4C505E">"</span><span style="color: #485E30">Please enter a valid email.</span><span style="color: #4C505E">"</span><span style="color: #484C61">)</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">bio</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">z</span><span style="color: #4C505E">.</span><span style="color: #34548A">string</span><span style="color: #484C61">()</span><span style="color: #4C505E">.</span><span style="color: #34548A">optional</span><span style="color: #484C61">()</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">theme</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">z</span><span style="color: #4C505E">.</span><span style="color: #34548A">eum</span><span style="color: #484C61">([</span><span style="color: #4C505E">"</span><span style="color: #485E30">light</span><span style="color: #4C505E">"</span><span style="color: #4C505E">,</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">dark</span><span style="color: #4C505E">"</span><span style="color: #484C61">])</span><span style="color: #4C505E">.</span><span style="color: #34548A">default</span><span style="color: #484C61">(</span><span style="color: #4C505E">"</span><span style="color: #485E30">light</span><span style="color: #4C505E">"</span><span style="color: #484C61">)</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">language</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">z</span><span style="color: #4C505E">.</span><span style="color: #34548A">eum</span><span style="color: #484C61">([</span><span style="color: #4C505E">"</span><span style="color: #485E30">en</span><span style="color: #4C505E">"</span><span style="color: #4C505E">,</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">es</span><span style="color: #4C505E">"</span><span style="color: #4C505E">,</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">fr</span><span style="color: #4C505E">"</span><span style="color: #484C61">])</span><span style="color: #4C505E">.</span><span style="color: #34548A">default</span><span style="color: #484C61">(</span><span style="color: #4C505E">"</span><span style="color: #485E30">en</span><span style="color: #4C505E">"</span><span style="color: #484C61">)</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">marketingEmails</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">z</span><span style="color: #4C505E">.</span><span style="color: #34548A">boolean</span><span style="color: #484C61">()</span><span style="color: #4C505E">.</span><span style="color: #34548A">default</span><span style="color: #484C61">(</span><span style="color: #965027">true</span><span style="color: #484C61">)</span></span>
<span data-line=""><span style="color: #484C61">&#125;)</span><span style="color: #4C505E">;</span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `Looking at the schema above, we know we&#39;ll need a few different input types to represent the different data types. We&#39;ll likely want to use a regular input for the email, a textarea for the bio, a select for language, a radio group for the theme, and a checkbox for the marketing email opt-in.`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `Of course, there are other ways to represent the data, but this is the approach we&#39;ll take for this tutorial.`;
            }
          })} ${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
            default: () => {
              return `Return the form from a load function`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `In Superforms fashion, we&#39;ll return the form from a load function to seamlessly merge our <code data-svelte-h="svelte-1mgw8u7">PageData</code> and <code data-svelte-h="svelte-kvt12y">ActionData</code>.`;
            }
          })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="ts" data-theme="dark" data-svelte-h="svelte-hiazie">src/routes/settings/+page.server.ts</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "ts",
              "data-theme": "dark"
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="ts" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #7DCFFF">import</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">type</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">PageServerLoad</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #A9B1D6"> </span><span style="color: #7DCFFF">from</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./$types</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #7DCFFF">import</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">settingsSchema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #A9B1D6"> </span><span style="color: #7DCFFF">from</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schema</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #7DCFFF">import</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">superValidate</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #A9B1D6"> </span><span style="color: #7DCFFF">from</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">sveltekit-superforms/server</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #7DCFFF">export</span><span style="color: #A9B1D6"> </span><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #7AA2F7">load</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">PageServerLoad</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">()</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">=></span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #9ABDF5">  </span><span style="color: #BB9AF7">return</span><span style="color: #9ABDF5"> &#123;</span></span>
<span data-line=""><span style="color: #9ABDF5">    </span><span style="color: #73DACA">form</span><span style="color: #89DDFF">:</span><span style="color: #9ABDF5"> </span><span style="color: #7AA2F7">superValidate</span><span style="color: #9ABDF5">(</span><span style="color: #C0CAF5">settingsSchema</span><span style="color: #9ABDF5">)</span></span>
<span data-line=""><span style="color: #9ABDF5">  &#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}<div data-rehype-pretty-code-title data-language="ts" data-theme="light" data-svelte-h="svelte-1430buw">src/routes/settings/+page.server.ts</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "ts",
              "data-theme": "light",
              "data-non-pp": true
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="ts" data-theme="light" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #0F4B6E">import</span><span style="color: #343B59"> </span><span style="color: #5A4A78">type</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">PageServerLoad</span><span style="color: #484C61"> &#125;</span><span style="color: #343B59"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./$types</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #0F4B6E">import</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">settingsSchema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B59"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schema</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #0F4B6E">import</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">superValidate</span><span style="color: #484C61"> &#125;</span><span style="color: #343B59"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B59"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">sveltekit-superforms/server</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #0F4B6E">export</span><span style="color: #343B59"> </span><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #34548A">load</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">PageServerLoad</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #484C61">()</span><span style="color: #343B59"> </span><span style="color: #5A4A78">=></span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #484C61">  </span><span style="color: #5A4A78; font-style: italic">return</span><span style="color: #484C61"> &#123;</span></span>
<span data-line=""><span style="color: #484C61">    </span><span style="color: #33635C">form</span><span style="color: #4C505E">:</span><span style="color: #484C61"> </span><span style="color: #34548A">superValidate</span><span style="color: #484C61">(</span><span style="color: #343B58">settingsSchema</span><span style="color: #484C61">)</span></span>
<span data-line=""><span style="color: #484C61">  &#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}</div> ${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
            default: () => {
              return `Setup the form in the page component`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `Now that we have our form in the <code data-svelte-h="svelte-1mgw8u7">PageData</code> object, we can use it, along with the schema we defined earlier, to setup the form in our page component.`;
            }
          })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-1loplxl">src/routes/settings/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "svelte",
              "data-theme": "dark"
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">script</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">ts</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">Form</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">formsnap</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">type</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">PageData</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./$types</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">settingsSchema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schemas.ts</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">export</span><span style="color: #C0CAF5"> </span><span style="color: #9D7CD8">let</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">data</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> PageData</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">script</span><span style="color: #BA3C97">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">schema</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">settingsSchema</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">config</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">debug</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #FF9E64">true</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">POST</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">&#x3C;!-- ... --></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-12w8mgl">src/routes/settings/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "svelte",
              "data-theme": "light",
              "data-non-pp": true
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="light" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">script</span><span style="color: #69323D"> </span><span style="color: #5A4A78">lang</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">ts</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">Form</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">formsnap</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #5A4A78">type</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">PageData</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./$types</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">settingsSchema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schemas.ts</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">export</span><span style="color: #343B58"> </span><span style="color: #565F89; font-style: italic">let</span><span style="color: #343B58"> </span><span style="color: #5A4A78">data</span><span style="color: #4C505E">:</span><span style="color: #343B58"> PageData</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">script</span><span style="color: #B05467">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">schema</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">settingsSchema</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">config</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">debug</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #965027">true</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">method</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">POST</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">&#x3C;!-- ... --></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `<code data-svelte-h="svelte-fwc7hy">Form.Root</code> is the component which renders a <code data-svelte-h="svelte-1addioz">&lt;form&gt;</code> element and provides the context for its children. It requires a <code data-svelte-h="svelte-24wwdm">form</code> prop which is the form we return from our load function, and a <code data-svelte-h="svelte-q0iv5r">schema</code> prop which is the Zod schema we defined earlier.`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `In addition to the required props, it also accepts any attribute you could normally pass to a <code data-svelte-h="svelte-1addioz">&lt;form&gt;</code> element, as well as an <code data-svelte-h="svelte-b8vks4">options</code> prop, which allows us to customize the form&#39;s behavior with the same options we can pass to <code data-svelte-h="svelte-1vw9uxx">superForm</code> when using it directly.`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `It also provides a <code data-svelte-h="svelte-1ubq5kq">config</code> slot prop, which we&#39;re accessing with <code data-svelte-h="svelte-14x7uzf">let:config</code>. This prop is used to properly type and wire up the form fields, which we&#39;ll see in the next step.`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `And lastly, we can pass a <code data-svelte-h="svelte-12m840n">debug</code> prop to enable debug mode, which will display Superform&#39;s <code data-svelte-h="svelte-46mqcu">&lt;SuperDebug /&gt;</code> component at the bottom of the form to help with debugging.`;
            }
          })} ${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
            default: () => {
              return `Constructing a form field`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `You can think of form fields as the building blocks of your form. Each input will have a form field responsible for managing its state, validation, and accessibility attributes. We&#39;ll start with the <code data-svelte-h="svelte-195v6zy">email</code> field and work our way down.`;
            }
          })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-1loplxl">src/routes/settings/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "svelte",
              "data-theme": "dark"
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">script</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">ts</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">Form</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">formsnap</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">type</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">PageData</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./$types</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">settingsSchema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schemas.ts</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">export</span><span style="color: #C0CAF5"> </span><span style="color: #9D7CD8">let</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">data</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> PageData</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">script</span><span style="color: #BA3C97">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">schema</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">settingsSchema</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">config</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">POST</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">debug</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #FF9E64">true</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #BA3C97">></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">&#x3C;!-- ... --></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-12w8mgl">src/routes/settings/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "svelte",
              "data-theme": "light",
              "data-non-pp": true
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="light" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">script</span><span style="color: #69323D"> </span><span style="color: #5A4A78">lang</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">ts</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">Form</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">formsnap</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #5A4A78">type</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">PageData</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./$types</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">settingsSchema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schemas.ts</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">export</span><span style="color: #343B58"> </span><span style="color: #565F89; font-style: italic">let</span><span style="color: #343B58"> </span><span style="color: #5A4A78">data</span><span style="color: #4C505E">:</span><span style="color: #343B58"> PageData</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">script</span><span style="color: #B05467">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">schema</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">settingsSchema</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">config</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">method</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">POST</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">debug</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #965027">true</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #B05467">></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">&#x3C;!-- ... --></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `We pass the <code data-svelte-h="svelte-1ubq5kq">config</code> slot prop we received from <code data-svelte-h="svelte-fwc7hy">Form.Root</code> to the field, along with the <code data-svelte-h="svelte-1x67wg7">name</code> of the field, which is typed to be a property of our schema.`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `Now that we have our field and the context has been setup under the hood, we can start adding the components that bring the field to life.`;
            }
          })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-1loplxl">src/routes/settings/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "svelte",
              "data-theme": "dark"
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">script</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">ts</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">Form</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">formsnap</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">type</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">PageData</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./$types</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">settingsSchema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schemas.ts</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">export</span><span style="color: #C0CAF5"> </span><span style="color: #9D7CD8">let</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">data</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> PageData</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">script</span><span style="color: #BA3C97">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">schema</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">settingsSchema</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">config</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">POST</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">debug</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #FF9E64">true</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Email</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Input</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Use your company email if you have one.</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Validation</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-12w8mgl">src/routes/settings/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "svelte",
              "data-theme": "light",
              "data-non-pp": true
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="light" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">script</span><span style="color: #69323D"> </span><span style="color: #5A4A78">lang</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">ts</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">Form</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">formsnap</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #5A4A78">type</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">PageData</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./$types</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">settingsSchema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schemas.ts</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">export</span><span style="color: #343B58"> </span><span style="color: #565F89; font-style: italic">let</span><span style="color: #343B58"> </span><span style="color: #5A4A78">data</span><span style="color: #4C505E">:</span><span style="color: #343B58"> PageData</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">script</span><span style="color: #B05467">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">schema</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">settingsSchema</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">config</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">method</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">POST</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">debug</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #965027">true</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span><span style="color: #343B59">Email</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Input</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span><span style="color: #343B59">Use your company email if you have one.</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span class="line--highlighted" data-line="" data-highlighted-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Validation</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `We&#39;ve added <code data-svelte-h="svelte-1p5t5gg">Label</code>, <code data-svelte-h="svelte-ecax3u">Input</code>, <code data-svelte-h="svelte-ru47vo">Description</code>, and <code data-svelte-h="svelte-18j6t6v">Validation</code> components to our field. The label and input are pretty self-explanatory, they render <code data-svelte-h="svelte-17cx6gt">&lt;label&gt;</code> and <code data-svelte-h="svelte-otzydj">&lt;input&gt;</code> elements respectively, and the ids are synced up so that clicking the label focuses the input.`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `The <code data-svelte-h="svelte-ru47vo">Description</code> component is optional, but it&#39;s useful for providing additional context to the user about the field. It&#39;ll be synced with the <code data-svelte-h="svelte-1vj0b6e">aria-describedby</code> attribute on the input, so it&#39;s accessible to screen readers.`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `The <code data-svelte-h="svelte-18j6t6v">Validation</code> component is used to display validation errors to the user. It also is synced with the <code data-svelte-h="svelte-1vj0b6e">aria-describedby</code> attribute on the input, which can receive multiple IDs, so that screen readers are able to read the error messages in addition to the description.`;
            }
          })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `And that&#39;s really all it takes to setup a form field. Let&#39;s continue on with the rest of the fields.`;
            }
          })} ${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
            default: () => {
              return `Add remaining form fields`;
            }
          })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-1loplxl">src/routes/settings/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "svelte",
              "data-theme": "dark"
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="3"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">script</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">ts</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">Form</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">formsnap</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">type</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">PageData</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./$types</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">settingsSchema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schemas.ts</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">export</span><span style="color: #C0CAF5"> </span><span style="color: #9D7CD8">let</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">data</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> PageData</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">script</span><span style="color: #BA3C97">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">schema</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">settingsSchema</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">config</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">POST</span><span style="color: #89DDFF">"</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">debug</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #FF9E64">true</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Email</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Input</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Use your company email if you have one.</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Validation</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">bio</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Bio</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Textarea</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      Your bio will be visible on your public profile.</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Validation</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">fieldset</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">legend</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Select your theme</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">legend</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">theme</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Radio</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">light</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Light</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Validation</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">theme</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Radio</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">dark</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Dark</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">fieldset</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">language</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Language</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Select</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">option</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">en</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">English</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">option</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">option</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">es</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Spanish</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">option</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">option</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">value</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">fr</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">French</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">option</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Select</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      Select your preferred language to use in the app.</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Validation</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">button</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">type</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">submit</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6"> Save </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">button</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-12w8mgl">src/routes/settings/+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
            $$result,
            {
              "data-language": "svelte",
              "data-theme": "light",
              "data-non-pp": true
            },
            {},
            {
              default: () => {
                return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="light" style="display: grid;" data-line-numbers-max-digits="3"><span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">script</span><span style="color: #69323D"> </span><span style="color: #5A4A78">lang</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">ts</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">Form</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">formsnap</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #5A4A78">type</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">PageData</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./$types</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">settingsSchema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schemas.ts</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">export</span><span style="color: #343B58"> </span><span style="color: #565F89; font-style: italic">let</span><span style="color: #343B58"> </span><span style="color: #5A4A78">data</span><span style="color: #4C505E">:</span><span style="color: #343B58"> PageData</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">script</span><span style="color: #B05467">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">schema</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">settingsSchema</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">config</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">method</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">POST</span><span style="color: #4C505E">"</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">debug</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #965027">true</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span><span style="color: #343B59">Email</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Input</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span><span style="color: #343B59">Use your company email if you have one.</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Validation</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">bio</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span><span style="color: #343B59">Bio</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Textarea</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      Your bio will be visible on your public profile.</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Validation</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">fieldset</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">legend</span><span style="color: #B05467">></span><span style="color: #343B59">Select your theme</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">legend</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">theme</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Radio</span><span style="color: #69323D"> </span><span style="color: #5A4A78">value</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">light</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span><span style="color: #343B59">Light</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Validation</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">theme</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Radio</span><span style="color: #69323D"> </span><span style="color: #5A4A78">value</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">dark</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span><span style="color: #343B59">Dark</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">fieldset</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">language</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span><span style="color: #343B59">Language</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Select</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">option</span><span style="color: #69323D"> </span><span style="color: #5A4A78">value</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">en</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span><span style="color: #343B59">English</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">option</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">option</span><span style="color: #69323D"> </span><span style="color: #5A4A78">value</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">es</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span><span style="color: #343B59">Spanish</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">option</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">option</span><span style="color: #69323D"> </span><span style="color: #5A4A78">value</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">fr</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span><span style="color: #343B59">French</span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">option</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Select</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      Select your preferred language to use in the app.</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Validation</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">button</span><span style="color: #69323D"> </span><span style="color: #5A4A78">type</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">submit</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span><span style="color: #343B59"> Save </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">button</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
              }
            }
          )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
            default: () => {
              return `We&#39;re still working on the best way to handle radio groups, but for now, we can use a fieldset and wrap each radio in its own field. We&#39;re only adding the <code data-svelte-h="svelte-18j6t6v">Validation</code> component to the first radio field, since they&#39;re both using the same name, and we only want to display the error once, so that we aren&#39;t spamming the screen reader or cluttering the UI with redundant validation messages.`;
            }
          })}`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `And that&#39;s it! You&#39;ve now successfully built a settings form with Formsnap!`;
        }
      })} ${validate_component(H2, "Components.h2").$$render($$result, {}, {}, {
        default: () => {
          return `Next Steps`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Now that you&#39;ve built your first form, you&#39;re ready to start building more complex forms with Formsnap &amp; Superforms. Be sure to check out the rest of the documentation to learn more about the different components and APIs available to you.`;
        }
      })}`;
    }
  })}`;
});
export {
  Quick_start as default,
  metadata
};
