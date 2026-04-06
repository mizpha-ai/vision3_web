// vision3_web/src/app/ott/components/series/series-shell.tsx
import MediaShell from "@/app/ott/components/media/media-shell";
import type { GenreKey } from "@/app/ott/data/discover-data";

type Props = {
  activeGenre: GenreKey;
};

export default function SeriesShell({ activeGenre }: Props) {
  return <MediaShell activeGenre={activeGenre} mode="series" />;
}