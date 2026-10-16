import { personal } from "@/lib/data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={personal.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp (${personal.whatsapp})`}
      className="group fixed right-4 sm:right-6 bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-6 z-50 flex items-center gap-2"
    >
      <span className="hidden sm:block pointer-events-none whitespace-nowrap rounded-lg bg-ink dark:bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 shadow-card opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
        Chat on WhatsApp
      </span>
      <span className="grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform group-hover:scale-110">
        <WhatsAppIcon size={28} />
      </span>
    </a>
  );
}
