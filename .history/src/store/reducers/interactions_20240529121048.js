import React from 'react'
import { ethers } from 'ethers'
import { setProvider } from '../reducers/provider'

// load provider
export const loadProvider = (dispatch) => {
    try{
        const provider = new ethers.BrowserProvider(window.ethereum)
        dispatch(setProvider(provider))
        return provider;
        } catch(err) {
            window.alert('provider unable to be located')
}}
// load account
export const loadNetwork = async (provider, dispatch) => {
    const chainId = await provider.getNetwork()
    dispatch(setNetwork(chainId))
    return chainId;
}
// load account
export const loadAccount = (dispatch) => {
    
}
