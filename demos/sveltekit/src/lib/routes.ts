import { m } from "./paraglide/messages.js";
import { routes as coreRoutes, type Routes } from "@repo/sveltekit-ui";

const myRoutes: Routes = {
  org_list: {
    name: m.routes_org_list(),
    url: "/org/",
    isProtected: true,
    showInMenu: true,
  },
  org_index: {
    name: m.routes_org_index(),
    url: (id: string) => `/org/${id}`,
    isProtected: true,
    showInMenu: false,
  },
  grocery_index: {
    name: m.routes_grocery_index(),
    url: (id: string) => `/org/${id}/grocery`,
    isProtected: true,
    showInMenu: false,
  },
};

export const routes = { ...coreRoutes, ...myRoutes };
