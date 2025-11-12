import React, { useEffect, useRef } from "react";

type FinancialDrawerProps = {
  onClose: () => void;
};

const NavItem: React.FC<{
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ icon, label, active = false, onClick }) => (
  <li>
    <button
      onClick={onClick}
      className={
        "flex h-12 w-full items-center gap-4 rounded-lg px-4 transition-colors " +
        (active ? "bg-primary/20 text-primary" : "hover:bg-white/10")
      }
    >
      <span className="material-symbols-outlined" aria-hidden>
        {icon}
      </span>
      <span className={"text-base leading-tight " + (active ? "font-semibold" : "font-medium")}>{label}</span>
    </button>
  </li>
);

const FinancialDrawer: React.FC<FinancialDrawerProps> = ({ onClose }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll while open (component renders only when open)
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // ESC to close + focus first focusable
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const t = window.setTimeout(() => {
      const first = drawerRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    }, 0);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [onClose]);

  return (
    <>
      {/* Scrim/Overlay */}
      <button
        aria-label="Close navigation"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef as React.RefObject<HTMLDivElement>}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation drawer"
        className="fixed left-0 top-0 z-50 h-full w-10/12 max-w-sm bg-[#013220] p-4 text-[#F5F5F5] shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <p className="text-lg font-semibold tracking-wide text-white">Celebrum Soultion</p>
          <button onClick={onClose} className="p-2 rounded hover:bg-white/10" aria-label="Close navigation">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Nav items */}
        <ul className="flex flex-col gap-2">
          <NavItem icon="info" label="About us" active onClick={onClose} />
          <NavItem icon="shopping_bag" label="Products" onClick={onClose} />
          <NavItem icon="work" label="Services" onClick={onClose} />
          <NavItem icon="groups" label="Consultancy" onClick={onClose} />
          <NavItem icon="menu_book" label="Trainings" onClick={onClose} />
          <NavItem icon="call" label="Contact" onClick={onClose} />
        </ul>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-white/10">
        

          <div className="mt-4 flex items-center justify-between px-1">
            <div className="flex gap-4">
              <a href="#" className="h-6 w-6 text-white/50 hover:text-white" aria-label="LinkedIn">
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0H5A5 5 0 0 0 0 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V8h3v11ZM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.204 6.5 3.204 8.25 3.994 8.25 4.968 7.466 6.732 6.5 6.732ZM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765C14.396 7.179 20 6.988 20 12.241V19Z" />
                </svg>
              </a>
              <a href="#" className="h-6 w-6 text-white/50 hover:text-white" aria-label="Twitter">
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477 4.072 4.072 0 0 1-1.17-.36v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-white/40">v1.0.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FinancialDrawer;
