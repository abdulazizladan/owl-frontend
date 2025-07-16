import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { AnnouncementModel } from "../models/announcement.model";
import { inject } from "@angular/core";
import { AnnouncementService } from "../services/announcement-service";

interface AnnouncementState{
    announcements: AnnouncementModel[];
    loading: boolean;
    error: string | null;
}

const initialState: AnnouncementState = {
    announcements: [],
    loading: false,
    error: null
}

export const AnnouncementsStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store, announcementsService = inject(AnnouncementService)) => ({
        async loadAnnouncements() {
            patchState(store, {
                loading: true,
                error: null
            });
            announcementsService.getAll().subscribe({
                next: (announcements) => {
                    patchState(store, {
                        announcements,
                        loading: false,
                        error: null
                    });
                },
                error: (err) => {
                patchState(store, {
                        loading: false,
                        error: err.message || 'Failed to load announcements'
                    });
            }
            });
        },
        async loadSingleAnnouncement(id: string) {
            patchState(store, {
                loading: true,
                error: null
            });
            announcementsService.getById(id).subscribe({
                next: (announcement) => {
                    if (announcement) {
                        patchState(store, {
                            announcements: [announcement],
                            loading: false,
                            error: null
                        });
                    } else {
                        patchState(store, {
                            loading: false,
                            error: 'Announcement not found'
                        });
                    }
                },
                error: (err) => {
                    patchState(store, {
                        loading: false,
                        error: err.message || 'Failed to load announcement'
                    });
                }
            });
        },
        async createAnnouncement(announcement: Omit<AnnouncementModel, 'id' | 'dateCreated' | 'datePublished'>) {
            patchState(store, {
                loading: true,
                error: null
            });
            announcementsService.create(announcement).subscribe({
                next: (created) => {
                    patchState(store, {
                        announcements: [created, ...store.announcements()],
                        loading: false,
                        error: null
                    });
                },
                error: (err) => {
                patchState(store, {
                        loading: false,
                        error: err.message || 'Failed to create announcement'
                    });
            }
            });
        },
        async updateAnnouncement(id: string, changes: Partial<AnnouncementModel>) {
            patchState(store, {
                loading: true,
                error: null
            });
            announcementsService.update(id, changes).subscribe({
                next: (updated) => {
                    patchState(store, {
                        announcements: store.announcements().map(a => a.id === id ? updated : a),
                        loading: false,
                        error: null
                    });
                },
                error: (err) => {
                patchState(store, {
                        loading: false,
                        error: err.message || 'Failed to update announcement'
                    });
            }
            });
        },
        async discardAnnouncement(id: string, remark: string) {
            patchState(store, {
                loading: true,
                error: null
            });
            announcementsService.discard(id, remark).subscribe({
                next: (discarded) => {
                    patchState(store, {
                        announcements: store.announcements().map(a => a.id === id ? discarded : a),
                        loading: false,
                        error: null
                    });
                },
                error: (err) => {
                patchState(store, {
                        loading: false,
                        error: err.message || 'Failed to discard announcement'
                    });
            }
            });
        }
    }))
)