import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [currenaPageName, setCurrentPageName] = useState('');
  const pathname = usePathname();

  const pagesNames = [
    { name: 'Главная', route: '/' },
    { name: 'О школе', route: '/about-school' },
    { name: 'О тренере', route: '/about' },
    { name: 'Первая тренировка', route: '/first-lesson' },
  ];

  return (
    <section className={styles.container}>
      {pagesNames.map(({ name, route }, index) => (
        <Link
          href={`${route}`}
          key={index}
          className={cn(styles.link, {
            [styles.active]: pathname === route,
          })}
        >
          {name}
        </Link>
      ))}
    </section>
  );
}
