import React, { useState } from "react";
import { getImageUrl } from "../../utilis";
import styles from "./Ask.module.css";

export const Ask = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isActive = (index) => activeIndex === index;

  return (
    <div className={styles.ask}>
      <div className={styles.word}>
        <h1>Frequently asked questions</h1>
        <p>Everything you need to know about the product and billing</p>
      </div>

      {accordionData.map((item, index) => (
        <div key={index} className={styles.accordian}>
          <div
            className={`${styles.accordianItem} ${isActive(index) ? styles.active : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className={styles.accordianItemHeader} id="accordianItemHeader">
              <h5>{item.question}</h5>
            </div>
            {isActive(index) && (
              <div className={styles.accordianItemBody}>
                <div className={styles.accordianItemBodyContent}>
                  <p>{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const accordionData = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can change your plan later."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel anytime."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional information to an invoice."
  },
  {
    question: "How does billing work?",
    answer: "Billing is done monthly."
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email in the settings."
  }
];







// import React, { useEffect, useState } from "react";

// import { getImageUrl } from "../../utilis";
// import styles from "./Ask.module.css";

// export const Ask = () => {

//     const accordionClick = () => {

//         const accordionItemHeaders = document.querySelectorAll("#accordianItemHeader");
//         console.log(accordionItemHeaders);

//         accordionItemHeaders.forEach(accordionItemHeader => {
//             accordionItemHeader.addEventListener("click", event => {
//                 accordionItemHeader.classList.toggle(`${styles.active}`)
//             })
//         })

//     }


//     const [ accordionOpen, setAccordionOpen ] = useState({});

//     const toggleAccordion = () => {
//         // setAccordionOpen(!accordionOpen)
//     }


    

//     return(
//         <div className={styles.ask}>
//             <div className={styles.word}>
//                 <h1>Frequently asked questions</h1>
//                 <p>Everything you need to know about the product and billing</p>
//             </div>
//             <div className={styles.accordian}>
//                 <div className={styles.accordianItem} onClick={() => toggleAccordion()}>
//                     <div className={`${styles.accordianItemHeader} ${styles.active}`} id="accordianItemHeader">
//                         <h5>Is there a free trial available</h5>
//                     </div>
//                     <div className={styles.accordianItemBody}>
//                         <div className={styles.accordianItemBodyContent}>
//                           <p>  Yes,you can try us for free for 30 days.If you want,we'll provide you with a free, personalized
//                             30-minute onboarding calls to get you up and running as soon as possible.</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div className={styles.accordian}>
//                 <div className={styles.accordianItem} onClick={() => toggleAccordion()}>
//                     <div className={`${styles.accordianItemHeader} ${styles.active}`} id="accordianItemHeader">
//                         <h5>Can I change my plan later</h5>
//                     </div>
//                     <div className={styles.accordianItemBody}>
//                         <div className={styles.accordianItemBodyContent}>
//                         <p>  Yes,you can try us for free for 30 days.If you want,we'll provide you with a free, personalized
//                             30-minute onboarding calls to get you up and running as soon as possible.</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div className={styles.accordian}>
//                 <div className={styles.accordianItem} onClick={() => accordionClick()}>
//                     <div className={`${styles.accordianItemHeader} ${styles.active}`}id="accordianItemHeader">
//                        <h5> What is your cancellation policy?</h5>
//                     </div>
//                     <div className={styles.accordianItemBody}>
//                         <div className={styles.accordianItemBodyContent}>
//                         <p>  Yes,you can try us for free for 30 days.If you want,we'll provide you with a free, personalized
//                             30-minute onboarding calls to get you up and running as soon as possible.</p>
//                         </div>
                        
//                     </div>
//                 </div>

//             </div>
//             <div className={styles.accordian}>
//                 <div className={styles.accordianItem} onClick={() => accordionClick()}>
//                     <div className={styles.accordianItemHeader} id="accordianItemHeader">
//                         <h5>Can other info be added to an invoice?</h5>
//                     </div>
//                     <div className={styles.accordianItemBody}>
//                         <div className={styles.accordianItemBodyContent}>
//                         <p>  Yes,you can try us for free for 30 days.If you want,we'll provide you with a free, personalized
//                             30-minute onboarding calls to get you up and running as soon as possible.</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div className={styles.accordian}>
//                 <div className={styles.accordianItem} onClick={() => accordionClick()}>
//                     <div className={styles.accordianItemHeader} id="accordianItemHeader">
//                        <h5> How does billing word</h5>
//                     </div>
//                     <div className={styles.accordianItemBody}>
//                         <div className={styles.accordianItemBodyContent}>
//                         <p>  Yes,you can try us for free for 30 days.If you want,we'll provide you with a free, personalized
//                             30-minute onboarding calls to get you up and running as soon as possible.</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div className={styles.accordian}>
//                 <div className={styles.accordianItem} onClick={() => accordionClick()}>
//                     <div className={styles.accordianItemHeader} id="accordianItemHeader">
//                        <h5> How do i change my account email?</h5>
//                     </div>
//                     <div className={styles.accordianItemBody}>
//                         <div className={styles.accordianItemBodyContent}>
//                         <p>  Yes,you can try us for free for 30 days.If you want,we'll provide you with a free, personalized
//                             30-minute onboarding calls to get you up and running as soon as possible.</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }