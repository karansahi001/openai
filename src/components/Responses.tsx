import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card'
import { RootState } from '../redux/store'
import { promptsClear } from '../redux/allPrompts';

const Responses: React.FC = () => {
  // getting state of "allPrompts" from redux 
  const { allPrompts } = useSelector((state: RootState) => state.allPromptser);
  const { mode } = useSelector((state: RootState) => state.moder);
  const dispatch = useDispatch();
  const handleHistory = (e: React.MouseEvent): void => {
      dispatch(promptsClear());
  }

  return (
    <div className={`container-fluid pt-5 ${mode == 'dark' ? 'bg-dark text-light' : ''}`}>
      <div className="row justify-content-center mb-4">
        <div className="col-8">
          <h2 className="display-5">Responses</h2>
        </div>
        <div className="col-8 mt-2">
          <p className="lead fs-6">NOTE: I reply <span className="fw-bold">"Unknown"</span> to the questions I don't know</p>
        </div>
          
        {allPrompts.length > 0 ?
          <div className="col-8 text-end">
          <button onClick={handleHistory} className="btn shadow-none btn-danger btn-sm">clear history</button>
        </div>:
        null}
      </div>
      <div className="row justify-content-center pb-3">
        <div className="col-8">
          {/* Mapping over all user prompts and showing data in Card component*/}
          {
            allPrompts.length > 0 ?
              allPrompts.map((res: any, key: number) => {
                return <Card key={key} prompt={res.prompt} response={res.response} />
              }) :
             
                <h2 className="text-center">
                  <span className={`badge ${mode == 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
                    No questions asked yet
                  </span>
                </h2>
          }
        </div>
      </div>
    </div>
  )
}

export default Responses
