import React from 'react';
import { Cat, Copy, Grid3X3, Megaphone, PencilLine, Undo2 } from 'lucide-react';

const DoodleIcon = ({ children }) => (
  <span className="inline-flex translate-y-[0.08em] items-center px-1 text-navy">
    {children}
  </span>
);

const Manifesto = () => {
  return (
    <section className="w-full bg-cream px-4 py-20 text-navy md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mx-auto max-w-5xl font-sans text-[2.2rem] font-normal leading-[1.15] tracking-tight md:text-[4rem]">
          We believe creativity <DoodleIcon><PencilLine size={38} strokeWidth={1.9} /></DoodleIcon> should solve
          problems, not just sit <DoodleIcon><Cat size={36} strokeWidth={1.9} /></DoodleIcon> pretty. That&apos;s why every
          pixel <DoodleIcon><Copy size={36} strokeWidth={1.9} /></DoodleIcon>, strategy <DoodleIcon><Grid3X3 size={36} strokeWidth={1.9} /></DoodleIcon> and
          campaign <DoodleIcon><Megaphone size={36} strokeWidth={1.9} /></DoodleIcon> we create is
          <DoodleIcon><Undo2 size={36} strokeWidth={1.9} /></DoodleIcon> brewed with design thinking and intent.
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
