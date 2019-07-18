import { authService } from '@/services/Auth'

const user = JSON.parse(localStorage.getItem('user')) || null;

export const AuthModule = {
    state: {
        user,
        error: null
    },
    mutations: {
        setUser(state,payload) {
            state.user = payload;
        }
    },
    actions: {
        login(context, {email, password}) {
            return authService.login(email, password)
            .then((user) => {
                context.commit('setUser', user);
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },

    getters: {
        getUser(state) {
            return state.user
        }
    }

}