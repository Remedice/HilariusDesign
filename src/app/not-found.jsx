import NotFound from "../views/NotFound/NotFound";

export const metadata = {
  robots: { index: false, follow: false }
};

export default function NotFoundPage() {
  return <NotFound />;
}
