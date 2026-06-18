export interface CertificationCourse {
  course_id: string;
  course_name: string;
}

export interface CertificationLearningPath {
  lp_id: string;
  lp_name: string;
  lp_description: string;
  lp_banner: string;
  courses: CertificationCourse[];
}

export interface Certification {
  certificate_id: string;
  certificate_name: string;
  certificate_description: string;
  price: string;
  duration: string;
  total_courses: string;
  total_learning_paths: string;
  learning_paths: CertificationLearningPath[];
}

export interface CertificationConfig {
  certificate_id: string;
  shortName: string;
  color: string;
  icon: string;
}

export interface CertificationCardViewModel {
  certification: Certification;
  config: CertificationConfig;
  totalCourses: number;
}

export interface CertificationSignupState {
  certificateId: string;
  certificateName: string;
  shortName: string;
  price: string;
  duration: string;
  totalCourses: number;
}
