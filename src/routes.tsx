import type { ReactNode } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Equipment from './pages/Equipment';
import HSE from './pages/HSE';
import Clients from './pages/Clients';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
    visible: true
  },
  {
    name: 'About',
    path: '/about',
    element: <About />,
    visible: true
  },
  {
    name: 'Services',
    path: '/services',
    element: <Services />,
    visible: true
  },
  {
    name: 'Projects',
    path: '/projects',
    element: <Projects />,
    visible: true
  },
  {
    name: 'Certifications',
    path: '/certifications',
    element: <Certifications />,
    visible: true
  },
  {
    name: 'Equipment',
    path: '/equipment',
    element: <Equipment />,
    visible: true
  },
  {
    name: 'HSE',
    path: '/hse',
    element: <HSE />,
    visible: true
  },
  {
    name: 'Clients',
    path: '/clients',
    element: <Clients />,
    visible: true
  },
  
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />,
    visible: true
  },
  {
    name: 'Privacy Policy',
    path: '/privacy',
    element: <Privacy />,
    visible: false
  },
  {
    name: 'Terms & Conditions',
    path: '/terms',
    element: <Terms />,
    visible: false
  }
];

export default routes;
