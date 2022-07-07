import { useState } from 'react';
import star from './icon-star.svg';
import thankyou from './illustration-thank-you.svg';
import './Rating.scss';
const Rating = () => {
  const [rate, setRate] = useState([0]);
  const [submitted, setSubmitted] = useState(false);
  const handleClick = (e, val) => {
    let arr = [...Array(val).keys()];
    setRate(arr);
  };
  const handleSubmit = () => {
    setSubmitted(true);
  };
  return (
    <div className="rating ff-overpass bgcolor-neutral-800 fade-in">
      {submitted ? (
        <div className={`rating-thanks ${submitted ? 'fade-in' : ''}`}>
          <img src={thankyou} className="mb-4" alt="" />
          <h1 className="h6 mb-4">{`You selected ${rate.length} out of 5`}</h1>
          <h2 className="mb-2">Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      ) : (
        <>
          <div
            className="rating-stars"
            aria-live="polite"
            aria-label={`${rate} stars`}
          >
            {rate &&
              rate.map((num) => (
                <span>
                  <img key={num} src={star} className="starImg" alt="" />
                </span>
              ))}
          </div>
          <h1 className="color-white h2">How did we do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            vero dicta, ducimus aspernatur odit voluptates reprehenderit.
          </p>
          <form onSubmit={handleSubmit} className="rating-form">
            <ol>
              {[...Array(5).keys()].map((input, i) => (
                <li>
                  <input
                    className="visually-hidden"
                    id={i + 1}
                    type="radio"
                    name="rating"
                    value={i + 1}
                  />
                  <label onClick={(e) => handleClick(e, i + 1)} for={i + 1}>
                    {i + 1}
                  </label>
                </li>
              ))}
            </ol>
            <button>Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Rating;
