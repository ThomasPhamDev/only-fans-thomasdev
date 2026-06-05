'use client';

import { useTranslationContext } from '@/components/TranslationProvider';

const LanguageSwitcher = () => {
  const { locale, changeLanguage, isLoading } = useTranslationContext();
  const nextLocale = locale === 'vi' ? 'en' : 'vi';
  const label = nextLocale === 'vi' ? 'VN' : 'EN';

  return (
    <button
      type="button"
      onClick={() => changeLanguage(nextLocale)}
      disabled={isLoading}
      className="inline-flex h-9 min-w-9 items-center justify-center text-sm font-semibold text-foreground hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
      aria-label={`Switch to ${nextLocale === 'vi' ? 'Vietnamese' : 'English'}`}
      title={`Switch to ${nextLocale === 'vi' ? 'Vietnamese' : 'English'}`}
    >
      {label}
    </button>
  );
};

export default LanguageSwitcher;
