import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { LinksFunction, MetaFunction } from "react-router";

import "./styles/tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Grupo Bahlcasa | Agencia 360 - 35 años de resultados memorables" },
    {
      name: "description",
      content:
        "Somos una agencia 360 con 35 años de experiencia. Eventos a la medida, punto de venta, contenido digital, relaciones públicas y eventos sociales. Transformamos ideas en resultados memorables.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#0a0a0a" },
    { property: "og:title", content: "Grupo Bahlcasa | Agencia 360" },
    {
      property: "og:description",
      content:
        "35 años creando experiencias memorables. Eventos corporativos, activaciones BTL, contenido digital y más.",
    },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_MX" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@200;300;400;500;600;700&display=swap",
  },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "canonical", href: "https://grupobahlcasa.com" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body className="bg-brand-black text-gray-200 font-body antialiased">
        {/* Grain overlay for luxury texture */}
        <div className="grain-overlay" aria-hidden="true" />
        
        {/* Main application */}
        <Header />
        <main>{children}</main>
        <Footer />
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Error | Grupo Bahlcasa</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-brand-black text-gray-200 font-body min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="heading-display heading-lg text-gradient-pink mb-4">
            Oops!
          </h1>
          <p className="text-gray-400 mb-8">
            Algo salió mal. Por favor, intenta de nuevo.
          </p>
          <a href="/" className="btn btn-primary">
            <span>Volver al inicio</span>
          </a>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
