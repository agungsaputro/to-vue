import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import router from "../router/index";

import Api from "../services/api";

Vue.use(Vuex);

const Auth = {
  namespaced: true,
  state: () => ({
    token: "",
    user: {
      id: "",
      fullName: "",
      phone: "",
      role: "",
      username: "",
    },
    isError: false,
    errorMessage: "",
  }),
  mutations: {
    saveLogin(state, payload) {
      state.token = payload.token;
      state.user = {
        id: payload.id,
        fullName: payload.full_name,
        phone: payload.phone_number,
        role: payload.role,
        username: payload.username,
      };
    },
  },
  actions: {
    async reqLogin({ commit }, payload) {
      // console.log({ reqLogin: true });
      Api.post("/auth/login", {
        data: payload,
      })
        .then((res) => {

          const {
            data: { data },
          } = res;
          commit("saveLogin", data);
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: data.id,
              fullName: data.full_name,
              phone: data.phone_number,
              role: data.role,
              username: data.username,
            })
          );
          router.push("/dashboard");
        })
        .catch((error) => {
          console.log({ error });
        });
      console.log({ commit });
    },
    async reqRegister({commit}, payload){
      commit("setBoolean", { key: "postLoading", value: true });
      Api.post("/auth/signup",JSON.stringify({
        data: payload,
      })).then((res) => {
        console.log({ res });
      }).catch((errr) => {
        console.log({ errr: errr.message });
      });
      commit("setBoolean", { key: "postLoading", value: false });
    }
  },
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
  },
  plugins: [createPersistedState()],
});
