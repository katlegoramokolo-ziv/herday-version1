import { useState, type FormEvent, type ReactNode } from 'react';
import { Check } from 'lucide-react';
import {
  MESSAGE_MAX_LENGTH,
  emptyContactValues,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/components/contact/contactValidation';

type FormStatus = 'idle' | 'invalid' | 'success';

const fieldBase =
  'peer w-full border-0 border-b bg-transparent px-0 py-3 text-base text-ink-900 placeholder:text-ink-500 outline-none transition-colors duration-300 focus:border-teal-600';

function fieldClass(hasError: boolean) {
  return `${fieldBase} ${hasError ? 'border-error-600' : 'border-ink-900/25 hover:border-ink-900/60'}`;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const updateField = (field: keyof ContactFormValues, value: string) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (errors[field]) {
      setErrors(validateContactForm(nextValues));
    }
  };

  const validateField = (field: keyof ContactFormValues) => {
    const fieldErrors = validateContactForm(values);
    setErrors((current) => ({ ...current, [field]: fieldErrors[field] }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    setStatus(Object.keys(nextErrors).length > 0 ? 'invalid' : 'success');
  };

  const resetForm = () => {
    setValues(emptyContactValues);
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div role="status" className="flex min-h-[480px] flex-col justify-center border border-success-600/30 bg-success-50 p-10 md:p-14">
        <span className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-success-600 text-cream-50">
          <Check aria-hidden="true" className="h-6 w-6" />
        </span>
        <h2 className="text-4xl md:text-5xl">Thank you for writing.</h2>
        <p className="mt-6 max-w-md text-base text-ink-700">
          Your message has been checked and is ready. This page is a design prototype, so nothing has been
          sent to HerDay yet.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-10 inline-flex min-h-[48px] w-fit items-center border border-ink-900/30 px-7 text-sm font-medium text-ink-900 transition-all duration-500 hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50"
        >
          Write another message
        </button>
      </div>
    );
  }

  const hasErrors = status === 'invalid' && Object.keys(errors).length > 0;

  return (
    <form noValidate onSubmit={handleSubmit} className="bg-cream-50 p-0 md:p-2" aria-label="Contact form">
      {hasErrors && (
        <div
          role="alert"
          className="mb-10 border-l-2 border-error-600 bg-error-50 px-5 py-4 text-sm text-error-700"
        >
          Please review the highlighted fields below. Your message has not been sent.
        </div>
      )}

      <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
        <Field
          id="contact-name"
          label="Full name"
          error={errors.name}
          className="md:col-span-1"
        >
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField('name', event.target.value)}
            onBlur={() => validateField('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            placeholder="Jane Doe"
            className={fieldClass(Boolean(errors.name))}
          />
        </Field>

        <Field id="contact-email" label="Email address" error={errors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            onBlur={() => validateField('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            placeholder="jane@example.com"
            className={fieldClass(Boolean(errors.email))}
          />
        </Field>

        <Field id="contact-subject" label="Subject" error={errors.subject} className="md:col-span-2">
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={(event) => updateField('subject', event.target.value)}
            onBlur={() => validateField('subject')}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
            placeholder="How can we help?"
            className={fieldClass(Boolean(errors.subject))}
          />
        </Field>

        <Field id="contact-message" label="Message" error={errors.message} className="md:col-span-2">
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
            onBlur={() => validateField('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-count'}
            placeholder="Tell us a little about your question."
            className={`${fieldClass(Boolean(errors.message))} resize-y`}
          />
          <p id="contact-message-count" className="mt-2 text-right text-xs text-ink-500">
            {values.message.trim().length} / {MESSAGE_MAX_LENGTH}
          </p>
        </Field>
      </div>

      <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-sm text-xs leading-[1.5] text-ink-500">
          Frontend prototype: this form checks your details but does not send messages anywhere.
        </p>
        <button
          type="submit"
          className="inline-flex min-h-[48px] items-center justify-center bg-teal-500 px-9 text-sm font-medium tracking-wide text-ink-900 transition-colors duration-500 hover:bg-ink-900 hover:text-cream-50"
        >
          Send message
        </button>
      </div>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

function Field({ id, label, error, className = '', children }: FieldProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="mb-1 text-xs font-medium uppercase tracking-eyebrow text-ink-600">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-error-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
