interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: Props) {
  return <div className={`app-card p-4 ${className}`}>{children}</div>;
}
