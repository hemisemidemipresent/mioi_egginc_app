
const defaultCoopSearch = {
    searchString: "",
    searchFailed: false,
    failedSearches: [],
    disabled: false,
}


const defaultActiveContractsRoot = {
    fetching: false,
    fetched: false,
    error: null,
    contracts: {},
}

const initialState = {
    activeContracts: defaultActiveContractsRoot,
    coopSearch: {},
    viewContract: null,
    coops: {},
    playerCoops: {},
}



export default function reducer(state=initialState, action) {
    switch(action.type) {
        case "GET_ACTIVE_CONTRACTS_PENDING": {
            return {...state, activeContracts: {
                ...state.activeContracts,
                fetching: true,
            }}
        }
        case "GET_ACTIVE_CONTRACTS_FULFILLED": {
            const contractIds = action.payload.data.activeContracts.map(contract => contract.name)
            // const contracts = action.payload.data.activeContracts.reduce((obj, contract) => {
            //     obj[contract.name] = contract
            //     return obj
            // }, {})
            let contracts = Object.fromEntries(action.payload.data.activeContracts.map(contract => [contract.name, contract]))
            let coopSearches = {}
            let coops = {}
            for (let contractId of contractIds) {
                Object.assign(coopSearches, {[contractId]: defaultCoopSearch})
                Object.assign(coops, {[contractId]: null})
            }
            return {...state, 
                activeContracts: {
                    ...state.activeContracts,
                    fetching: false,
                    fetched: true,
                    contracts: contracts,
                },
                coopSearch: {
                    ...coopSearches,
                    ...state.coopSearch,
                },
                coops: {
                    ...state.coops,
                    coops,
                },
            }
        }
        case "GET_ACTIVE_CONTRACTS_REJECTED": {
            return {...state, activeContracts: {
                    ...state.activeContracts,
                    error: action.payload,
            }}
        }
        case "SHOW_CONTRACT": {
            return {...state,
                viewContract: true
            }
        }
        case "HIDE_CONTRACT": {
            return {...state,
                viewContract: false
            }
        }
        case "UPDATE_CONTRACT_COOP_SEARCH_STRING": {
            let newCoopSearch = state.coopSearch
            newCoopSearch[action.payload.contractId] = {
                ...state.coopSearch[action.payload.contractId],
                searchString: action.payload.searchString,
            }
            return {...state,
                coopSearch: newCoopSearch
            }
        }
        case "GET_COOP_PENDING": {
            return {...state,
                coops: {
                    ...state.coops,
                    [action.meta.contractId]: {
                        ...state.coops[action.meta.contractId],
                        fetching: true,
                        error: null,
                    }
                }
            }
        }
        case "GET_COOP_FULFILLED": {
            if (!action.payload.data.errors) {
                if (action.meta.player) {
                    return {...state,
                        playerCoops: {
                            ...state.playerCoops,
                            [action.meta.contractId]: {
                                ...action.payload.data.data.eggInc.coop,
                                fetching: false,
                                fetched: true,
                            }
                        }
                    }
                }
                return {...state,
                    coops: {
                        ...state.coops,
                        [action.meta.contractId]: {
                            ...action.payload.data.data.eggInc.coop,
                            fetching: false,
                            fetched: true,
                        }
                    }
                }
            }
            // continues to REJECTED if above block check doesn't pass
        }
        case "GET_COOP_REJECTED": {
            return {...state,
                coops: {
                    ...state.coops,
                    [action.meta.contractId]: {
                        ...state.coops[action.meta.contractId],
                        fetching: false,
                        error: action.payload,
                    }
                }
                
            }
        }
        default: {
            return state
        }
    }
}