import { lazy, Suspense } from 'react';

const FlagOptions = lazy(
  () => import('./components/Home/FlagOptions/FlagOptions')
);
const Footer = lazy(() => import('./components/Footer/Footer'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const QuickStart = lazy(
  () => import('./components/Home/QuickStart/QuickStart')
);
const TemplateGrid = lazy(
  () => import('./components/Home/TemplateGrid/TemplateGrid')
);

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TemplateGrid />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <FlagOptions />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <QuickStart />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
