import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { contactDetails } from '@/data/site';

const details = [
  { icon: Mail, label: 'Email', value: contactDetails.email },
  { icon: Phone, label: 'Phone', value: contactDetails.phone },
  { icon: MapPin, label: 'Studio', value: contactDetails.address },
  { icon: Clock, label: 'Hours', value: contactDetails.hours },
];

export function ContactIntro() {
  return (
    <div className="flex flex-col">
      <p className="eyebrow mb-6">Contact</p>
      <h1 className="text-6xl leading-[1.02] md:text-7xl">Let’s talk style.</h1>
      <p className="mt-8 max-w-md text-base leading-[1.5] text-ink-600 md:text-lg">
        Share a question about the collection, your visit or the HerDay story. We will be glad to hear from
        you.
      </p>

      <dl className="mt-14 divide-y divide-ink-900/10 border-y border-ink-900/10">
        {details.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-5 py-6">
            <Icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
            <div>
              <dt className="eyebrow mb-2 text-ink-500">{label}</dt>
              <dd className="text-base text-ink-700">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-xs text-ink-500">Contact details are placeholders until confirmed.</p>
    </div>
  );
}
