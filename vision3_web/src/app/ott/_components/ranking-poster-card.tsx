// vision3_web/src/app/ott/_components/ranking-poster-card.tsx
import Image from "next/image";
import Link from "next/link";

type Props = {
  rank: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export default function RankingPosterCard({
  rank,
  title,
  subtitle,
  image,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 1280px) 100vw, 20vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.86)_100%)]" />

        <div className="absolute left-4 top-3 text-6xl font-black text-white/90">
          {rank}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-lg font-semibold text-white">{title}</p>
          <p className="mt-1 text-sm text-white/70">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}