import { useEffect, useState } from 'react';

function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        height: '80px',
        transition: 'opacity 0.3s ease',
        opacity: visible ? 1 : 0,
        textAlign: 'center',
        backgroundColor: '#1e1e1e',
        fontSize: '2rem',
        lineHeight: '80px',
        color: 'white',
        position: 'relative',
        zIndex: 999,
      }}
    >
      Tidy
    </header>
  );
}

export default Header;
