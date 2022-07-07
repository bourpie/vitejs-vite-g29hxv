import { useState } from 'react';
import star from './icon-star.svg';
import './Rating.scss';
const Rating = () => {
  const [rate, setRate] = useState([0]);
  const [submitted, setSubmitted] = useState(false);
  const handleClick = (e, val) => {
    let arr = [...Array(val).keys()];
    setRate(arr);
    console.log(arr);
  };
  const handleSubmit = () => {
    setSubmitted(true);
  };
  return (
    <div className="rating ff-overpass bgcolor-neutral-800">
      {submitted ? (
        <h1>Allo</h1>
      ) : (
        <>
          <div
            className="rating-stars"
            aria-live="polite"
            aria-label={`${rate} stars`}
          >
            {rate &&
              rate.map((num) => (
                <img key={num} src={star} className="starImg" alt="" />
              ))}
          </div>
          <h1 className="color-white fs-6">How did we do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            vero dicta, ducimus aspernatur odit voluptates reprehenderit.
          </p>
          <form onSubmit={handleSubmit}>
            <ol className="rating-form">
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
