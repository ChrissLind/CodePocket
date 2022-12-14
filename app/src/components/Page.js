import { fillThePocket, displayOutput } from '../backend/display';
import { displayFile } from '../backend/display';
import '../styles/Page.css';
import play_button from '../imgs/PLAY.png'

const Page = () => {
  return ( 
    <div className='parentPage'>
        <div className='pageContainer'>
          {/*<div className='UserIcon'></div>*/}
          <div className='playContainer'>
            <button className='fillPocket' onClick={fillThePocket}>Fill the Pocket</button>
            <button className='play' onClick={displayOutput}>
              <img src={play_button} alt="play button"/>
            </button>
          </div>
          <div className='dataContainer'>
            <div className='codeContainer'>
              <div id='fileBox' className='codeBox1'>
                <div className='repoContainer'>
                  <div id="repo" className='repo'>No repo</div>
              </div>
              <p contentEditable="true" id="fileDisplay"></p>
            </div>
            <div id='outputBox'className='codeBox2'>
              <select id="file" onChange={displayFile} className='outputSelect'>
                <option value="">Select your file</option>
              </select>
              <p id="outputDisplay"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Page;