import { CertificationConfig } from './certifications.model';

export const CERTIFICATION_CONFIGS: CertificationConfig[] = [
  {
    certificate_id: '1',
    shortName: 'CCD-Tech',
    color: '#3b82f6',
    icon: 'cloud',
  },
  {
    certificate_id: '2',
    shortName: 'HC-LC',
    color: '#8b5cf6',
    icon: 'users',
  },
  {
    certificate_id: '3',
    shortName: 'SDBPS',
    color: '#10b981',
    icon: 'brain',
  },
  {
    certificate_id: '4',
    shortName: 'WRWEI',
    color: '#f59e0b',
    icon: 'heart',
  },
  {
    certificate_id: '5',
    shortName: 'CSMBL',
    color: '#ec4899',
    icon: 'chart-bar',
  },
  {
    certificate_id: '6',
    shortName: 'CTLTE',
    color: '#06b6d4',
    icon: 'award',
  },
  {
    certificate_id: '7',
    shortName: 'CSFBA',
    color: '#ef4444',
    icon: 'coins',
  },
];

export function getConfigById(id: string): CertificationConfig | undefined {
  return CERTIFICATION_CONFIGS.find((c) => c.certificate_id === id);
}

export function getTotalCourses(learningPaths: { courses: unknown[] }[]): number {
  return learningPaths.reduce((total, lp) => total + lp.courses.length, 0);
}
