import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { L as Layout, P, H as H2, a as Pre, A } from "./layout.js";
import { H as H3 } from "./h3.js";
const metadata = {
  "title": "Headless usage",
  "description": "Have your own components or want to use native HTML elements? No problem."
};
const Headless_usage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Although the provided components are the recommended and easiest way to use Formsnap, they aren&#39;t the only way. If you prefer to bring your own components or use native HTML elements, that&#39;s fine too. While the developer experience won&#39;t be <em data-svelte-h="svelte-1opzn70">quite</em> as nice, it&#39;s still pretty good for what you get.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `We&#39;ll start by looking at the slot props exposed by the <code data-svelte-h="svelte-1m1ah8c">&lt;Form.Root /&gt;</code> and <code data-svelte-h="svelte-rgbtxo">&lt;Form.Field /&gt;</code>, and then how to use native HTML elements, followed by how to use your own components/mix and match with the provided components.`;
        }
      })} ${validate_component(H2, "Components.h2").$$render($$result, {}, {}, {
        default: () => {
          return `Slot Props`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `To use Formsnap without the provided components, you&#39;ll need to use some of the slot props exposed by the <code data-svelte-h="svelte-1m1ah8c">&lt;Form.Root /&gt;</code> and <code data-svelte-h="svelte-rgbtxo">&lt;Form.Field /&gt;</code> components. Which ones you use will depend on your use case and needs, but here&#39;s a list of them along with what they&#39;re used for.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `This information will eventually be documented in a nice API reference section, but for now, this will do.`;
        }
      })} ${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
        default: () => {
          return `Form.Root`;
        }
      })} <div data-rehype-pretty-code-fragment>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "ts",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #A6AAAD">// Not a real type, just for visual reference :)</span></span>
<span data-line=""><span style="color: #BB9AF7">type</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">FormRootSlotProps</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">   * The &#96;config&#96; slot prop is used to properly type and wire up the form fields.</span></span>
<span data-line=""><span style="color: #A6AAAD">   * You won't need to use this prop directly, but it's important that it's passed</span></span>
<span data-line=""><span style="color: #A6AAAD">   * to the &#96;&#x3C;Form.Field />&#96; components so that they are properly typed and functional.</span></span>
<span data-line=""><span style="color: #A6AAAD">   */</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">config</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * The &#96;form&#96; slot prop is the form's store. It contains the form's current</span></span>
<span data-line=""><span style="color: #A6AAAD">     * values, validation errors, and other useful properties.</span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">form</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">FormStore</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * The &#96;schema&#96; slot prop is the form's schema. It contains the form's</span></span>
<span data-line=""><span style="color: #A6AAAD">     * validation rules, default values, and other useful properties.</span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">schema</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">FormSchema</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">   * The &#96;enhance&#96; slot prop is an action that progressively enhances the form.</span></span>
<span data-line=""><span style="color: #A6AAAD">   * It's important to note that this is **_*NOT*_** the &#96;enhance&#96; action provided</span></span>
<span data-line=""><span style="color: #A6AAAD">   * by SvelteKit, but rather a custom action provided by Superforms.</span></span>
<span data-line=""><span style="color: #A6AAAD">   *</span></span>
<span data-line=""><span style="color: #A6AAAD">   * </span><span style="color: #7582BA">@example</span><span style="color: #A6AAAD"> &#x3C;form use:enhance /></span></span>
<span data-line=""><span style="color: #A6AAAD">   */</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">enhance</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Action</span><span style="color: #89DDFF">&#x3C;</span><span style="color: #C0CAF5">Element</span><span style="color: #89DDFF">>;</span></span>
<span data-line=""><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "ts",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="light" style="display: grid;"><span data-line=""><span style="color: #9699A3; font-style: italic">// Not a real type, just for visual reference :)</span></span>
<span data-line=""><span style="color: #5A4A78">type</span><span style="color: #343B59"> </span><span style="color: #343B58">FormRootSlotProps</span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * The &#96;config&#96; slot prop is used to properly type and wire up the form fields.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * You won't need to use this prop directly, but it's important that it's passed</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * to the &#96;&#x3C;Form.Field />&#96; components so that they are properly typed and functional.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   */</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">config</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * The &#96;form&#96; slot prop is the form's store. It contains the form's current</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * values, validation errors, and other useful properties.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">form</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">FormStore</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * The &#96;schema&#96; slot prop is the form's schema. It contains the form's</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * validation rules, default values, and other useful properties.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">schema</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">FormSchema</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * The &#96;enhance&#96; slot prop is an action that progressively enhances the form.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * It's important to note that this is **_*NOT*_** the &#96;enhance&#96; action provided</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * by SvelteKit, but rather a custom action provided by Superforms.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   *</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * </span><span style="color: #73767D; font-style: italic">@example</span><span style="color: #9699A3; font-style: italic"> &#x3C;form use:enhance /></span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   */</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">enhance</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Action</span><span style="color: #4C505E">&#x3C;</span><span style="color: #343B58">Element</span><span style="color: #4C505E">>;</span></span>
<span data-line=""><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
        default: () => {
          return `Form.Field`;
        }
      })} <div data-rehype-pretty-code-fragment>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "ts",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="dark" style="display: grid;"><span data-line=""><span style="color: #A6AAAD">// Not a real type, just for visual reference :)</span></span>
<span data-line=""><span style="color: #BB9AF7">type</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">FormFieldSlotProps</span><span style="color: #89DDFF">&#x3C;</span><span style="color: #C0CAF5">T</span><span style="color: #89DDFF">></span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">=</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">   * Actions provide functionality to the various elements that</span></span>
<span data-line=""><span style="color: #A6AAAD">   * make up the field. They handle event listeners, attributes, etc.</span></span>
<span data-line=""><span style="color: #A6AAAD">   */</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">actions</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * The action which should be applied to type="checkbox" input elements.</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Handles the &#96;checked&#96; attribute and the &#96;value&#96; store using a "change"</span></span>
<span data-line=""><span style="color: #A6AAAD">     * event listener &#x26; applies all the necessary attributes.</span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">checkbox</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Action</span><span style="color: #89DDFF">&#x3C;</span><span style="color: #C0CAF5">HTMLInputElement</span><span style="color: #89DDFF">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * The action which should be applied to the field's description element.</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Applies the &#96;id&#96; attribute which is used to associate the description</span></span>
<span data-line=""><span style="color: #A6AAAD">     * with the input element using the &#96;aria-describedby&#96; attribute.</span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">description</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Action</span><span style="color: #89DDFF">&#x3C;</span><span style="color: #C0CAF5">HTMLElement</span><span style="color: #89DDFF">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * The action which should be applied to a regular input element.</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Handles updating the &#96;value&#96; store using an &#96;input&#96; event listener</span></span>
<span data-line=""><span style="color: #A6AAAD">     * and applies the necessary attributes.</span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">input</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Action</span><span style="color: #89DDFF">&#x3C;</span><span style="color: #C0CAF5">HTMLInputElement</span><span style="color: #89DDFF">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * The action which should be applied to the field's label element.</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Applies the &#96;for&#96; attribute which is used to associate the label</span></span>
<span data-line=""><span style="color: #A6AAAD">     * with the field's input element.</span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">label</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Action</span><span style="color: #89DDFF">&#x3C;</span><span style="color: #C0CAF5">HTMLLabelElement</span><span style="color: #89DDFF">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * The action which should be applied to type="radio" input elements.</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Handles the &#96;checked&#96; attribute and the &#96;value&#96; store using a "change"</span></span>
<span data-line=""><span style="color: #A6AAAD">     * event listener &#x26; applies all the necessary attributes.</span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">radio</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Action</span><span style="color: #89DDFF">&#x3C;</span><span style="color: #C0CAF5">HTMLInputElement</span><span style="color: #89DDFF">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * The action which should be applied to select elements.</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Handles the the &#96;value&#96; store using a "change" event listener and</span></span>
<span data-line=""><span style="color: #A6AAAD">     * applies all necessary attributes.</span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">select</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Action</span><span style="color: #89DDFF">&#x3C;</span><span style="color: #C0CAF5">HTMLSelectElement</span><span style="color: #89DDFF">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * The action which should be applied to textarea elements.</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Handles the the &#96;value&#96; store using an "input" event listener and</span></span>
<span data-line=""><span style="color: #A6AAAD">     * applies all necessary attributes.</span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">textarea</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Action</span><span style="color: #89DDFF">&#x3C;</span><span style="color: #C0CAF5">HTMLTextAreaElement</span><span style="color: #89DDFF">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * The action which should be applied to the field's validation message</span></span>
<span data-line=""><span style="color: #A6AAAD">     * element. Applies the &#96;id&#96; attribute which is used to associate the</span></span>
<span data-line=""><span style="color: #A6AAAD">     * validation message with the input using the &#96;aria-describedby&#96; attribute.</span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">validation</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Action</span><span style="color: #89DDFF">&#x3C;</span><span style="color: #C0CAF5">HTMLElement</span><span style="color: #89DDFF">>;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">   * &#96;attrs&#96; is an object containing the attributes for the various elements</span></span>
<span data-line=""><span style="color: #A6AAAD">   * that make up the field. These aren't necessary if you're using the actions,</span></span>
<span data-line=""><span style="color: #A6AAAD">   * but they can be useful if you're using custom components.</span></span>
<span data-line=""><span style="color: #A6AAAD">   */</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">attrs</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">input</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">aria-invalid</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">true</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">|</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">undefined</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">aria-describedby</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">string</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">|</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">undefined</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">aria-required</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">true</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">|</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">undefined</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">data-invalid</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">true</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">|</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">undefined</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">data-valid</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">true</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">|</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">undefined</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #73DACA">name</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">string</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #73DACA">id</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">string</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #73DACA">value</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">T</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">label</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #73DACA">for</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">string</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">description</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #73DACA">id</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">string</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #73DACA">validation</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #73DACA">id</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">string</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">   * &#96;handlers&#96; is an object containing helpful event handler functions which</span></span>
<span data-line=""><span style="color: #A6AAAD">   * can be used to update the field's value store as the user interacts with</span></span>
<span data-line=""><span style="color: #A6AAAD">   * the field. These aren't necessary if you're using actions, but are useful</span></span>
<span data-line=""><span style="color: #A6AAAD">   * when working with custom components.</span></span>
<span data-line=""><span style="color: #A6AAAD">   */</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">handlers</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Handles updating the field's &#96;value&#96; store on "input" events</span></span>
<span data-line=""><span style="color: #A6AAAD">     *</span></span>
<span data-line=""><span style="color: #A6AAAD">     * </span><span style="color: #7582BA">@example</span><span style="color: #A6AAAD"> &#x3C;CustomInput on:input=&#123;handlers.input&#125; /></span></span>
<span data-line=""><span style="color: #A6AAAD">     * </span><span style="color: #7582BA">@example</span><span style="color: #A6AAAD"> &#x3C;CustomTextarea on:input=&#123;handlers.input&#125; /></span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #7AA2F7">input</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">(</span><span style="color: #E0AF68">event</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Event</span><span style="color: #9ABDF5">)</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">=></span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">void</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Handles updating the field's &#96;value&#96; store on "change" events</span></span>
<span data-line=""><span style="color: #A6AAAD">     *</span></span>
<span data-line=""><span style="color: #A6AAAD">     * </span><span style="color: #7582BA">@example</span><span style="color: #A6AAAD"> &#x3C;CustomCheckbox on:change=&#123;handlers.checkbox&#125; /></span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #7AA2F7">checkbox</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">(</span><span style="color: #E0AF68">event</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Event</span><span style="color: #9ABDF5">)</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">=></span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">void</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Handles updating the field's &#96;value&#96; store on "change" events</span></span>
<span data-line=""><span style="color: #A6AAAD">     *</span></span>
<span data-line=""><span style="color: #A6AAAD">     * </span><span style="color: #7582BA">@example</span><span style="color: #A6AAAD"> &#x3C;CustomRadioItem on:change=&#123;handlers.radio&#125; /></span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #7AA2F7">radio</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">(</span><span style="color: #E0AF68">event</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Event</span><span style="color: #9ABDF5">)</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">=></span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">void</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">     * Handles updating the field's &#96;value&#96; store on "change" events</span></span>
<span data-line=""><span style="color: #A6AAAD">     *</span></span>
<span data-line=""><span style="color: #A6AAAD">     * </span><span style="color: #7582BA">@example</span><span style="color: #A6AAAD"> &#x3C;CustomSelect on:change=&#123;handlers.select&#125; /></span></span>
<span data-line=""><span style="color: #A6AAAD">     */</span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #7AA2F7">select</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">(</span><span style="color: #E0AF68">event</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">Event</span><span style="color: #9ABDF5">)</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">=></span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">void</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">   * A function which sets the field's &#96;value&#96; store to the value provided via</span></span>
<span data-line=""><span style="color: #A6AAAD">   * the function argument. This is useful when working with custom components.</span></span>
<span data-line=""><span style="color: #A6AAAD">   */</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #7AA2F7">setValue</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #9ABDF5">(</span><span style="color: #E0AF68">value</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">T</span><span style="color: #9ABDF5">)</span><span style="color: #A9B1D6"> </span><span style="color: #BB9AF7">=></span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">void</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">   * The field's validation errors.</span></span>
<span data-line=""><span style="color: #A6AAAD">   */</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">errors</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">string</span><span style="color: #9ABDF5">[]</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">|</span><span style="color: #A9B1D6"> </span><span style="color: #52BACD">undefined</span><span style="color: #89DDFF">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #A6AAAD">/**</span></span>
<span data-line=""><span style="color: #A6AAAD">   * The field's current value.</span></span>
<span data-line=""><span style="color: #A6AAAD">   */</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #73DACA">value</span><span style="color: #89DDFF">:</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">T</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #9ABDF5">&#125;</span><span style="color: #89DDFF">;</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "ts",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-language="ts" data-theme="light" style="display: grid;"><span data-line=""><span style="color: #9699A3; font-style: italic">// Not a real type, just for visual reference :)</span></span>
<span data-line=""><span style="color: #5A4A78">type</span><span style="color: #343B59"> </span><span style="color: #343B58">FormFieldSlotProps</span><span style="color: #4C505E">&#x3C;</span><span style="color: #343B58">T</span><span style="color: #4C505E">></span><span style="color: #343B59"> </span><span style="color: #4C505E">=</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * Actions provide functionality to the various elements that</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * make up the field. They handle event listeners, attributes, etc.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   */</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">actions</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * The action which should be applied to type="checkbox" input elements.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Handles the &#96;checked&#96; attribute and the &#96;value&#96; store using a "change"</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * event listener &#x26; applies all the necessary attributes.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">checkbox</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Action</span><span style="color: #4C505E">&#x3C;</span><span style="color: #343B58">HTMLInputElement</span><span style="color: #4C505E">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * The action which should be applied to the field's description element.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Applies the &#96;id&#96; attribute which is used to associate the description</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * with the input element using the &#96;aria-describedby&#96; attribute.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">description</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Action</span><span style="color: #4C505E">&#x3C;</span><span style="color: #343B58">HTMLElement</span><span style="color: #4C505E">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * The action which should be applied to a regular input element.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Handles updating the &#96;value&#96; store using an &#96;input&#96; event listener</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * and applies the necessary attributes.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">input</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Action</span><span style="color: #4C505E">&#x3C;</span><span style="color: #343B58">HTMLInputElement</span><span style="color: #4C505E">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * The action which should be applied to the field's label element.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Applies the &#96;for&#96; attribute which is used to associate the label</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * with the field's input element.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">label</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Action</span><span style="color: #4C505E">&#x3C;</span><span style="color: #343B58">HTMLLabelElement</span><span style="color: #4C505E">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * The action which should be applied to type="radio" input elements.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Handles the &#96;checked&#96; attribute and the &#96;value&#96; store using a "change"</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * event listener &#x26; applies all the necessary attributes.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">radio</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Action</span><span style="color: #4C505E">&#x3C;</span><span style="color: #343B58">HTMLInputElement</span><span style="color: #4C505E">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * The action which should be applied to select elements.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Handles the the &#96;value&#96; store using a "change" event listener and</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * applies all necessary attributes.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">select</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Action</span><span style="color: #4C505E">&#x3C;</span><span style="color: #343B58">HTMLSelectElement</span><span style="color: #4C505E">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * The action which should be applied to textarea elements.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Handles the the &#96;value&#96; store using an "input" event listener and</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * applies all necessary attributes.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">textarea</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Action</span><span style="color: #4C505E">&#x3C;</span><span style="color: #343B58">HTMLTextAreaElement</span><span style="color: #4C505E">>;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * The action which should be applied to the field's validation message</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * element. Applies the &#96;id&#96; attribute which is used to associate the</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * validation message with the input using the &#96;aria-describedby&#96; attribute.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">validation</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Action</span><span style="color: #4C505E">&#x3C;</span><span style="color: #343B58">HTMLElement</span><span style="color: #4C505E">>;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * &#96;attrs&#96; is an object containing the attributes for the various elements</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * that make up the field. These aren't necessary if you're using the actions,</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * but they can be useful if you're using custom components.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   */</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">attrs</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">input</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #4C505E">"</span><span style="color: #485E30">aria-invalid</span><span style="color: #4C505E">"</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">true</span><span style="color: #343B59"> </span><span style="color: #4C505E">|</span><span style="color: #343B59"> </span><span style="color: #166775">undefined</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #4C505E">"</span><span style="color: #485E30">aria-describedby</span><span style="color: #4C505E">"</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">string</span><span style="color: #343B59"> </span><span style="color: #4C505E">|</span><span style="color: #343B59"> </span><span style="color: #166775">undefined</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #4C505E">"</span><span style="color: #485E30">aria-required</span><span style="color: #4C505E">"</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">true</span><span style="color: #343B59"> </span><span style="color: #4C505E">|</span><span style="color: #343B59"> </span><span style="color: #166775">undefined</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #4C505E">"</span><span style="color: #485E30">data-invalid</span><span style="color: #4C505E">"</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">true</span><span style="color: #343B59"> </span><span style="color: #4C505E">|</span><span style="color: #343B59"> </span><span style="color: #166775">undefined</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #4C505E">"</span><span style="color: #485E30">data-valid</span><span style="color: #4C505E">"</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">true</span><span style="color: #343B59"> </span><span style="color: #4C505E">|</span><span style="color: #343B59"> </span><span style="color: #166775">undefined</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #33635C">name</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">string</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #33635C">id</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">string</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #33635C">value</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">T</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">label</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #33635C">for</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">string</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">description</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #33635C">id</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">string</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #33635C">validation</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #33635C">id</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">string</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * &#96;handlers&#96; is an object containing helpful event handler functions which</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * can be used to update the field's value store as the user interacts with</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * the field. These aren't necessary if you're using actions, but are useful</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * when working with custom components.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   */</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">handlers</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Handles updating the field's &#96;value&#96; store on "input" events</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     *</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * </span><span style="color: #73767D; font-style: italic">@example</span><span style="color: #9699A3; font-style: italic"> &#x3C;CustomInput on:input=&#123;handlers.input&#125; /></span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * </span><span style="color: #73767D; font-style: italic">@example</span><span style="color: #9699A3; font-style: italic"> &#x3C;CustomTextarea on:input=&#123;handlers.input&#125; /></span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #34548A">input</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">(</span><span style="color: #8F5E15">event</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Event</span><span style="color: #484C61">)</span><span style="color: #343B59"> </span><span style="color: #5A4A78">=></span><span style="color: #343B59"> </span><span style="color: #166775">void</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Handles updating the field's &#96;value&#96; store on "change" events</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     *</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * </span><span style="color: #73767D; font-style: italic">@example</span><span style="color: #9699A3; font-style: italic"> &#x3C;CustomCheckbox on:change=&#123;handlers.checkbox&#125; /></span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #34548A">checkbox</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">(</span><span style="color: #8F5E15">event</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Event</span><span style="color: #484C61">)</span><span style="color: #343B59"> </span><span style="color: #5A4A78">=></span><span style="color: #343B59"> </span><span style="color: #166775">void</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Handles updating the field's &#96;value&#96; store on "change" events</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     *</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * </span><span style="color: #73767D; font-style: italic">@example</span><span style="color: #9699A3; font-style: italic"> &#x3C;CustomRadioItem on:change=&#123;handlers.radio&#125; /></span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #34548A">radio</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">(</span><span style="color: #8F5E15">event</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Event</span><span style="color: #484C61">)</span><span style="color: #343B59"> </span><span style="color: #5A4A78">=></span><span style="color: #343B59"> </span><span style="color: #166775">void</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * Handles updating the field's &#96;value&#96; store on "change" events</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     *</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     * </span><span style="color: #73767D; font-style: italic">@example</span><span style="color: #9699A3; font-style: italic"> &#x3C;CustomSelect on:change=&#123;handlers.select&#125; /></span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">     */</span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #34548A">select</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">(</span><span style="color: #8F5E15">event</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">Event</span><span style="color: #484C61">)</span><span style="color: #343B59"> </span><span style="color: #5A4A78">=></span><span style="color: #343B59"> </span><span style="color: #166775">void</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * A function which sets the field's &#96;value&#96; store to the value provided via</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * the function argument. This is useful when working with custom components.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   */</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #34548A">setValue</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #484C61">(</span><span style="color: #8F5E15">value</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">T</span><span style="color: #484C61">)</span><span style="color: #343B59"> </span><span style="color: #5A4A78">=></span><span style="color: #343B59"> </span><span style="color: #166775">void</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * The field's validation errors.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   */</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">errors</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #166775">string</span><span style="color: #484C61">[]</span><span style="color: #343B59"> </span><span style="color: #4C505E">|</span><span style="color: #343B59"> </span><span style="color: #166775">undefined</span><span style="color: #4C505E">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #9699A3; font-style: italic">/**</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   * The field's current value.</span></span>
<span data-line=""><span style="color: #9699A3; font-style: italic">   */</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #33635C">value</span><span style="color: #4C505E">:</span><span style="color: #343B59"> </span><span style="color: #343B58">T</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #484C61">&#125;</span><span style="color: #4C505E">;</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(H2, "Components.h2").$$render($$result, {}, {}, {
        default: () => {
          return `Native HTML elements`;
        }
      })} ${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
        default: () => {
          return `Using the native form element`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `<code data-svelte-h="svelte-1m1ah8c">&lt;Form.Root /&gt;</code> as the name suggests is the root element of the form. By default, it renders a <code data-svelte-h="svelte-1addioz">&lt;form&gt;</code> element, but you can override that behavior by setting the <code data-svelte-h="svelte-oeous">asChild</code> prop to <code data-svelte-h="svelte-1b4w2dk">true</code>. This will prevent the <code data-svelte-h="svelte-8ooak6">&lt;form /&gt;</code> from being rendered, and instead only render its children.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Of course, there&#39;s a lot more going on, but here&#39;s a high-level example of what the <code data-svelte-h="svelte-oeous">asChild</code> prop is doing.`;
        }
      })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-19dbibi">Form.Root</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">#</span><span style="color: #BB9AF7">if</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">asChild</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #BB9AF7">slot</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">:</span><span style="color: #BB9AF7">else</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">form</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #BB9AF7">slot</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">form</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">/</span><span style="color: #BB9AF7">if</span><span style="color: #9ABDF5">&#125;</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-1hj45n8">Form.Root</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="light" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #484C61">&#123;</span><span style="color: #4C505E">#</span><span style="color: #5A4A78">if</span><span style="color: #343B59"> </span><span style="color: #343B58">asChild</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #5A4A78">slot</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #484C61">&#123;</span><span style="color: #4C505E">:</span><span style="color: #5A4A78">else</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">form</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #5A4A78">slot</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">form</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #484C61">&#123;</span><span style="color: #4C505E">/</span><span style="color: #5A4A78">if</span><span style="color: #484C61">&#125;</span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Even though we&#39;re intentionally opting our of the provided <code data-svelte-h="svelte-8ooak6">&lt;form /&gt;</code> element, we still want the same functionality. To achieve this, we can use the slot props provided by <code data-svelte-h="svelte-1m1ah8c">&lt;Form.Root /&gt;</code> to wire up our form. Keep in mind you&#39;ll still need to pass the <code data-svelte-h="svelte-q0iv5r">schema</code> &amp; <code data-svelte-h="svelte-24wwdm">form</code> props to <code data-svelte-h="svelte-1m1ah8c">&lt;Form.Root /&gt;</code> for validation and state management to work.`;
        }
      })} <div data-rehype-pretty-code-fragment>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">schema</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">someSchema</span><span style="color: #7DCFFF">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">config</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">enhance</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">asChild</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">form</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">POST</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">use</span><span style="color: #89DDFF">:</span><span style="color: #7AA2F7">enhance</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #A6AAAD">&#x3C;!--  --></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">form</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="light" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #69323D"> </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">schema</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">someSchema</span><span style="color: #0F4B6E">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">config</span><span style="color: #69323D"> </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">enhance</span><span style="color: #69323D"> </span><span style="color: #5A4A78">asChild</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">form</span><span style="color: #69323D"> </span><span style="color: #5A4A78">method</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">POST</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">use</span><span style="color: #4C505E">:</span><span style="color: #34548A">enhance</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #9699A3; font-style: italic">&#x3C;!--  --></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">form</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Per usual, we&#39;ll need the <code data-svelte-h="svelte-1ubq5kq">config</code> slot prop to properly wire up our <code data-svelte-h="svelte-rgbtxo">&lt;Form.Field /&gt;</code> components, but we&#39;ll also need the <code data-svelte-h="svelte-136ko3g">enhance</code> slot prop, which is an action that progressively enhances the form. It&#39;s important to note that this is <strong data-svelte-h="svelte-1sq9gr7"><em><em>NOT</em></em></strong> the <code data-svelte-h="svelte-136ko3g">enhance</code> action provided by SvelteKit, but rather a custom action provided by ${validate_component(A, "Components.a").$$render(
            $$result,
            {
              href: "https://superforms.rocks/concepts/enhance",
              rel: "nofollow"
            },
            {},
            {
              default: () => {
                return `Superforms`;
              }
            }
          )}.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `That&#39;s it. Now you can use your own <code data-svelte-h="svelte-8ooak6">&lt;form /&gt;</code> element and still get all the benefits!`;
        }
      })} ${validate_component(H3, "Components.h3").$$render($$result, {}, {}, {
        default: () => {
          return `Using native field elements`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `The <code data-svelte-h="svelte-rgbtxo">&lt;Form.Field /&gt;</code> component exposes an <code data-svelte-h="svelte-arhhaj">actions</code> slot prop which allows you to use native elements without losing any functionality. The <code data-svelte-h="svelte-rgbtxo">&lt;Form.Field /&gt;</code> component doesn&#39;t render any markup by default, so there&#39;s no need to worry about the <code data-svelte-h="svelte-oeous">asChild</code> prop here.`;
        }
      })} <div data-rehype-pretty-code-fragment>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">schema</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">someSchema</span><span style="color: #7DCFFF">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">config</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">enhance</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">asChild</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">form</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">POST</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">use</span><span style="color: #89DDFF">:</span><span style="color: #7AA2F7">enhance</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">actions</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #A6AAAD">&#x3C;!-- svelte-ignore a11y-label-has-associated-control / applied by action --></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">label</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">use</span><span style="color: #89DDFF">:</span><span style="color: #7AA2F7">actions</span><span style="color: #DE5971">.</span><span style="color: #BB9AF7">label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6"> Email </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">input</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">use</span><span style="color: #89DDFF">:</span><span style="color: #7AA2F7">actions</span><span style="color: #DE5971">.</span><span style="color: #BB9AF7">input</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">span</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">use</span><span style="color: #89DDFF">:</span><span style="color: #7AA2F7">actions</span><span style="color: #DE5971">.</span><span style="color: #BB9AF7">description</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6"> Please use your company email. </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">span</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">span</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">use</span><span style="color: #89DDFF">:</span><span style="color: #7AA2F7">actions</span><span style="color: #DE5971">.</span><span style="color: #BB9AF7">validation</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">        </span><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">#</span><span style="color: #BB9AF7">if</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">          </span><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">#</span><span style="color: #BB9AF7">each</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">$</span><span style="color: #C0CAF5">errors</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">email</span><span style="color: #A9B1D6"> </span><span style="color: #89DDFF">as</span><span style="color: #A9B1D6"> </span><span style="color: #C0CAF5">error</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">            </span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">error</span><span style="color: #7DCFFF">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">          </span><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">/</span><span style="color: #BB9AF7">each</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">        </span><span style="color: #9ABDF5">&#123;</span><span style="color: #89DDFF">/</span><span style="color: #BB9AF7">if</span><span style="color: #9ABDF5">&#125;</span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">span</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">form</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="light" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #69323D"> </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">schema</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">someSchema</span><span style="color: #0F4B6E">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">config</span><span style="color: #69323D"> </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">enhance</span><span style="color: #69323D"> </span><span style="color: #5A4A78">asChild</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">form</span><span style="color: #69323D"> </span><span style="color: #5A4A78">method</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">POST</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">use</span><span style="color: #4C505E">:</span><span style="color: #34548A">enhance</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">actions</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #9699A3; font-style: italic">&#x3C;!-- svelte-ignore a11y-label-has-associated-control / applied by action --></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">label</span><span style="color: #69323D"> </span><span style="color: #5A4A78">use</span><span style="color: #4C505E">:</span><span style="color: #34548A">actions</span><span style="color: #69323D">.</span><span style="color: #5A4A78">label</span><span style="color: #B05467">></span><span style="color: #343B59"> Email </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">input</span><span style="color: #69323D"> </span><span style="color: #5A4A78">use</span><span style="color: #4C505E">:</span><span style="color: #34548A">actions</span><span style="color: #69323D">.</span><span style="color: #5A4A78">input</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">span</span><span style="color: #69323D"> </span><span style="color: #5A4A78">use</span><span style="color: #4C505E">:</span><span style="color: #34548A">actions</span><span style="color: #69323D">.</span><span style="color: #5A4A78">description</span><span style="color: #B05467">></span><span style="color: #343B59"> Please use your company email. </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">span</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">span</span><span style="color: #69323D"> </span><span style="color: #5A4A78">use</span><span style="color: #4C505E">:</span><span style="color: #34548A">actions</span><span style="color: #69323D">.</span><span style="color: #5A4A78">validation</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">        </span><span style="color: #484C61">&#123;</span><span style="color: #4C505E">#</span><span style="color: #5A4A78">if</span><span style="color: #343B59"> </span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">          </span><span style="color: #484C61">&#123;</span><span style="color: #4C505E">#</span><span style="color: #5A4A78">each</span><span style="color: #343B59"> </span><span style="color: #4C505E">$</span><span style="color: #343B58">errors</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">email</span><span style="color: #343B59"> </span><span style="color: #4C505E">as</span><span style="color: #343B59"> </span><span style="color: #343B58">error</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">            </span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">error</span><span style="color: #0F4B6E">&#125;</span></span>
<span data-line=""><span style="color: #343B59">          </span><span style="color: #484C61">&#123;</span><span style="color: #4C505E">/</span><span style="color: #5A4A78">each</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">        </span><span style="color: #484C61">&#123;</span><span style="color: #4C505E">/</span><span style="color: #5A4A78">if</span><span style="color: #484C61">&#125;</span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">span</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">form</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `As you can see all we need to make this functional is to apply the appropriate actions to the various elements that make up the field. Not quite as pretty as the provided components, but it gets the job done while giving you the flexibility of scoped styles, additional actions, etc.`;
        }
      })} ${validate_component(H2, "Components.h2").$$render($$result, {}, {}, {
        default: () => {
          return `Custom components`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `While there&#39;s no way to predict what the interfaces of your components will look like, we can still provide a high-level example of how to use them with Formsnap.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `For purposes of this example, we&#39;ll assume that we have a <code data-svelte-h="svelte-wfsfxb">&lt;CustomInput /&gt;</code> component that looks something like this:`;
        }
      })} <div data-rehype-pretty-code-fragment data-metadata><div data-rehype-pretty-code-title data-language="svelte" data-theme="dark" data-svelte-h="svelte-1gf3xj6">CustomInput.svelte</div>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">script</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">ts</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #7DCFFF">import</span><span style="color: #C0CAF5"> </span><span style="color: #BB9AF7">type</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123; </span><span style="color: #52BACD">HTMLInputAttributes</span><span style="color: #9ABDF5"> &#125;</span><span style="color: #C0CAF5"> </span><span style="color: #7DCFFF">from</span><span style="color: #C0CAF5"> </span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">svelte/elements</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #BB9AF7">type</span><span style="color: #C0CAF5"> $$Props </span><span style="color: #89DDFF">=</span><span style="color: #C0CAF5"> HTMLInputAttributes</span><span style="color: #89DDFF">;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">script</span><span style="color: #BA3C97">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">input</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">class</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">custom-input</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">on</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5">input</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #F7768E; font-weight: bold">...</span><span style="color: #C0CAF5">$$restProps</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">style</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #C0CAF5">  </span><span style="color: #E0AF68">.</span><span style="color: #9ECE6A">custom-input</span><span style="color: #C0CAF5"> </span><span style="color: #9ABDF5">&#123;</span></span>
<span data-line=""><span style="color: #9ABDF5">    </span><span style="color: #A6AAAD">/* ... */</span></span>
<span data-line=""><span style="color: #9ABDF5">  &#125;</span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">style</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}<div data-rehype-pretty-code-title data-language="svelte" data-theme="light" data-svelte-h="svelte-8bdc34">CustomInput.svelte</div>${validate_component(Pre, "Components.pre").$$render(
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
<span data-line=""><span style="color: #343B58">  </span><span style="color: #0F4B6E">import</span><span style="color: #343B58"> </span><span style="color: #5A4A78">type</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123; </span><span style="color: #166775">HTMLInputAttributes</span><span style="color: #484C61"> &#125;</span><span style="color: #343B58"> </span><span style="color: #0F4B6E">from</span><span style="color: #343B58"> </span><span style="color: #4C505E">"</span><span style="color: #485E30">svelte/elements</span><span style="color: #4C505E">"</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #5A4A78">type</span><span style="color: #343B58"> $$Props </span><span style="color: #4C505E">=</span><span style="color: #343B58"> HTMLInputAttributes</span><span style="color: #4C505E">;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">script</span><span style="color: #B05467">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">input</span><span style="color: #69323D"> </span><span style="color: #5A4A78">class</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">custom-input</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">on</span><span style="color: #4C505E">:</span><span style="color: #343B58">input</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #8C4351; font-weight: bold">...</span><span style="color: #343B58">$$restProps</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">style</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B58">  </span><span style="color: #8F5E15">.</span><span style="color: #485E30">custom-input</span><span style="color: #343B58"> </span><span style="color: #484C61">&#123;</span></span>
<span data-line=""><span style="color: #484C61">    </span><span style="color: #9699A3; font-style: italic">/* ... */</span></span>
<span data-line=""><span style="color: #484C61">  &#125;</span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">style</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `We&#39;re forwarding the <code data-svelte-h="svelte-8zhjvf">on:input</code> event so that we handle the event in the parent component, and we&#39;re using the <code data-svelte-h="svelte-109cznm">$$restProps</code> spreadable to forward any additional props to the <code data-svelte-h="svelte-sik5fs">&lt;input /&gt;</code> element.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Now let&#39;s use the slot props provided by <code data-svelte-h="svelte-rgbtxo">&lt;Form.Field /&gt;</code> to wire up our custom input.`;
        }
      })} <div data-rehype-pretty-code-fragment>${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "dark"
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="dark" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">form</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">data</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">form&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">schema</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">someSchema</span><span style="color: #7DCFFF">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">config</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">enhance</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #F7768E">form</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">method</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">POST</span><span style="color: #89DDFF">"</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">use</span><span style="color: #89DDFF">:</span><span style="color: #7AA2F7">enhance</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #C0CAF5">config</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">attrs</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">let</span><span style="color: #89DDFF">:</span><span style="color: #E0AF68">handlers</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">name</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">"</span><span style="color: #9ECE6A">email</span><span style="color: #89DDFF">"</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Email</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Label</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">CustomInput</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">&#123;</span><span style="color: #F7768E; font-weight: bold">...</span><span style="color: #C0CAF5">attrs</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">input</span><span style="color: #BB9AF7">&#125;</span><span style="color: #DE5971"> </span><span style="color: #BB9AF7">on</span><span style="color: #89DDFF">:</span><span style="color: #C0CAF5">input</span><span style="color: #89DDFF">=</span><span style="color: #7DCFFF">&#123;</span><span style="color: #C0CAF5">handlers</span><span style="color: #89DDFF">.</span><span style="color: #7DCFFF">input&#125;</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span><span style="color: #A9B1D6">Please use your company email.</span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Description</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">      </span><span style="color: #BA3C97">&#x3C;</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Validation</span><span style="color: #DE5971"> </span><span style="color: #BA3C97">/></span></span>
<span data-line=""><span style="color: #A9B1D6">    </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Field</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #A9B1D6">  </span><span style="color: #BA3C97">&#x3C;/</span><span style="color: #F7768E">form</span><span style="color: #BA3C97">></span></span>
<span data-line=""><span style="color: #BA3C97">&#x3C;/</span><span style="color: #52BACD">Form</span><span style="color: #DE5971">.</span><span style="color: #52BACD">Root</span><span style="color: #BA3C97">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}${validate_component(Pre, "Components.pre").$$render(
        $$result,
        {
          "data-language": "svelte",
          "data-theme": "light",
          "data-non-pp": true
        },
        {},
        {
          default: () => {
            return `<!-- HTML_TAG_START -->${`<code data-line-numbers="" data-language="svelte" data-theme="light" style="display: grid;" data-line-numbers-max-digits="2"><span data-line=""><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #69323D"> </span><span style="color: #5A4A78">form</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">data</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">form&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">schema</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">someSchema</span><span style="color: #0F4B6E">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">config</span><span style="color: #69323D"> </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">enhance</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;</span><span style="color: #8C4351">form</span><span style="color: #69323D"> </span><span style="color: #5A4A78">method</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">POST</span><span style="color: #4C505E">"</span><span style="color: #69323D"> </span><span style="color: #5A4A78">use</span><span style="color: #4C505E">:</span><span style="color: #34548A">enhance</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #343B58">config</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">attrs</span><span style="color: #69323D"> </span><span style="color: #5A4A78">let</span><span style="color: #4C505E">:</span><span style="color: #8F5E15">handlers</span><span style="color: #69323D"> </span><span style="color: #5A4A78">name</span><span style="color: #4C505E">=</span><span style="color: #4C505E">"</span><span style="color: #485E30">email</span><span style="color: #4C505E">"</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span><span style="color: #343B59">Email</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Label</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">CustomInput</span><span style="color: #69323D"> </span><span style="color: #5A4A78">&#123;</span><span style="color: #8C4351; font-weight: bold">...</span><span style="color: #343B58">attrs</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">input</span><span style="color: #5A4A78">&#125;</span><span style="color: #69323D"> </span><span style="color: #5A4A78">on</span><span style="color: #4C505E">:</span><span style="color: #343B58">input</span><span style="color: #4C505E">=</span><span style="color: #0F4B6E">&#123;</span><span style="color: #343B58">handlers</span><span style="color: #4C505E">.</span><span style="color: #0F4B6E">input&#125;</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span><span style="color: #343B59">Please use your company email.</span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Description</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">      </span><span style="color: #B05467">&#x3C;</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Validation</span><span style="color: #69323D"> </span><span style="color: #B05467">/></span></span>
<span data-line=""><span style="color: #343B59">    </span><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Field</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #343B59">  </span><span style="color: #B05467">&#x3C;/</span><span style="color: #8C4351">form</span><span style="color: #B05467">></span></span>
<span data-line=""><span style="color: #B05467">&#x3C;/</span><span style="color: #166775">Form</span><span style="color: #69323D">.</span><span style="color: #166775">Root</span><span style="color: #B05467">></span></span></code>`}<!-- HTML_TAG_END -->`;
          }
        }
      )}</div> ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `We&#39;re using the <code data-svelte-h="svelte-19z6bw2">attrs</code> slot prop to apply the necessary attributes to our custom input, and we&#39;re using the <code data-svelte-h="svelte-11uovj5">handlers</code> slot prop to update the field&#39;s <code data-svelte-h="svelte-18vs4ol">value</code> store as the user interacts with the input.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Of course we could also bring our own <code data-svelte-h="svelte-oy6e06">&lt;Form.Label /&gt;</code>, <code data-svelte-h="svelte-1xbuxw2">&lt;Form.Description /&gt;</code>, and <code data-svelte-h="svelte-1iodlr5">&lt;Form.Validation /&gt;</code> components, and the process would be the same, except they would receive <code data-svelte-h="svelte-1865azk">{...attrs.label}</code>, <code data-svelte-h="svelte-h02x1w">{...attrs.description}</code>, and <code data-svelte-h="svelte-1d4ufc5">{...attrs.validation}</code> respectively.`;
        }
      })}`;
    }
  })}`;
});
export {
  Headless_usage as default,
  metadata
};
