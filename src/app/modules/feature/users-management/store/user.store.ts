import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { Users } from '../services/users';
import { inject } from '@angular/core'
import { User } from "../models/user.model"

interface UserState {
    users: User[];
    selectedUser: User | null;
    loading: boolean;
    error: string | null
}

export const initialState: UserState = {
    users: [],
    selectedUser: null,
    loading: false,
    error: null
}

export const UsersStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, usersService = inject(Users)) => ({
        async loadUsers() {
            patchState(store, {
                loading: true, 
                error: null
            });
            try{
                const users = await usersService.getUsers();
                patchState(store, {users, loading: false})
            }catch(error) {
                patchState(store, {
                    loading: false, 
                    error: 'Failed to load users. Try again later.'
                })
            }
        },
        asyncSelectUser(id: string) {
            patchState(store, {
                loading: true,
                error: null
            });
            try{

            }catch(error) {
                patchState(store, {
                    loading: false,
                    error: "Ubale to complete action. Check your connection and try again."
                })
            }
        },
        async addUser(user: User) {
            patchState(store, {
                loading: true,
                error: null
            });
            try{

            }catch(error) {
                patchState(store, {
                    loading: false,
                    error: "Ubale to complete action. Check your connection and try again."
                })
            }
        },
        async updateUser(id: string, user: User) {
            patchState(store, {
                loading: true,
                error: null
            });
            try{

            }catch(error) {
                patchState(store, {
                    loading: false,
                    error: "Ubale to complete action. Check your connection and try again."
                })
            }
        },
        async suspendUser(id: string) {
            patchState(store, {
                loading: true,
                error: null
            });
            try{

            }catch(error) {
                patchState(store, {
                    loading: false,
                    error: "Ubale to complete action. Check your connection and try again."
                })
            }
        }
    }))
)