import { AVATAR_PATH } from "../profileAsset";
import StatusBadge from "./StatusBadge";

// The agent portrait inside a set of slowly counter-rotating HUD rings, with a
// status badge hanging off the bottom edge. On phones the badge is wider than
// the portrait, so DossierMeta shows it instead.
export default function AvatarHud({ name }) {
  return (
    <div className="relative h-[104px] w-[104px] shrink-0">
      <svg
        viewBox="0 0 120 120"
        aria-hidden
        className="absolute inset-0 h-full w-full text-cyan-400/40"
      >
        <circle
          cx="60"
          cy="60"
          r="58"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 9"
          className="animate-[spin_22s_linear_infinite] motion-reduce:animate-none"
          style={{ transformOrigin: "60px 60px" }}
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="30 16"
          strokeOpacity="0.7"
          className="animate-[spin_34s_linear_infinite_reverse] motion-reduce:animate-none"
          style={{ transformOrigin: "60px 60px" }}
        />
        <circle cx="60" cy="2" r="1.6" fill="currentColor" />
        <circle cx="60" cy="118" r="1.6" fill="currentColor" />
      </svg>

      <div className="absolute inset-[15px] overflow-hidden rounded-full border border-cyan-400/60 shadow-[0_0_18px_rgba(34,211,238,0.35)]">
        <img
          src={AVATAR_PATH}
          alt={name}
          width={96}
          height={96}
          draggable={false}
          className="h-full w-full select-none object-cover"
        />
      </div>

      <StatusBadge className="absolute -bottom-2 left-1/2 -translate-x-1/2 sheet:hidden" />
    </div>
  );
}