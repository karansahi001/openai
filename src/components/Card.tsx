import React from 'react'

interface Props{
    prompt: string,
    response: string
}

const Card: React.FC<Props> = ({prompt, response}) => {
  return (
    <div className="card border border-5 rounded mb-3 py-4 px-3">
        <div className="row align-items-start jutify-content-center ms-4">
          <div className="col-lg-3 col-md-5 col-12">
            <p className="lead fw-bold text-danger">Question: </p>
          </div>
          <div className="col-lg-9 col-md-7 col-12">
            <p className="lead">{prompt}</p>
          </div>
        </div>
        <div className="row align-items-start jutify-content-center ms-4">
          <div className="col-lg-3 col-md-4 col-12">
          <p className="lead fw-bold text-success">Answer: </p>
          </div>
          <div className="col-lg-9 col-md-8 col-12">
          <p className="lead">{response}</p>
          </div>
        </div>
      </div>
  )
}

export default Card