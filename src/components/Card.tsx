import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface Props{
    prompt: string,
    response: string
}

const Card: React.FC<Props> = ({prompt, response}) => {
  const { mode } = useSelector((state: RootState) => state.moder);
  return (
    <div className={`card border border-5 rounded mb-3 py-4 px-3 ${mode == 'dark' ? 'bg-dark text-light' : ''}`}>
        <div className="row align-items-start jutify-content-center ms-4">
          <div className="col-lg-3 col-md-5 col-12">
            <p className="lead text-danger">Question: </p>
          </div>
          <div className="col-lg-9 col-md-7 col-12">
            <p className="lead">{prompt}</p>
          </div>
        </div>
        <div className="row align-items-start jutify-content-center ms-4">
          <div className="col-lg-3 col-md-4 col-12">
          <p className="lead text-success">Answer: </p>
          </div>
          <div className="col-lg-9 col-md-8 col-12">
          <p className="lead">{response}</p>
          </div>
        </div>
      </div>
  )
}

export default Card
