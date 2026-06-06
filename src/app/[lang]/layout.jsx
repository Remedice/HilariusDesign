import { notFound } from "next/navigation";
import ClientProviders from "../../components/ClientProviders";
import { routesConfig } from "../../router/routesConfig";

export function generateStaticParams() {
  return routesConfig.i18n.supported.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!routesConfig.i18n.supported.includes(lang)) notFound();

  return <ClientProviders lang={lang}>{children}</ClientProviders>;
}
