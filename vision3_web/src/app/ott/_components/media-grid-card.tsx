// vision3_web/src/app/ott/_components/media-grid-card.tsx
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  progress?: string;
  actionLabel?: string;
};


export default function MediaGridCard({
  title,
  subtitle,
  image,
  href,
  progress,
  actionLabel = "이어서 재생",
}: Props) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]">
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 hover:scale-[1.03]"
          sizes="(max-width: 1280px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.24)_48%,rgba(0,0,0,0.82)_100%)]" />
      </div>

      <div className="p-5">
        <p className="text-sm text-white/60">{subtitle}</p>
        <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>

        {progress && (
          <div className="mt-4">
            <div className="h-2 w-full rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-white"
                style={{ width: progress }}
              />
            </div>
            <p className="mt-2 text-xs font-medium text-white/52">
              {progress} 시청 완료
            </p>
          </div>
        )}

        <div className="mt-5 flex gap-2">
          <Link
            href={href}
            className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
          >
            {actionLabel}
          </Link>

          <button
            type="button"
            className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
          >
            상세 보기
          </button>
        </div>
      </div>
    </article>
  );
}