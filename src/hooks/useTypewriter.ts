import { useState, useEffect, useRef } from 'react';

export function useTypewriter(words: string[], typingSpeed = 85, deletingSpeed = 46, pause = 2400) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const tick = () => {
      const current = words[indexRef.current];
      if (!isDeleting) {
        setText(prev => {
          const next = current.substring(0, prev.length + 1);
          if (next === current) setTimeout(() => setIsDeleting(true), pause);
          return next;
        });
      } else {
        setText(prev => {
          const next = current.substring(0, prev.length - 1);
          if (next === '') {
            setIsDeleting(false);
            indexRef.current = (indexRef.current + 1) % words.length;
          }
          return next;
        });
      }
    };
    const timer = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, words, typingSpeed, deletingSpeed, pause]);

  return text;
}
