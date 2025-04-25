import { useInView } from 'react-intersection-observer';
import { useEffect, useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const componentMap = {
  SplineComputer: lazy(() => import('../SplineComputer/SplineComputer.jsx')),
  SplineGlobe: lazy(() => import('../SplineGlobe/SplineGlobe.jsx')),
};

export default function LazySpline({ componentName }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [show, setShow] = useState(false);
  const [SplineComponent, setSplineComponent] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  const getHeight = () => {
    switch (componentName) {
      case 'SplineComputer':
        return 'h-[600px]';
      case 'SplineGlobe':
        return 'h-[450px]';
      case 'SplineBackground':
        return 'h-[500px]';
      default:
        return 'h-[500px]';
    }
  };

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShow(true);
        setSplineComponent(() => componentMap[componentName]);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [inView, componentName]);

  return (
    <div
      ref={ref}
      className={`w-full ${getHeight()} relative flex items-center justify-center`}
    >
      {show && SplineComponent ? (
        <Suspense
          fallback={
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-12 h-12 border-4 rounded-full border-secondary animate-spin border-t-transparent" />
            </motion.div>
          }
        >
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: hasLoaded ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setHasLoaded(true)}
          >
            {/* 👇 Ensures fade-in only after fully loaded */}
            <SplineComponent />
          </motion.div>
        </Suspense>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-500 rounded-full animate-spin border-t-transparent" />
        </div>
      )}
    </div>
  );
}
