import React from 'react'

import { CustomButtonContainer } from './custom-button.styles'


const CustomButton = ({children, ...others}) => (

    <CustomButtonContainer {...others}>
        {children}
    </CustomButtonContainer>
)


export default CustomButton