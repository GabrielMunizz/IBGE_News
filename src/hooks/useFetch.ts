import { useCallback, useEffect, useReducer } from 'react'
import { Action } from '../types'

const useFetch = (url: string) => {
  const initialState = {
    error: undefined,
    isLoading: true,
    data: undefined,
  }

  const reducer = (state= initialState, action: Action) => {
    switch(action.type) {
      case 'loading':
        return {
          ...state,
           isLoading: true,
        }
      case 'error':
        return {
          ...state,
           isLoading: false,
           error: action.payload,
        }
      case 'fetched':
        return {
          ...state,
           isLoading: false,
           data: action.payload,
        }
      default: 
      return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleFetch = useCallback(async () => {
    dispatch({type: 'loading'})
    try {
      const response = fetch(url);
      const result = (await response).json()
      const info = result.then((data) => data)
      dispatch({type: 'fetched', payload: await info})
    } catch(err: any) {
      dispatch({type: 'error', payload: err})
    }
  },[url])

  useEffect(() => {
    handleFetch();
  }, [handleFetch])

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  }
}

export default useFetch;