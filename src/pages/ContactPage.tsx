import { ContactForm } from '@/components/contact/ContactForm';
import { ContactIntro } from '@/components/contact/ContactIntro';

export function ContactPage() {
  return (
    <section className="container-editorial grid gap-20 pb-28 pt-40 md:pt-44 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <ContactIntro />
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ContactForm />
      </div>
    </section>
  );
}
