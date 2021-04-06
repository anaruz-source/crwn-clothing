import React, { Component } from 'react'



import { ErrorImageContainer,
         ErrorImageOverlay, 
         ErrorImageText }
        from './error-boundary.styles'

class ErrorBoundary extends Component {

    constructor(){

        super()

        this.state = { hasErrored : false}
    }

    static getDerivedStateFromError( error) {

        return { hasErrored : true}
    }

    componentDidCatch(error, info){

        console.log({error, info})
    }

    render(){

    const { hasErrored } = this.state
    const { children }  = this.props

    if(hasErrored) {
        
        return (
        
            <ErrorImageOverlay>

                <ErrorImageContainer imageUrl= 'https://i.imgur.com/yW2W9SC.png'>
              
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
              
                </ErrorImageContainer>

            </ErrorImageOverlay>
            
        )
    }
    
  
    return children

}

}


export default ErrorBoundary