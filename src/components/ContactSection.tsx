import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Instagram, Phone, MapPin } from 'lucide-react';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '../data/agencyData';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from './LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { SectionBreadcrumb } from './SectionBreadcrumb';

interface FormValues {
  name: string;
  company: string;
  phone: string;
  serviceIndex: number;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  phone?: string;
}

export function ContactSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  const [values, setValues] = useState<FormValues>({
    name: '',
    company: '',
    phone: '',
    serviceIndex: 1,
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const selectedServiceLabel = t.serviceOptions[values.serviceIndex] ?? t.serviceOptions[1];

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (values.name.trim().length < 2) {
      nextErrors.name = t.nameError;
    }
    if (values.company.trim().length < 2) {
      nextErrors.company = t.companyError;
    }
    const digitsOnly = values.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      nextErrors.phone = t.phoneError;
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const compiledBrief = [
      t.briefGreeting(values.name.trim(), values.company.trim()),
      t.briefInterest(selectedServiceLabel),
      t.briefPhone(values.phone.trim()),
      values.message.trim() ? t.briefDetails(values.message.trim()) : '',
      t.briefClosing,
    ]
      .filter(Boolean)
      .join(' ');

    setSubmittedMessage(compiledBrief);
  };

  return (
    <section
      id="contato"
      className="bg-[#F4EFF3] dark:bg-[#0A080C] py-16 sm:py-24 transition-colors duration-200"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Direct Channels */}
            <div className="lg:col-span-5">
              <SectionBreadcrumb sectionLabel={t.kicker} sectionHref="#contato" />
              <p className="text-xs font-semibold tracking-wide text-[#C21462] dark:text-[#FF4D9D]">
                {t.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141018] dark:text-[#F5F2EB]">
                {t.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#463E4D] dark:text-[#CFC9D3]">
                {t.description}
              </p>

              <div className="mt-8 space-y-4 border-t border-[#141018]/10 dark:border-white/10 pt-6">
                <a
                  href={buildWhatsAppUrl(undefined, language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-xl border border-[#E61E7A]/35 bg-white dark:bg-[#140E17] p-4 transition-colors hover:border-[#C21462] dark:hover:border-[#FF4D9D]"
                >
                  <div className="flex items-center gap-3.5">
                    <Phone
                      className="w-5 h-5 text-[#9A7210] dark:text-[#F3D36B] shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs text-[#645A6C] dark:text-[#B3ACB8]">{t.whatsappLabel}</p>
                      <p className="font-numeric text-sm font-semibold text-[#141018] dark:text-[#F5F2EB]">
                        {WHATSAPP_DISPLAY}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#C21462] dark:text-[#FF4D9D] shrink-0"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-xl border border-[#141018]/10 dark:border-white/10 bg-white dark:bg-[#0F0D12] p-4 transition-colors hover:border-[#E61E7A]/55"
                >
                  <div className="flex items-center gap-3.5">
                    <Instagram
                      className="w-5 h-5 text-[#C21462] dark:text-[#FF4D9D] shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs text-[#645A6C] dark:text-[#B3ACB8]">
                        {t.instagramLabel}
                      </p>
                      <p className="text-sm font-semibold text-[#141018] dark:text-[#F5F2EB]">
                        {INSTAGRAM_HANDLE}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#645A6C] dark:text-[#B3ACB8] shrink-0"
                    aria-hidden="true"
                  />
                </a>

                <div className="flex items-center gap-3.5 rounded-xl border border-[#141018]/10 dark:border-white/10 bg-white dark:bg-[#0F0D12] p-4">
                  <MapPin
                    className="w-5 h-5 text-[#9A7210] dark:text-[#F3D36B] shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs text-[#645A6C] dark:text-[#B3ACB8]">{t.locationLabel}</p>
                    <p className="text-sm font-semibold text-[#141018] dark:text-[#F5F2EB]">
                      {t.locationValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Lead Form */}
            <div className="lg:col-span-7">
              <div className="surface-card rounded-2xl p-6 sm:p-8 border-[#E61E7A]/25">
                {submittedMessage ? (
                  <div className="py-4" role="status" aria-live="polite">
                    <div className="flex items-center gap-3 text-[#9A7210] dark:text-[#F3D36B]">
                      <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                      <h3 className="font-display text-2xl font-semibold text-[#141018] dark:text-[#F5F2EB]">
                        {t.successTitle}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#463E4D] dark:text-[#CFC9D3]">
                      {t.successDesc}
                    </p>

                    <div className="mt-5 rounded-xl border border-[#E61E7A]/30 bg-[#FAF8F9] dark:bg-[#060508] p-4 text-xs sm:text-sm text-[#2A2330] dark:text-[#DFDAE3] leading-relaxed">
                      {submittedMessage}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={buildWhatsAppUrl(submittedMessage, language)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg gold-metallic-bg px-6 py-3.5 text-sm font-semibold text-[#060508] min-h-[46px]"
                      >
                        <span>{t.sendWhatsAppBtn}</span>
                        <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmittedMessage(null)}
                        className="inline-flex items-center justify-center rounded-lg border border-[#141018]/15 dark:border-white/15 bg-white dark:bg-[#141018] px-4 py-3 text-xs font-medium text-[#141018] dark:text-[#F5F2EB] min-h-[46px] hover:border-[#C21462] dark:hover:border-[#FF4D9D]"
                      >
                        {t.editInfoBtn}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-[#141018] dark:text-[#F5F2EB]">
                        {t.formTitle}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#645A6C] dark:text-[#B3ACB8]">
                        {t.formSubtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-medium text-[#2A2330] dark:text-[#DFDAE3] mb-1.5"
                        >
                          {t.nameLabel}
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={values.name}
                          onChange={(e) => {
                            setValues({ ...values, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder={t.namePlaceholder}
                          aria-invalid={Boolean(errors.name)}
                          className="w-full rounded-lg border border-[#141018]/15 dark:border-white/15 bg-[#FAF8F9] dark:bg-[#060508] px-3.5 py-3 text-sm text-[#141018] dark:text-[#F5F2EB] placeholder:text-[#84798C] dark:placeholder:text-[#6E6A75] focus:border-[#C21462] dark:focus:border-[#FF4D9D] focus:outline-none min-h-[44px]"
                        />
                        {errors.name && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B91C1C] dark:text-[#F3D36B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-company"
                          className="block text-xs font-medium text-[#2A2330] dark:text-[#DFDAE3] mb-1.5"
                        >
                          {t.companyLabel}
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          required
                          value={values.company}
                          onChange={(e) => {
                            setValues({ ...values, company: e.target.value });
                            if (errors.company) setErrors({ ...errors, company: undefined });
                          }}
                          placeholder={t.companyPlaceholder}
                          aria-invalid={Boolean(errors.company)}
                          className="w-full rounded-lg border border-[#141018]/15 dark:border-white/15 bg-[#FAF8F9] dark:bg-[#060508] px-3.5 py-3 text-sm text-[#141018] dark:text-[#F5F2EB] placeholder:text-[#84798C] dark:placeholder:text-[#6E6A75] focus:border-[#C21462] dark:focus:border-[#FF4D9D] focus:outline-none min-h-[44px]"
                        />
                        {errors.company && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B91C1C] dark:text-[#F3D36B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.company}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-medium text-[#2A2330] dark:text-[#DFDAE3] mb-1.5"
                        >
                          {t.phoneLabel}
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={values.phone}
                          onChange={(e) => {
                            setValues({ ...values, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder={t.phonePlaceholder}
                          aria-invalid={Boolean(errors.phone)}
                          className="w-full rounded-lg border border-[#141018]/15 dark:border-white/15 bg-[#FAF8F9] dark:bg-[#060508] px-3.5 py-3 text-sm text-[#141018] dark:text-[#F5F2EB] placeholder:text-[#84798C] dark:placeholder:text-[#6E6A75] focus:border-[#C21462] dark:focus:border-[#FF4D9D] focus:outline-none min-h-[44px]"
                        />
                        {errors.phone && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B91C1C] dark:text-[#F3D36B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-xs font-medium text-[#2A2330] dark:text-[#DFDAE3] mb-1.5"
                        >
                          {t.serviceLabel}
                        </label>
                        <select
                          id="contact-service"
                          value={values.serviceIndex}
                          onChange={(e) =>
                            setValues({ ...values, serviceIndex: Number(e.target.value) })
                          }
                          className="w-full rounded-lg border border-[#141018]/15 dark:border-white/15 bg-[#FAF8F9] dark:bg-[#060508] px-3.5 py-3 text-sm text-[#141018] dark:text-[#F5F2EB] focus:border-[#C21462] dark:focus:border-[#FF4D9D] focus:outline-none min-h-[44px]"
                        >
                          {t.serviceOptions.map((option, index) => (
                            <option key={option} value={index}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-medium text-[#2A2330] dark:text-[#DFDAE3] mb-1.5"
                      >
                        {t.messageLabel}
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={values.message}
                        onChange={(e) => setValues({ ...values, message: e.target.value })}
                        placeholder={t.messagePlaceholder}
                        className="w-full rounded-lg border border-[#141018]/15 dark:border-white/15 bg-[#FAF8F9] dark:bg-[#060508] px-3.5 py-3 text-sm text-[#141018] dark:text-[#F5F2EB] placeholder:text-[#84798C] dark:placeholder:text-[#6E6A75] focus:border-[#C21462] dark:focus:border-[#FF4D9D] focus:outline-none resize-y"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-lg gold-metallic-bg px-6 py-3.5 text-sm font-semibold text-[#060508] ring-1 ring-[#E61E7A]/40 whitespace-nowrap min-h-[46px] transition-transform duration-150 hover:-translate-y-0.5"
                      >
                        <span>{t.submitBtn}</span>
                        <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                      </button>

                      <a
                        href={buildWhatsAppUrl(undefined, language)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#C21462] dark:text-[#FF4D9D] hover:underline whitespace-nowrap"
                      >
                        {t.directCallLink}
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
