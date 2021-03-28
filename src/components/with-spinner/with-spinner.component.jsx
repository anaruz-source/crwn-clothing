import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'


const WithSpinner = WrappedComponent => {
  
  
  const Spinner = ({ isLoading, ...others }) => {
  
  console.log('isLoading', isLoading)

  return (

    isLoading ? ( <SpinnerOverlay>
                    <SpinnerContainer />
                  </SpinnerOverlay>) 
                
                : 
                 
                ( <WrappedComponent { ...others } /> )
)}

return Spinner
}

export default WithSpinner