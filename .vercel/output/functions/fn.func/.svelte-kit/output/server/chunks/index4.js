import { d as derived, w as writable } from "./index2.js";
import { j as get_store_value, s as setContext, k as getContext, c as create_ssr_component, d as subscribe, o as onDestroy, a as compute_rest_props, b as spread, e as escape_object } from "./ssr.js";
import { e as executeCallbacks, b as addMeltEventListener, d as useEscapeKeydown, t as tick, n as noop, u as useClickOutside, a as isBrowser, k as kbd, i as isHTMLElement, r as removeUndefined, h as getOptionUpdater, q as isBrowser$1 } from "./index3.js";
import { t as toWritableStores, g as generateId, o as overridable, e as effect, s as sleep, b as builder, a as styleToString, d as createFocusTrap, h as getPortalDestination, u as usePortal, r as removeScroll, f as createElHelpers, l as last, c as createDispatcher } from "./events.js";
import { tv } from "tailwind-variants";
import "./index.js";
import "clsx";
const { name } = createElHelpers("dialog");
const defaults = {
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  role: "dialog",
  defaultOpen: false,
  portal: "body",
  forceVisible: false
};
const openDialogIds = writable([]);
function createDialog(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(withDefaults);
  const { preventScroll, closeOnEscape, closeOnOutsideClick, role, portal, forceVisible } = options;
  const activeTrigger = writable(null);
  const ids = {
    content: generateId(),
    title: generateId(),
    description: generateId(),
    trigger: generateId()
  };
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const isVisible = derived([open, forceVisible], ([$open, $forceVisible]) => {
    return $open || $forceVisible;
  });
  function handleOpen(e) {
    const el = e.currentTarget;
    const triggerEl = e.currentTarget;
    if (!isHTMLElement(el) || !isHTMLElement(triggerEl))
      return;
    open.set(true);
    activeTrigger.set(triggerEl);
  }
  function handleClose() {
    open.set(false);
    const triggerEl = document.getElementById(ids.trigger);
    if (triggerEl) {
      tick().then(() => {
        triggerEl.focus();
      });
    }
  }
  effect([open], ([$open]) => {
    sleep(100).then(() => {
      if ($open) {
        openDialogIds.update((prev) => {
          prev.push(ids.content);
          return prev;
        });
      } else {
        openDialogIds.update((prev) => prev.filter((id) => id !== ids.content));
      }
    });
  });
  const trigger = builder(name("trigger"), {
    stores: open,
    returned: ($open) => {
      return {
        id: ids.trigger,
        "aria-haspopup": "dialog",
        "aria-expanded": $open,
        "aria-controls": ids.content,
        type: "button"
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        handleOpen(e);
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        handleOpen(e);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const overlay = builder(name("overlay"), {
    stores: [isVisible],
    returned: ([$isVisible]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        }),
        "aria-hidden": true,
        "data-state": $isVisible ? "open" : "closed"
      };
    },
    action: (node) => {
      let unsubEscapeKeydown = noop;
      if (get_store_value(closeOnEscape)) {
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            handleClose();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          unsubEscapeKeydown = escapeKeydown.destroy;
        }
      }
      return {
        destroy() {
          unsubEscapeKeydown();
        }
      };
    }
  });
  const content = builder(name("content"), {
    stores: [isVisible],
    returned: ([$isVisible]) => {
      return {
        id: ids.content,
        role: get_store_value(role),
        "aria-describedby": ids.description,
        "aria-labelledby": ids.title,
        "data-state": $isVisible ? "open" : "closed",
        tabindex: -1,
        hidden: $isVisible ? void 0 : true,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        })
      };
    },
    action: (node) => {
      let activate = noop;
      let deactivate = noop;
      const destroy = executeCallbacks(effect([open], ([$open]) => {
        if (!$open)
          return;
        const focusTrap = createFocusTrap({
          immediate: false,
          escapeDeactivates: false,
          returnFocusOnDeactivate: false,
          fallbackFocus: node
        });
        activate = focusTrap.activate;
        deactivate = focusTrap.deactivate;
        const ac = focusTrap.useFocusTrap(node);
        if (ac && ac.destroy) {
          return ac.destroy;
        } else {
          return focusTrap.deactivate;
        }
      }), effect([closeOnOutsideClick, open], ([$closeOnOutsideClick, $open]) => {
        return useClickOutside(node, {
          enabled: $open,
          handler: (e) => {
            if (e.defaultPrevented)
              return;
            const $openDialogIds = get_store_value(openDialogIds);
            const isLast = last($openDialogIds) === ids.content;
            if ($closeOnOutsideClick && isLast) {
              handleClose();
            }
          }
        }).destroy;
      }), effect([closeOnEscape], ([$closeOnEscape]) => {
        if (!$closeOnEscape)
          return noop;
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            handleClose();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          return escapeKeydown.destroy;
        }
        return noop;
      }), effect([isVisible], ([$isVisible]) => {
        tick().then(() => {
          if (!$isVisible) {
            deactivate();
          } else {
            activate();
          }
        });
      }));
      return {
        destroy
      };
    }
  });
  const portalled = builder(name("portalled"), {
    stores: portal,
    returned: ($portal) => ({
      "data-portal": $portal ? "" : void 0
    }),
    action: (node) => {
      const unsubPortal = effect([portal], ([$portal]) => {
        if (!$portal)
          return noop;
        const portalDestination = getPortalDestination(node, $portal);
        if (portalDestination === null)
          return noop;
        const portalAction = usePortal(node, portalDestination);
        if (portalAction && portalAction.destroy) {
          return portalAction.destroy;
        } else {
          return noop;
        }
      });
      return {
        destroy() {
          unsubPortal();
        }
      };
    }
  });
  const title = builder(name("title"), {
    returned: () => ({
      id: ids.title
    })
  });
  const description = builder(name("description"), {
    returned: () => ({
      id: ids.description
    })
  });
  const close = builder(name("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        handleClose();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.SPACE && e.key !== kbd.ENTER)
          return;
        e.preventDefault();
        handleClose();
      }));
      return {
        destroy: unsub
      };
    }
  });
  effect([open, preventScroll], ([$open, $preventScroll]) => {
    if (!isBrowser)
      return;
    const unsubs = [];
    if ($preventScroll && $open)
      unsubs.push(removeScroll());
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  });
  return {
    elements: {
      content,
      trigger,
      title,
      description,
      overlay,
      close,
      portalled
    },
    states: {
      open
    },
    options
  };
}
const NAME = "Dialog";
const ctx = {
  set,
  get
};
function set(props) {
  const dialog = createDialog({ ...removeUndefined(props), role: "dialog" });
  setContext(NAME, {
    ...dialog,
    transitionTimes: props.transitionTimes,
    tOpen: props.tOpen
  });
  return {
    ...dialog,
    updateOption: getOptionUpdater(dialog.options)
  };
}
function get() {
  return getContext(NAME);
}
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $transitionTimes, $$unsubscribe_transitionTimes;
  let $tOpen, $$unsubscribe_tOpen;
  let { preventScroll = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { forceVisible = true } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  const transitionTimes = writable({});
  $$unsubscribe_transitionTimes = subscribe(transitionTimes, (value) => $transitionTimes = value);
  const tOpen = writable(open);
  $$unsubscribe_tOpen = subscribe(tOpen, (value) => $tOpen = value);
  let timeout = 0;
  const { states: { open: localOpen }, updateOption } = ctx.set({
    closeOnEscape,
    preventScroll,
    closeOnOutsideClick,
    portal,
    forceVisible,
    defaultOpen: open,
    transitionTimes,
    tOpen,
    onOpenChange: ({ next }) => {
      if (!isBrowser$1) {
        return next;
      }
      window.clearTimeout(timeout);
      if (open !== next) {
        onOpenChange?.(next);
      }
      if (next !== $tOpen) {
        tOpen.set(next);
        if (!next) {
          timeout = window.setTimeout(
            () => {
              localOpen.set(next);
            },
            $transitionTimes.out ? $transitionTimes.out * 0.6 : 0
          );
          open = !next;
          return !next;
        } else {
          open = next;
          return next;
        }
      }
      open = next;
      return next;
    }
  });
  onDestroy(() => {
    if (isBrowser$1) {
      window.clearTimeout(timeout);
    }
  });
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
    $$bindings.preventScroll(preventScroll);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.forceVisible === void 0 && $$bindings.forceVisible && forceVisible !== void 0)
    $$bindings.forceVisible(forceVisible);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("forceVisible", forceVisible);
  }
  $$unsubscribe_transitionTimes();
  $$unsubscribe_tOpen();
  return `${slots.default ? slots.default({}) : ``}`;
});
const DialogTrigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asChild"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  const { elements: { trigger } } = ctx.get();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder: $trigger }) : ``}` : (() => {
    let builder2 = $trigger;
    return ` <button${spread([escape_object(builder2), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder: builder2 }) : ``}</button>`;
  })()}`;
});
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set22) => {
    });
    const { subscribe: subscribe2, set: set2 } = store;
    stores[key] = {
      set(value) {
        set2(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set2(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
const modeCurrent = localStorageStore("modeCurrent", false);
function setInitialClassState() {
  const elemHtmlClasses = document.documentElement.classList;
  const condLocalStorageUserPrefs = localStorage.getItem("modeUserPrefers") === "false";
  const condLocalStorageUserPrefsExists = !("modeUserPrefers" in localStorage);
  const condMatchMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (condLocalStorageUserPrefs || condLocalStorageUserPrefsExists && condMatchMedia) {
    elemHtmlClasses.add("dark");
  } else {
    elemHtmlClasses.remove("dark");
  }
}
const Root = Dialog;
const Trigger = DialogTrigger;
const sheetVariants = tv({
  base: "fixed z-50 gap-4 bg-background p-6 shadow-lg",
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b ",
      bottom: "inset-x-0 bottom-0 border-t",
      left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm"
    }
  },
  defaultVariants: {
    side: "right"
  }
});
tv({
  base: "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
export {
  Root as R,
  Trigger as T,
  setInitialClassState as a,
  ctx as c,
  modeCurrent as m,
  sheetVariants as s
};
