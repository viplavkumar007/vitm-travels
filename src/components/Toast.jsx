import { createContext, useCallback, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Close } from './Icons';

const ToastContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>');
  return ctx;
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const push = useCallback(
    (type, message, duration = 4500) => {
      const id = Date.now() + Math.random();
      setToasts((t) => [...t, { id, type, message }]);
      window.setTimeout(() => dismiss(id), duration);
    },
    [dismiss]
  );

  const toast = {
    success: (msg, d) => push('success', msg, d),
    error: (msg, d) => push('error', msg, d),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}

      {/* ARIA live region for screen readers */}
      <div
        className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex flex-col items-center gap-3 px-4 sm:items-end sm:px-6"
        role="region"
        aria-label="Notifications"
      >
        <div aria-live="polite" aria-atomic="true" className="contents">
          <AnimatePresence>
            {toasts.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border p-4 shadow-card-hover backdrop-blur-xl ${
                  t.type === 'success'
                    ? 'border-emerald-200 bg-emerald-50/95 text-emerald-900'
                    : 'border-red-200 bg-red-50/95 text-red-900'
                }`}
              >
                {t.type === 'success' ? (
                  <CheckCircle className="h-6 w-6 shrink-0 text-emerald-600" />
                ) : (
                  <AlertCircle className="h-6 w-6 shrink-0 text-red-600" />
                )}
                <p className="flex-1 pt-0.5 text-sm font-medium leading-snug">{t.message}</p>
                <button
                  onClick={() => dismiss(t.id)}
                  className="shrink-0 rounded-full p-1 text-current/60 transition hover:bg-black/5"
                  aria-label="Dismiss notification"
                >
                  <Close className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </ToastContext.Provider>
  );
}
