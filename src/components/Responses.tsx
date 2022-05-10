import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card'
import { RootState } from '../redux/store'

const Responses: React.FC = () => {
  // getting state of "allPrompts" from redux 
  const { allPrompts } = useSelector((state: RootState) => state.allPromptser);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-4">
        <div className="col-8">
          <h2 className="display-6 fw-bold">Responses</h2>
        </div>
        <div className="col-8 mt-2">
          <p className="fs-6">NOTE: I reply <span className="fw-bold">"Unknown"</span> to the questions I don't know</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          {/* Mapping over all user prompts and showing data in Card component*/}
          {
            allPrompts ?
              allPrompts.map((res: any, key: number) => {
                return <Card key={key} prompt={res.prompt} response={res.response} />
              }) :
              <h2>Waiting</h2>
          }
        </div>
      </div>
    </div>
  )
}

export default Responses