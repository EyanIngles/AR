import React from 'react'
import { ethers } from 'ethers'
import { setProvider } from '../store'


export const loadProvider = (dispatch) => {
    try{
        const provider = new ethers.BrowserProvider(window.ethereum)
        dispatch(setProvider(provider))
        return provider;
        } catch(err) {
            window.alert('provider unable to be located')
}}
