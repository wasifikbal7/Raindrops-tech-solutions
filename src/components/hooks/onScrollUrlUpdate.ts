import { useEffect } from 'react';

const useIntersectionObserver = (setSelectedPage: any) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setSelectedPage(id);
            history.replaceState(null, '', `#${id}`);
          }
        });
      },
      { threshold: 0.1 } // Adjust this value as needed
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [setSelectedPage]);
};

export default useIntersectionObserver;
