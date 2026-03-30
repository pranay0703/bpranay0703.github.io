type EditorialContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function EditorialContainer({ children, className }: EditorialContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[72rem] px-4 sm:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}
