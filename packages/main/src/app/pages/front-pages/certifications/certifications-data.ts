import { CertificationConfig } from './certifications.model';

export const CERTIFICATION_CONFIGS: CertificationConfig[] = [
  {
    certificate_id: 1,
    shortName: 'CCD-Tech',
    duration: '7 Hours 10 Minutes',
    price: '₹799',
    priceValue: 799,
    color: '#3b82f6',
    icon: 'cloud',
  },
  {
    certificate_id: 2,
    shortName: 'HC-LC',
    duration: '9 Hours',
    price: '₹899',
    priceValue: 899,
    color: '#8b5cf6',
    icon: 'users',
  },
  {
    certificate_id: 3,
    shortName: 'SDBPS',
    duration: '8 Hours 37 Minutes',
    price: '₹799',
    priceValue: 799,
    color: '#10b981',
    icon: 'brain',
  },
  {
    certificate_id: 4,
    shortName: 'WRWEI',
    duration: '5 Hours 29 Minutes',
    price: '₹599',
    priceValue: 599,
    color: '#f59e0b',
    icon: 'heart',
  },
  {
    certificate_id: 5,
    shortName: 'CSMBL',
    duration: '10 Hours',
    price: '₹899',
    priceValue: 899,
    color: '#ec4899',
    icon: 'chart-bar',
  },
  {
    certificate_id: 6,
    shortName: 'CTLTE',
    duration: '5 Hours 28 Minutes',
    price: '₹599',
    priceValue: 599,
    color: '#06b6d4',
    icon: 'award',
  },
  {
    certificate_id: 7,
    shortName: 'CSFBA',
    duration: '4.2 Hours',
    price: '₹499',
    priceValue: 499,
    color: '#ef4444',
    icon: 'coins',
  },
];

export function getConfigById(id: number): CertificationConfig | undefined {
  return CERTIFICATION_CONFIGS.find((c) => c.certificate_id === id);
}

export function getTotalCourses(learningPaths: { courses: unknown[] }[]): number {
  return learningPaths.reduce((total, lp) => total + lp.courses.length, 0);
}
