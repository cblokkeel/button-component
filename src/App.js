import React, { Fragment } from 'react'
import Button from './components/Button'
import './styles/App.css'

function App() {
  return (
    <Fragment>
      <h1 className='title'>Buttons</h1>

      <div className="default-button button-container">
        <div className="first-button">
          <p className='desc-default-button desc'>{`<Button />`}</p>
          <Button />
        </div>
      </div>

      <div className="outline-button button-container">
        <div className="first-button">
          <p className='desc-outline-button desc'>{`<Button variant='outline' />`}</p>
          <Button variant='outline'/>
        </div>
      </div>

      <div className="text-button button-container">
        <div className="first-button">
          <p className='desc-text-button desc'>{`<Button variant='text' />`}</p>
          <Button variant='text'/>
        </div>
      </div>

      <div className="disable-shadow-button button-container">
        <div className="first-button">
          <p className='desc-disable-shadow-button desc'>{`<Button disableShadow />`}</p>
          <Button disableShadow/>
        </div>
      </div>

      <div className="disabled-button button-container">
        <div className='first-button'>
          <p className='desc-disabled-button desc'>{`<Button disabled/>`}</p>
          <Button disabled/>
        </div>
        <div className="second-button">
          <p className='desc-disabled-button desc'>{`<Button variant='text' disabled/>`}</p>
          <Button variant='text' disabled/>
        </div>
      </div>

      <div className="icon-button button-container">
        <div className='first-button'>
          <p className='desc-icon-button desc'>{`<Button startIcon='local_grocery_store'/>`}</p>
          <Button startIcon='local_grocery_store'/>
        </div>
        <div className="second-button">
          <p className='desc-icon-button desc'>{`<Button endIcon='face'/>`}</p>
          <Button endIcon='face'/>
        </div>
      </div>

      <div className="size-button button-container">
        <div className='first-button'>
          <p className='desc-size-button desc'>{`<Button size='sm'/>`}</p>
          <Button size='sm'/>
        </div>
        <div className="second-button">
          <p className='desc-size-button desc'>{`<Button size='md'/>`}</p>
          <Button size='md'/>
        </div>
        <div className="third-button">
          <p className='desc-size-button desc'>{`<Button size='lg'/>`}</p>
          <Button size='lg'/>
        </div>
      </div>

      <div className="color-button button-container">
        <div className='first-button'>
          <p className='desc-color-button desc'>{`<Button color='default'/>`}</p>
          <Button color='default'/>
        </div>
        <div className="second-button">
          <p className='desc-color-button desc'>{`<Button color='primary'/>`}</p>
          <Button color='primary'/>
        </div>
        <div className="third-button">
          <p className='desc-color-button desc'>{`<Button color='secondary'/>`}</p>
          <Button color='secondary'/>
        </div>
        <div className="fourth-button">
          <p className='desc-color-button desc'>{`<Button color='danger'/>`}</p>
          <Button color='danger'/>
        </div>
      </div>

      <footer className='footer'>
        <a href="https://github.com/cblokkeel">
          github
        </a>
        <a href="https://www.linkedin.com/in/colin-blokkeel-5795531b9/">
          linkedin
        </a>
      </footer>
    </Fragment>
  )
}

export default App;
