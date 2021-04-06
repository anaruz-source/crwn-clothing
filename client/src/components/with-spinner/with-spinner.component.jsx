import React from 'react'

import Spinner from '../spinner/spinner.component'

const WithSpinner = WrappedComponent => {
  
  
  return ({ isLoading, ...others }) => (isLoading ? ( <Spinner /> ) : ( <WrappedComponent { ...others } /> ))

}


export default WithSpinner