// vision3_web/src/app/ott/discover/[genre]/page.tsx
import { notFound } from "next/navigation";
import DiscoverShell from "@/app/ott/components/discover/discover-shell";
import {
  genreKeys,
  isGenreKey,
} from "@/app/ott/data/discover-data";

type PageProps = {
  params: Promise<{
    genre: string;
  }>;
};

export function generateStaticParams() {
  return genreKeys.map((genre) => ({
    genre,
  }));
}

export default async function DiscoverGenrePage({ params }: PageProps) {
  const { genre } = await params;

  if (!isGenreKey(genre)) {
    notFound();
  }

  return <DiscoverShell activeGenre={genre} />;
}