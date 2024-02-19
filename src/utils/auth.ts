"use client"

import { ACCESS_TOKEN, REFRESH_TOKEN, USER_INFO } from '@/store/key-types'
import { usePathname, useRouter } from 'next/navigation'

const loginSuccess = (res) => {
    try {
        localStorage.setItem(ACCESS_TOKEN, res.tokens.accessToken)
        localStorage.setItem(REFRESH_TOKEN, res.tokens.refreshToken)
        localStorage.setItem(USER_INFO,  JSON.stringify(res.user))
        return true
    } catch {
        return false
    }
}

const signOutSuccess = () => {
    try {
        localStorage.removeItem(ACCESS_TOKEN)
        localStorage.removeItem(REFRESH_TOKEN)
        localStorage.removeItem(USER_INFO)
        return true
    } catch {
        return false
    }
}

const verifyToken = () => {
    const token = localStorage.getItem(ACCESS_TOKEN)
    return !!token
}

const isAuthenticated = () =>{
    try {
        return verifyToken()
    } catch {
        return false
    }
}

const handleRedirect = (router, pathname) => {
    if (!isAuthenticated()) {
        const url = pathname !== '/user/login' ? '/user/login' : pathname
        router.push(url)
    } else {
        const url = pathname && pathname !== '/' && pathname !== '/user/login' ? pathname : '/dashboard'
        router.push(url)
    }
}

export const auth = {
    loginSuccess,
    signOutSuccess,
    isAuthenticated,
    handleRedirect
}
