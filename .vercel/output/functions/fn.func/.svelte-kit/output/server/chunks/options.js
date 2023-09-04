import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { L as Layout, P, A, a as Pre, H as H2 } from "./layout.js";
const metadata = {
  "title": "Options",
  "description": "Configure the behavior of your forms."
};
const Options = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `The <code data-svelte-h="svelte-13hbwi8">&lt;Form.Root/&gt;</code> component accepts the same options that can be passed to the <code data-svelte-h="svelte-1vw9uxx">superForm</code> function when using Superforms, and a list of these options can be found in the ${validate_component(A, "Components.a").$$render(
            $$result,
            {
              href: "https://superforms.rocks/api#superform-options",
              rel: "nofollow"
            },
            {},
            {
              default: () => {
                return `Superforms documentation`;
              }
            }
          )}.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `So when using Superforms by itself, you would pass the options to the <code data-svelte-h="svelte-1vw9uxx">superForm</code> function, like so:`;
        }
      })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-1g0r5dp">+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="svelte" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">script</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">ts</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">superForm</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">sveltekit-superforms/client</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">schema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schema.ts</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #9D7CD8">const</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">&#123;</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">form</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">&#125;</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">=</span><span style="color: #C0CAF5"> </span><span style="color: #7AA2F7">superForm</span><span style="color: #9ABDF5">(</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form</span><span style="color: #89DDFF">,</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #C0CAF5">    </span><span style="color: #73DACA">validators</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> schema</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #C0CAF5">    </span><span style="color: #7AA2F7">onSubmit</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">()</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">=></span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #89DDFF">      </span><span style="color: #A6AAAD">// do something</span></span>
<span data-line=""><span style="color: #9ABDF5">    &#125;</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #C0CAF5">    </span><span style="color: #7AA2F7">onError</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">()</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">=></span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #89DDFF">      </span><span style="color: #A6AAAD">// do something else</span></span>
<span data-line=""><span style="color: #9ABDF5">    &#125;</span></span>
<span data-line=""><span style="color: #89DDFF">    </span><span style="color: #A6AAAD">// ...</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #9ABDF5">&#125;)</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">script</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-11puv5">+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
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
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">superForm</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">sveltekit-superforms/client</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">schema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schema.ts</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B58"> </span><span style="color: #4C505E">&#123;</span><span style="color: #343B58"> </span><span style="color: #5A4A78">form</span><span style="color: #343B58"> </span><span style="color: #4C505E">&#125;</span><span style="color: #343B58"> </span><span style="color: #4C505E">=</span><span style="color: #343B58"> </span><span style="color: #34548A">superForm</span><span style="color: #484C61">(</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form</span><span style="color: #4C505E">,</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B58">    </span><span style="color: #33635C">validators</span><span style="color: #4C505E">:</span><span style="color: #343B58"> schema</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #343B58">    </span><span style="color: #34548A">onSubmit</span><span style="color: #4C505E">:</span><span style="color: #343B58"> </span><span style="color: #484C61">()</span><span style="color: #343B58"> </span><span style="color: #5A4A78">=></span><span style="color: #343B58"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #4C505E">      </span><span style="color: #9699A3; font-style: italic">// do something</span></span>
<span data-line=""><span style="color: #484C61">    &#125;</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #343B58">    </span><span style="color: #34548A">onError</span><span style="color: #4C505E">:</span><span style="color: #343B58"> </span><span style="color: #484C61">()</span><span style="color: #343B58"> </span><span style="color: #5A4A78">=></span><span style="color: #343B58"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #4C505E">      </span><span style="color: #9699A3; font-style: italic">// do something else</span></span>
<span data-line=""><span style="color: #484C61">    &#125;</span></span>
<span data-line=""><span style="color: #4C505E">    </span><span style="color: #9699A3; font-style: italic">// ...</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #484C61">&#125;)</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">script</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `But when using Formsnap, you can pass those same options to the <code data-svelte-h="svelte-13hbwi8">&lt;Form.Root/&gt;</code> component. We export a type for these options, so you can define it in your <code data-svelte-h="svelte-xpqqe6">&lt;script&gt;</code> tag or in a separate file, and then pass it to the component like so:`;
        }
      })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-1g0r5dp">+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="svelte" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">script</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">ts</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">Form</span><span style="color: #89DDFF">,</span><span style="color: #9ABDF5"> </span><span style="color: #BB9AF7">type</span><span style="color: #9ABDF5"> </span><span style="color: #52BACD">Options</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">formsnap</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">schema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schema.ts</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">export</span><span style="color: #C0CAF5"> </span><span style="color: #9D7CD8">let</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">data</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> PageData</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #9D7CD8">const</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">options</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> Options </span><span style="color: #89DDFF">=</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #C0CAF5">    </span><span style="color: #73DACA">validators</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> schema</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #C0CAF5">    </span><span style="color: #7AA2F7">onSubmit</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">()</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">=></span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #89DDFF">      </span><span style="color: #A6AAAD">// do something</span></span>
<span data-line=""><span style="color: #9ABDF5">    &#125;</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #C0CAF5">    </span><span style="color: #7AA2F7">onError</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">()</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">=></span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #89DDFF">      </span><span style="color: #A6AAAD">// do something else</span></span>
<span data-line=""><span style="color: #9ABDF5">    &#125;</span></span>
<span data-line=""><span style="color: #89DDFF">    </span><span style="color: #A6AAAD">// ...</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">script</span><span style="color: #BA3C97">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">options</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">schema</span><span style="color: #BB9AF7">&#125;</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">&#x3C;!-- ... --></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-11puv5">+page.svelte</div>${validate_component(Pre, "Components.pre").$$render(
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
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">Form</span><span style="color: #4C505E">,</span><span style="color: #484C61"> </span><span style="color: #5A4A78">type</span><span style="color: #484C61"> </span><span style="color: #166775">Options</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">formsnap</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">schema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schema.ts</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">export</span><span style="color: #343B58"> </span><span style="color: #565F89; font-style: italic">let</span><span style="color: #343B58"> </span><span style="color: #5A4A78">data</span><span style="color: #4C505E">:</span><span style="color: #343B58"> PageData</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B58"> </span><span style="color: #5A4A78">options</span><span style="color: #4C505E">:</span><span style="color: #343B58"> Options </span><span style="color: #4C505E">=</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B58">    </span><span style="color: #33635C">validators</span><span style="color: #4C505E">:</span><span style="color: #343B58"> schema</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #343B58">    </span><span style="color: #34548A">onSubmit</span><span style="color: #4C505E">:</span><span style="color: #343B58"> </span><span style="color: #484C61">()</span><span style="color: #343B58"> </span><span style="color: #5A4A78">=></span><span style="color: #343B58"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #4C505E">      </span><span style="color: #9699A3; font-style: italic">// do something</span></span>
<span data-line=""><span style="color: #484C61">    &#125;</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #343B58">    </span><span style="color: #34548A">onError</span><span style="color: #4C505E">:</span><span style="color: #343B58"> </span><span style="color: #484C61">()</span><span style="color: #343B58"> </span><span style="color: #5A4A78">=></span><span style="color: #343B58"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #4C505E">      </span><span style="color: #9699A3; font-style: italic">// do something else</span></span>
<span data-line=""><span style="color: #484C61">    &#125;</span></span>
<span data-line=""><span style="color: #4C505E">    </span><span style="color: #9699A3; font-style: italic">// ...</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">script</span><span style="color: #B05467">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">options</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">schema</span><span style="color: #5A4A78">&#125;</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">&#x3C;!-- ... --></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Alternatively, you can also just pass the options directly to the <code data-svelte-h="svelte-1m1ah8c">&lt;Form.Root /&gt;</code> component, however, your code may become less readable the more options you pass:`;
        }
      })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-1zdj0m">+page.svelte.svelte</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="svelte" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">script</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">ts</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">Form</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">formsnap</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">schema</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">./schema.ts</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">export</span><span style="color: #C0CAF5"> </span><span style="color: #9D7CD8">let</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">data</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5"> PageData</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">script</span><span style="color: #BA3C97">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">options</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #73DACA">validators</span><span style="color: #89DDFF">:</span><span style="color: #DE5971"> </span><span style="color: #C0CAF5">schema</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #7AA2F7">onSubmit</span><span style="color: #89DDFF">:</span><span style="color: #DE5971"> </span><span style="color: #9ABDF5">()</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">=></span><span style="color: #DE5971"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #89DDFF">      </span><span style="color: #A6AAAD">// do something</span></span>
<span data-line=""><span style="color: #9ABDF5">    &#125;</span><span style="color: #89DDFF">,</span></span>
<span data-line=""><span style="color: #DE5971">    </span><span style="color: #7AA2F7">onError</span><span style="color: #89DDFF">:</span><span style="color: #DE5971"> </span><span style="color: #9ABDF5">()</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">=></span><span style="color: #DE5971"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #89DDFF">      </span><span style="color: #A6AAAD">// do something else</span></span>
<span data-line=""><span style="color: #9ABDF5">    &#125;</span></span>
<span data-line=""><span style="color: #89DDFF">    </span><span style="color: #A6AAAD">// ...</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #9ABDF5">&#125;</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form&#125;</span></span>
<span data-line=""><span style="color: #DE5971">  </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">schema</span><span style="color: #BB9AF7">&#125;</span></span>
<span data-line=""><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">&#x3C;!-- ... --></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-1iw4vn0">+page.svelte.svelte</div>${validate_component(Pre, "Components.pre").$$render(
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
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">Form</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">formsnap</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">schema</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">./schema.ts</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">export</span><span style="color: #343B58"> </span><span style="color: #565F89; font-style: italic">let</span><span style="color: #343B58"> </span><span style="color: #5A4A78">data</span><span style="color: #4C505E">:</span><span style="color: #343B58"> PageData</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">script</span><span style="color: #B05467">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">options</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #33635C">validators</span><span style="color: #4C505E">:</span><span style="color: #69323D"> </span><span style="color: #343B58">schema</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #34548A">onSubmit</span><span style="color: #4C505E">:</span><span style="color: #69323D"> </span><span style="color: #484C61">()</span><span style="color: #69323D"> </span><span style="color: #5A4A78">=></span><span style="color: #69323D"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #4C505E">      </span><span style="color: #9699A3; font-style: italic">// do something</span></span>
<span data-line=""><span style="color: #484C61">    &#125;</span><span style="color: #4C505E">,</span></span>
<span data-line=""><span style="color: #69323D">    </span><span style="color: #34548A">onError</span><span style="color: #4C505E">:</span><span style="color: #69323D"> </span><span style="color: #484C61">()</span><span style="color: #69323D"> </span><span style="color: #5A4A78">=></span><span style="color: #69323D"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #4C505E">      </span><span style="color: #9699A3; font-style: italic">// do something else</span></span>
<span data-line=""><span style="color: #484C61">    &#125;</span></span>
<span data-line=""><span style="color: #4C505E">    </span><span style="color: #9699A3; font-style: italic">// ...</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #484C61">&#125;</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form&#125;</span></span>
<span data-line=""><span style="color: #69323D">  </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">schema</span><span style="color: #5A4A78">&#125;</span></span>
<span data-line=""><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">&#x3C;!-- ... --></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(H2, "Components.h2").$$render($$result, {}, {}, {
        default: () => {
          return `Default options`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `We do apply a couple options by default, here&#39;s what they are:`;
        }
      })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="ts" data-theme="dark" data-svelte-h="svelte-1bst560">Form.Root</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "ts",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #9D7CD8">const</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">defaultOptions</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">   * The schema you pass to the &#x3C;Form.Root/> component will be</span></span>
<span data-line=""><span style="color: #A6AAAD">   * used for client-side validation.</span></span>
<span data-line=""><span style="color: #A6AAAD">   */</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">validators</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">schema</span><span style="color: #89DDFF">,</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">   * We disabled the &#96;taintedMessage&#96; option by default, as we</span></span>
<span data-line=""><span style="color: #A6AAAD">   * found it to not be desirable in specific situations,</span></span>
<span data-line=""><span style="color: #A6AAAD">   * considering you don't always have control over the message</span></span>
<span data-line=""><span style="color: #A6AAAD">   * that is displayed, and can potentially be confusing to the user.</span></span>
<span data-line=""><span style="color: #A6AAAD">   */</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">taintedMessage</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #FF9E64">null</span></span>
<span data-line=""><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}<div data-rehype-pretty-code-title data-language="ts" data-theme="light" data-svelte-h="svelte-1lobgky">Form.Root</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "ts",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="light" style="display: grid;"><span data-line=""><span style="color: #565F89; font-style: italic">const</span><span style="color: #343B59"> </span><span style="color: #5A4A78">defaultOptions</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * The schema you pass to the &#x3C;Form.Root/> component will be</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * used for client-side validation.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   */</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">validators</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">schema</span><span style="color: #4C505E">,</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * We disabled the &#96;taintedMessage&#96; option by default, as we</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * found it to not be desirable in specific situations,</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * considering you don't always have control over the message</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * that is displayed, and can potentially be confusing to the user.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   */</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">taintedMessage</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #965027">null</span></span>
<span data-line=""><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Of course, you can override these options by explicitly passing different values via the <code data-svelte-h="svelte-b8vks4">options</code> prop to the <code data-svelte-h="svelte-13hbwi8">&lt;Form.Root/&gt;</code> component. If you don&#39;t explicitly pass those options, the default values will be merged with the options you pass, so you can still use the defaults while passing other options.`;
        }
      })}`;
    }
  })}`;
});
export {
  Options as default,
  metadata
};
