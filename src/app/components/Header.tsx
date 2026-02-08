interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export function Header({ title, showBack, onBack }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-neutral-200">
      <div className="max-w-md mx-auto px-6 py-4 flex items-center gap-3">
        {showBack && (
          <button
            onClick={onBack}
            className="text-neutral-600 hover:text-neutral-900"
            aria-label="Go back"
          >
            ←
          </button>
        )}
        <h1 className="text-lg tracking-wide flex-1">
          {title || "Banjare Musafir"}
        </h1>
      </div>
    </header>
  );
}
