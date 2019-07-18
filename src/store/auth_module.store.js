import { authService } from '@/services/Auth'

export const AuthModule = {
    state: {
        user: null,
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

}