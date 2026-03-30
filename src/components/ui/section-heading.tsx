type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-6 sm:mb-8">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.24em] text-(--color-muted)">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className="mt-2 text-balance text-2xl font-semibold tracking-tight text-(--color-text) sm:text-[2rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-pretty text-sm leading-7 text-(--color-muted) sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
