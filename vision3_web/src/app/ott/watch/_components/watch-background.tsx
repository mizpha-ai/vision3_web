// vision3_web/src/app/ott/watch/_components/watch-background.tsx
import type { WatchGenreKey } from "@/app/ott/data/watch-data";

type Props = {
  genre: WatchGenreKey;
};

export default function WatchBackground({ genre }: Props) {
  const isRofan = genre === "rofan";
  const isRomance = genre === "romance";
  const isSf = genre === "sf";
  const isMurim = genre === "murim";
  const isHorror = genre === "horror";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {isRofan ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff8fc_0%,#fff6fb_18%,#fff8fc_48%,#f8fbff_100%)]" />
          <div className="absolute left-[-185px] top-[-350px] h-[700px] w-[700px] rounded-full bg-[#ffd8ec] blur-[165px]" />
          <div className="absolute left-[15%] top-[-185px] h-[470px] w-[470px] rounded-full bg-[#fff8fc] blur-[130px]" />
          <div className="absolute right-[-185px] top-[-230px] h-[680px] w-[680px] rounded-full bg-[#eef9ff] blur-[165px]" />
          <div className="absolute bottom-[-120px] left-[14%] h-[340px] w-[340px] rounded-full bg-[#e7dcff] blur-[110px]" />
          <div className="absolute bottom-[-100px] right-[10%] h-[320px] w-[320px] rounded-full bg-[#dff4ff] blur-[110px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,216,236,0.24),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(223,244,255,0.20),transparent_30%),radial-gradient(circle_at_18%_6%,rgba(231,220,255,0.18),transparent_28%)]" />
        </>
      ) : isRomance ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#faf6f2_0%,#f7f0eb_28%,#f8f3ef_62%,#fcfaf8_100%)]" />
          <div className="absolute left-[-80px] top-[-90px] h-[300px] w-[300px] rounded-full bg-[#ead5d8] blur-[85px]" />
          <div className="absolute right-[-70px] top-[100px] h-[260px] w-[260px] rounded-full bg-[#f1ddd4] blur-[85px]" />
          <div className="absolute bottom-[-90px] left-[16%] h-[280px] w-[280px] rounded-full bg-[#e9dede] blur-[95px]" />
          <div className="absolute bottom-[-80px] right-[14%] h-[300px] w-[300px] rounded-full bg-[#f3ebe4] blur-[95px]" />
        </>
      ) : isSf ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#061019_0%,#081722_26%,#0a1b29_58%,#07131d_100%)]" />
          <div className="absolute left-[-90px] top-[-90px] h-[340px] w-[340px] rounded-full bg-[#3ecfff]/18 blur-[110px]" />
          <div className="absolute right-[-80px] top-[80px] h-[300px] w-[300px] rounded-full bg-[#5ea9ff]/14 blur-[110px]" />
          <div className="absolute bottom-[-100px] left-[14%] h-[320px] w-[320px] rounded-full bg-[#89e8ff]/10 blur-[120px]" />
          <div className="absolute bottom-[-80px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#7cd7ff]/10 blur-[120px]" />
        </>
      ) : isMurim ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4f0e4_0%,#ece7d7_30%,#e6e1d2_62%,#eef0e5_100%)]" />
          <div className="absolute left-[-90px] top-[-90px] h-[320px] w-[320px] rounded-full bg-[#d9dfc3] blur-[100px]" />
          <div className="absolute right-[-80px] top-[90px] h-[280px] w-[280px] rounded-full bg-[#e7d8b4] blur-[100px]" />
          <div className="absolute bottom-[-90px] left-[14%] h-[300px] w-[300px] rounded-full bg-[#d7dfcf] blur-[110px]" />
          <div className="absolute bottom-[-80px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#efe7d3] blur-[110px]" />
        </>
      ) : isHorror ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#060606_0%,#0b090a_28%,#11090b_60%,#070707_100%)]" />
          <div className="absolute left-[-90px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#7d1f2a]/18 blur-[110px]" />
          <div className="absolute right-[-80px] top-[100px] h-[280px] w-[280px] rounded-full bg-[#2a3034]/14 blur-[110px]" />
          <div className="absolute bottom-[-100px] left-[14%] h-[320px] w-[320px] rounded-full bg-[#4b0f17]/12 blur-[120px]" />
          <div className="absolute bottom-[-80px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#1b2225]/10 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,white_0.6px,transparent_0.8px)] bg-[size:14px_14px]" />
        </>
      ) : null}
    </div>
  );
}