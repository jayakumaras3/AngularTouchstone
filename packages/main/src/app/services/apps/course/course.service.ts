import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { course } from 'src/app/pages/apps/courses/course';
import { courseList } from 'src/app/pages/apps/courses/courseData';
import * as appConfig from '../../../config';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public course = signal<course[]>(courseList);

  constructor(private readonly http: HttpClient) {}

  public getCourse(): course[] {
    return this.course();
  }

  public readMore(courseId: number): Observable<any> {
    const body = {
      crid: courseId,
      detail_type: null,
      mp_id: 0,
    };

    const url =
      (appConfig as any).courseUrl ||
      'http://172.16.0.173/dochek_ultra/my_training/read_more';

    console.log('Calling read_more API', { url, body });
    return this.http.post<any>(url, body);
  }
}
