import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Commercial Cleaning FAQ | Deer Valley Questions & Answers",
  description:
    "Find transparent answers regarding commercial cleaning costs, night schedules, healthcare disinfection, and insurance credentials in Deer Valley AZ.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
