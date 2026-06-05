'use client';

import Link from 'next/link';
import { useTranslationContext } from '@/components/TranslationProvider';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import ThemeToggle from '@/components/common/ThemeToggle';
import { navigationItems } from '@/constants/navigation';
import { profile } from '@/data/portfolio';

const Header = () => {
  const { t } = useTranslationContext();

  const navigation = navigationItems.map((item) => ({
    name: t(item.labelKey),
    href: item.href,
  }));

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-bold text-primary md:text-2xl">
          {profile.displayName}
        </Link>

        <nav className="flex items-center gap-3 md:gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-foreground hover:text-primary md:text-base"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
