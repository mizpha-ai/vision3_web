// vision3_web/src/app/ott/components/movies/movies-shell.tsx
import MediaShell from "@/app/ott/components/media/media-shell";
import type { GenreKey } from "@/app/ott/data/discover-data";

type Props = {
  activeGenre: GenreKey;
};

export default function MoviesShell({ activeGenre }: Props) {
  return <MediaShell activeGenre={activeGenre} mode="movies" />;
}