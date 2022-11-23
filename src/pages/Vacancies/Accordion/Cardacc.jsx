import React,{useState} from 'react';


const Cardacc = ({item}) => {

    const [accordion,setAccordion] = useState(false)
    return (
        <>
            <div key={item.id}  onClick={() => setAccordion(!accordion)} className="accordion__card">
                <p className="accordion__desc">{item.title}   <span>{item.answer.length}</span></p>
                <img className={`${accordion ? "close" : "open"}`}  src="https://web-static.more.tv/static/icons/down.163550c7.svg" alt=""/>
            </div>
            <div className="accordion__answer">
                {
                    item.answer.map((el)=>(
                        <>
                            <p style={{display: accordion ? "block": "none" }} className="accordion__answer-desc" key={el.id}>{el.title}</p>
                        </>

                        
                        
                        )
                    )
                }
            </div>
        </>


    );
};

export default Cardacc;