import React from 'react'
import Page from './Page'


const LoadingPage = props => {

  return <Page>

    <h1> {props.title} </h1>

    <div className='spinner' >
      <div className='rect1' />
      <div className='rect2' />
      <div className='rect3' />
      <div className='rect4' />
      <div className='rect5' />
    </div>

  </Page>

}

export default LoadingPage