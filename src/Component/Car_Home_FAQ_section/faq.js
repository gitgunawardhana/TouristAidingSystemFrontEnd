import React from 'react'
import Props from './props';


const faq = () => {
      return (
            <section>
                  <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
                  <p class="text-center mb-5">
                        Find the answers for the most frequently asked questions below
                  </p>
                  <div class="accordion accordion-flush" id="accordionFlushExample">
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

                  </div>
            </section>
      )
}

export default faq