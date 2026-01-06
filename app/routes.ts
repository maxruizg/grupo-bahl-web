import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("proyectos", "routes/proyectos.tsx"),
  route("contacto", "routes/contacto.tsx"),
] satisfies RouteConfig;
