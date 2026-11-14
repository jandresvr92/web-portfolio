import { Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const SOCIALS = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/jandresvr/", Icon: Linkedin },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/jandres_vr/", Icon: Instagram },
  { id: "x", label: "X", href: "https://x.com/JimmyScr", Icon: Twitter },
];

// The profile node's outbound links, as a row of cyan connection sockets.
export default function SocialLinks({ className }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {SOCIALS.map(({ id, label, href, Icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="flex h-10 w-10 items-center justify-center border border-zinc-800 bg-black/20 text-zinc-400 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-cyan-400"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}