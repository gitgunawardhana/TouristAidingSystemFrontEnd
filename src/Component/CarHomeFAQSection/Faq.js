import { data } from 'jquery';
import React from 'react'
import accordianData from '../../Assets/Data/DataAccordian.js'
import './Faq.css'
import { useState } from 'react';
// import Props from './props';


const Faq = () => {
      const [selected, setSelected] = useState(null)
      const toggle_accordian = (k) => {
            if (selected == k) {
                  return setSelected(null)
            }
            setSelected(k)
      }
      return (
            <section>
                  <h3 class="text-center mb-4 pb-2 text-primary fw-bold" id='accordian_topic'>FAQ</h3>
                  <p class="text-center mb-5">
                        Find the answers for the most frequently asked questions below
                  </p>
                  <div className="wrapper">
                        <div className="faq_accordian">
                              {accordianData.map((item, k) => (
                                    <div className="accordianitem">
                                          <div className="accordianTitle" onClick={() => toggle_accordian(k)}>
                                                <h2 id="accordianTitle_Heading">{item.question}</h2>
                                                <span>{selected == k ? '-' : '+'}</span>
                                          </div>
                                          <div className={selected == k ? 'accordian_content_show' : 'accordianContent'}>
                                                {item.answer}
                                          </div>

                                    </div>
                              ))}
                        </div>
                  </div>
                  {/* <div class="accordion accordion-flush" id="accordionFlushExample">
                        <Props question="How does roadsign find such low rental car prices?"
                              placeholder="Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body."
                        />
                        <Props question="Can i rent a car without credit card?"
                              placeholder="Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body."
                        />
                        <Props question="What kind of cars are available to rent?"
                              placeholder="Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body."
                        />
                        <Props question="How to find the best car rental deals on roadsign?"
                              placeholder="Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body."
                        />

                  </div> */}
            </section >
      )
}

export default Faq;