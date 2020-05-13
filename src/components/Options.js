import React from 'react';
import Button from './Button';
import './Options.css';

const Options = ({ onPlayMusic, effectsOn, musicOn, audioOn, triggerEffects,onMusicVolume, musicVolume, onEffectsVolume, effectsVolume }) => {
  // const handleGlobalVolume = (event) => {
  //   console.log(event.target)
  // }
  return (
    <div className='options-container'>
      <nav className='options-navbar'>
        <Button link='/' linkName='&lt; Home' />
        <h2>Options</h2>
      </nav>
      <main>
        <div className='option-type-container'>
          <h3 className='option-title'>Global volume</h3>
          <input type='range' min='1' max='100'  className='option-slider' id='myRange' />
          <button className='button-config'>
            {musicOn ? 'ON' : 'OFF'}
          </button>
        </div>
        <div className='option-type-container'>
          <h3 className='option-title'>Music volume</h3>
          <input type='range' min='1' max='100' onChange={(event) => onMusicVolume(event)} value={musicVolume} className='option-slider' id='myRange' />
          <button className='button-config'  onClick={() => onPlayMusic()}>
          <span className='music-icon'>{musicOn ? <i className='fa fa-volume-mute' /> : <i className='fa fa-volume-up' />}</span>
          </button>
        </div>
        <div className='option-type-container'>
          <h3 className='option-title'>Effects volume</h3>
          <input type='range' min='1' max='100' onChange={(event) => onEffectsVolume(event)} value={effectsVolume} className='option-slider' id='myRange' />
          <button className='button-config' onClick={() => triggerEffects()}>
            {effectsOn ? 'ON' : 'OFF'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Options;
