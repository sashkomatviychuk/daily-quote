import { Suspense } from 'react';

import CreateQuoteButton from '@/components/quote/CreateQuoteButton';
import LeadingQuote from '@/components/quote/LeadingQuote';
import Quotes from '@/components/quote/Quotes';
import QuoteSectionLeft from '@/components/quote/QuoteSectionLeft';
import QuotesLoading from '@/components/quote/QuotesLoading';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import Logo from '@/components/ui/Logo';
import Navigation from '@/components/ui/Navigation';
import ThemeToggler from '@/components/ui/ThemeToggler';
import SignInIndicator from '@/components/user/SignInIndicator';

interface HomePageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const { category } = await searchParams;

  return (
    <>
      <Header>
        <Logo />
        <div className="flex gap-4">
          <SignInIndicator />
          <ThemeToggler />
        </div>
      </Header>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 flex-1 overflow-y-auto">
        <section className="basis-1/3 lg:sticky top-0">
          <LeadingQuote className="text-xl leading-8 pt-6">
            Discover, Share and Amplify the power of quotes to inspire and uplift others on the journey of life.
          </LeadingQuote>
          <CreateQuoteButton />
          <QuoteSectionLeft />
          <Footer />
        </section>
        <main className="flex flex-col basis-2/3 items-center flex-1">
          <Navigation />
          <Suspense name="quotes" key={category ?? ''} fallback={<QuotesLoading />}>
            <Quotes category={category} />
          </Suspense>
        </main>
      </div>
    </>
  );
}
