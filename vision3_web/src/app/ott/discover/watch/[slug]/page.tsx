// vision3_web/src/app/ott/discover/watch/[slug]/page.tsx
import { notFound } from "next/navigation";
import DiscoverWatchShell from "@/app/ott/components/discover/discover-watch-shell";
import {
  discoverFreeSlugByGenre,
  getWatchTitleBySlug,
} from "@/app/ott/data/watch-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    returnTo?: string;
  }>;
};

export default async function DiscoverWatchPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const title = getWatchTitleBySlug(slug);

  if (!title) {
    notFound();
  }

  const allowedSlugs = discoverFreeSlugByGenre[title.genre] ?? [];
  const isSeriesDiscoverTitle =
    allowedSlugs.includes(title.slug) && title.mode === "series";

  if (!isSeriesDiscoverTitle) {
    notFound();
  }

  const returnTo = resolvedSearchParams.returnTo || `/ott/discover/${title.genre}`;

  return <DiscoverWatchShell title={title} returnTo={returnTo} />;
}