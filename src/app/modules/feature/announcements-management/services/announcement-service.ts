import { Injectable } from '@angular/core';
import { AnnouncementModel } from '../models/announcement.model';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private announcements: AnnouncementModel[] = [
    {
      id: uuidv4(),
      subject: 'Welcome Back!',
      body: 'School resumes on Monday. Please be punctual.',
      attachments: [],
      dateCreated: new Date(),
      dateToPublish: new Date(),
      datePublished: new Date(),
      status: 'published',
      remark: ''
    },
    {
      id: uuidv4(),
      subject: 'PTA Meeting',
      body: 'There will be a PTA meeting next Friday at 10am.',
      attachments: [],
      dateCreated: new Date(),
      dateToPublish: null,
      datePublished: new Date(),
      status: 'pending',
      remark: ''
    }
  ];

  getAll(): Observable<AnnouncementModel[]> {
    return of([...this.announcements]).pipe(delay(400));
  }

  getById(id: string): Observable<AnnouncementModel | undefined> {
    const found = this.announcements.find(a => a.id === id);
    return of(found).pipe(delay(300));
  }

  create(announcement: Omit<AnnouncementModel, 'id' | 'dateCreated' | 'datePublished'>): Observable<AnnouncementModel> {
    const newAnnouncement: AnnouncementModel = {
      ...announcement,
      id: uuidv4(),
      dateCreated: new Date(),
      datePublished: announcement.status === 'published' ? new Date() : null
    };
    this.announcements.unshift(newAnnouncement);
    return of(newAnnouncement).pipe(delay(300));
  }

  update(id: string, changes: Partial<AnnouncementModel>): Observable<AnnouncementModel> {
    const idx = this.announcements.findIndex(a => a.id === id);
    if (idx === -1) return throwError(() => new Error('Announcement not found'));
    this.announcements[idx] = { ...this.announcements[idx], ...changes };
    return of(this.announcements[idx]).pipe(delay(300));
  }

  discard(id: string, remark: string): Observable<AnnouncementModel> {
    const idx = this.announcements.findIndex(a => a.id === id);
    if (idx === -1) return throwError(() => new Error('Announcement not found'));
    this.announcements[idx] = {
      ...this.announcements[idx],
      status: 'discarded',
      remark
    };
    return of(this.announcements[idx]).pipe(delay(300));
  }
}
