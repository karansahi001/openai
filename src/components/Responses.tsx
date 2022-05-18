import React, { useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import { useDispatch, useSelector } from 'react-redux';
import { newPrompt } from '../redux/prompt';
import { newResponse } from '../redux/response';
import { newallPrompts } from '../redux/allPrompts';
import { RootState } from '../redux/store'
import { newMode } from '../redux/mode';

const Input: React.FC = () => {

    const { prompt } = useSelector((state: RootState) => state.prompter);
    const { response } = useSelector((state: RootState) => state.responser);
    const { allPrompts } = useSelector((state: RootState) => state.allPromptser);
    const { mode } = useSelector((state: RootState) => state.moder);
    const dispatch = useDispatch();
    const [engine, setEngine] = useState<string>('text-curie-001'); // state for AI Engine
    const [text, setText] = useState<string>('');
    const storedPrompts = localStorage.getItem('allPrompts'); //accessing user's local storage to check old responses

    const handleEngine = (e: any): void => {
        e.preventDefault();
        setEngine(e.target.value);
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault(); //preventing page reload

        // Dealing with OpenAI API 
        const configuration = new Configuration({
            apiKey: '',
        });
        const openai = new OpenAIApi(configuration);
        openai.createCompletion(engine, {
            prompt: `${e.target.text.value}`,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
            .then((res: any): any => {
                dispatch(newPrompt(e.target.text.value)); //Sending action to the reducer to change state
                dispatch(newResponse(res.data.choices[0].text));
                setText('');
            });
    };

    // Saving the responses in an array everytime new response comes
    useEffect(() => {
        if (response.length > 0) {
            dispatch(newallPrompts([{ prompt, response }, ...allPrompts]));
        };
        // eslint-disable-next-line
    }, [response])

    useEffect(() => {
        localStorage.setItem('allPrompts', JSON.stringify(allPrompts));
    }, [allPrompts])

    useEffect(() => {
        if (storedPrompts) {
            dispatch(newallPrompts(JSON.parse(storedPrompts)))
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className={`container-fluid pt-5 ${mode == 'dark' ? 'bg-dark text-light' : ''}`}>
            <div className="row justify-content-center">
                <div className="col-6">
                    <h1 className="display-5">Fun with
                        <span className="text-danger"> Q</span>
                        &#38;
                        <span className="text-success">A </span>
                        AI
                    </h1>
                </div>
                <div className="col-2 form-check form-switch">
                    <input 
                        className="form-check-input me-0 shadow-none" 
                        type="checkbox" 
                        value={mode} 
                        onChange={() => mode == 'dark' ? dispatch(newMode('light')) : dispatch(newMode('dark'))}
                        id="flexSwitchCheckDefault" />
                    <label className="form-check-label ms-0" htmlFor="flexSwitchCheckDefault">{mode} mode</label>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-5">
                <div className="row justify-content-center">
                    <div className="col-8 ">
                        <label className="form-label">I am an intelligent AI, you can Ask me anything, and I will give you the Answer </label>
                        <textarea
                            name="text"
                            className={`form-control shadow-none ${mode == 'dark' ? 'bg-dark text-light' : ''}`}
                            id="form-control-area"
                            rows={6}
                            placeholder="Enter Question and then press 'Submit'"
                            value={text}
                            onChange={(e) => setText(e.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-8">
                        <div className="dropdown text-end">
                            <button className="btn btn-secondary dropdown-toggle shadow-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Current AI Engine: <span className="fw-bold">{engine}</span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <button onClick={handleEngine} className="dropdown-item" value="text-davinci-002">text-davinci-002</button>
                                <button onClick={handleEngine} className="dropdown-item" value="text-curie-001">text-curie-001 (Default)</button>
                                <button onClick={handleEngine} className="dropdown-item" value="text-babbage-001">text-babbage-001</button>
                                <button onClick={handleEngine} className="dropdown-item" value="text-ada-001">text-ada-001</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-8 text-center">
                        <button className="btn btn-success btn-lg px-5  shadow-none" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Input
