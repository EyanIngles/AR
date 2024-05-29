import React from 'react'
import { ethers } from 'ethers'
import { setProvider, setNetwork, setAccount } from '../reducers/provider'

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
export const loadAccount = async (dispatch) => {
    //connecting to meta mask with a try and catch to catch an error if metamask if not installed
if(typeof window.ethereum !== 'undefined') {
    try{
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        dispatch(setAccount(account));

        return account;
    } catch(err) {
        window.alert('Metamask unable to be located. Please install metamask and try again.')
        const deadAccount = ''
        dispatch(setAccount(deadAccount));
    }
}}
