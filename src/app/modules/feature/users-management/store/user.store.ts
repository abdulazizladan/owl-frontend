import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { UsersService } from '../services/users';
import { inject } from '@angular/core'
import { UserModel } from "../models/user.model"
import { computed } from '@angular/core';

interface UserState {
    users: UserModel[];
    selectedUser: UserModel | null;
    loading: boolean;
    error: string | null;
}

export const initialState: UserState = {
    users: [
        {
            id: '1',
            firstName: 'Alice',
            middleName: 'Marie',
            lastName: 'Johnson',
            role: 'Admin',
            status: 'Active',
            email: 'alice@example.com',
            phone: '123-456-7890',
            address: '123 Main St, Anytown, USA',
            createdAt: new Date(),
        },
        {
            id: '2',
            firstName: 'Bob',
            middleName: 'Edward',
            lastName: 'Smith',
            role: 'Staff',
            status: 'Suspended',
            email: 'bob@example.com',
            phone: '234-567-8901',
            address: '456 Oak Ave, Othertown, USA',
            createdAt: new Date(),
        },
        {
            id: '3',
            firstName: 'Carol',
            middleName: 'Ann',
            lastName: 'Lee',
            role: 'Guardian',
            status: 'Active',
            email: 'carol@example.com',
            phone: '345-678-9012',
            address: '789 Pine Rd, Sometown, USA',
            createdAt: new Date(),
        }
    ],
    selectedUser: null,
    loading: false,
    error: null
}

export const UsersStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, usersService = inject(UsersService)) => ({
        async loadUsers() {
            patchState(store, { 
                loading: true, 
                error: null 
            });
            try {
                const users = await usersService.getUsers();
                patchState(store, { 
                    users, 
                    loading: false,
                    error: null
                });
            } catch (error) {
                patchState(store, {
                    loading: false,
                    error: 'Failed to load users. Try again later.'
                });
            }
        },
        async selectUser(id: string) {
            patchState(store, { loading: true, error: null });
            try {
                const user = await usersService.getUser(id);
                patchState(store, { selectedUser: user, loading: false });
            } catch (error) {
                patchState(store, {
                    loading: false,
                    error: "Unable to complete action. Check your connection and try again."
                });
            }
        },
        async addUser(user: UserModel) {
            patchState(store, { loading: true, error: null });
            try {
                const newUser = await usersService.addUser(user);
                patchState(store, state => ({
                    users: [newUser, ...state.users],
                    loading: false
                }));
            } catch (error) {
                patchState(store, {
                    loading: false,
                    error: "Unable to complete action. Check your connection and try again."
                });
            }
        },
        async updateUser(id: string, user: UserModel) {
            patchState(store, { loading: true, error: null });
            try {
                const updatedUser = await usersService.updateUser(id, user);
                patchState(store, {
                    /**users: state.users.map(
                        u => u.id === id ? updatedUser : u
                    ),
                    loading: false**/
                });
            } catch (error) {
                patchState(store, {
                    loading: false,
                    error: "Unable to complete action. Check your connection and try again."
                });
                
            }
        },
        })
        /**const users = computed(() => store.users);
        const loading = computed(() => store.loading);
        return {
            users,
            loading,
            async loadUsers() {
                patchState(store, { 
                    loading: true, 
                    error: null 
                });
                try {
                    const users = await usersService.getUsers();
                    patchState(store, { 
                        users, 
                        loading: false,
                        error: null
                    });
                } catch (error) {
                    patchState(store, {
                        loading: false,
                        error: 'Failed to load users. Try again later.'
                    });
                }
            },
            async selectUser(id: string) {
                patchState(store, { loading: true, error: null });
                try {
                    const user = await usersService.getUser(id);
                    patchState(store, { selectedUser: user, loading: false });
                } catch (error) {
                    patchState(store, {
                        loading: false,
                        error: "Unable to complete action. Check your connection and try again."
                    });
                }
            },
            async addUser(user: UserModel) {
                patchState(store, { loading: true, error: null });
                try {
                    const newUser = await usersService.addUser(user);
                    patchState(store, state => ({
                        users: [newUser, ...state.users],
                        loading: false
                    }));
                } catch (error) {
                    patchState(store, {
                        loading: false,
                        error: "Unable to complete action. Check your connection and try again."
                    });
                }
            },
            async updateUser(id: string, user: UserModel) {
                patchState(store, { loading: true, error: null });
                try {
                    const updatedUser = await usersService.updateUser(id, user);
                    patchState(store, {
                        users: state.users.map(
                            u => u.id === id ? updatedUser : u
                        ),
                        loading: false
                    });
                } catch (error) {
                    patchState(store, {
                        loading: false,
                        error: "Unable to complete action. Check your connection and try again."
                    });
                }
            },
            /**async suspendUser(id: string) {
                patchState(store, { loading: true, error: null });
                try {
                    const updatedUser = await usersService.suspendUser(id);
                    patchState(store, state => ({
                        users: state.users.map(u => u.id === id ? updatedUser : u),
                        loading: false
                    }));
                } catch (error) {
                    patchState(store, {
                        loading: false,
                        error: "Unable to complete action. Check your connection and try again."
                    });
                }
            }, **/
            /**async toggleUserStatus(id: string) {
                patchState(store, { loading: true, error: null });
                try {
                    const updatedUser = await usersService.toggleUserStatus(id);
                    patchState(store, {
                        users: state.users.map(u => u.id === id ? updatedUser : u),
                        loading: false
                    });
                } catch (error) {
                    patchState(store, {
                        loading: false,
                        error: "Unable to complete action. Check your connection and try again."
                    });
                }
            }
        };
    })**/
))