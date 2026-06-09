export interface CertificationCourse {
  course_id: number;
  course_name: string;
}

export interface CertificationLearningPath {
  lp_id: number;
  lp_name: string;
  lp_description: string;
  lp_banner: string;
  courses: CertificationCourse[];
}

export interface Certification {
  certificate_id: number;
  certificate_name: string;
  certificate_description: string;
  learning_paths: CertificationLearningPath[];
}

export interface CertificationConfig {
  certificate_id: number;
  shortName: string;
  duration: string;
  price: string;
  priceValue: number;
  color: string;
  icon: string;
}

export interface CertificationCardViewModel {
  certification: Certification;
  config: CertificationConfig;
  totalCourses: number;
}

export interface CertificationSignupState {
  certificateId: number;
  certificateName: string;
  shortName: string;
  price: string;
  duration: string;
  totalCourses: number;
}
