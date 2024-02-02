import { executeApp } from "@/services";

const userLogin = (params) => {
   return executeApp('auth/login', params, 'post')
}

export { userLogin }