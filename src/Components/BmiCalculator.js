import React, { useState } from 'react';

function BmiCalculator() {
    const [values, setValues] = useState({
        heightFeet: null,
        heightInches: null,
        weight: null
    });

    const [bmi, setBmi] = useState('');

    const handleHeightFeetInputChange = (event) => {
      event.persist();
      setValues((values) => ({
        ...values,
        heightFeet: event.target.value,
      }));
    };

    const handleHeightInchesInputChange = (event) => {
      event.persist();
      setValues((values) => ({
        ...values,
        heightInches: event.target.value,
      }));
    };

    const handleWeightInputChange = (event) => {
      event.persist();
      setValues((values) => ({
        ...values,
        weight: event.target.value,
      }));
    };
    //Formula: weight (lb) / [height (in)]2 x 703
   function calculateBMI(e) {
      e.preventDefault();
      let heightInInches = (parseInt(values.heightFeet) * 12) + parseInt(values.heightInches);
      setBmi((parseInt(values.weight) / (heightInInches**2))*703);
   }

    return (
      <div>
        <form onSubmit={calculateBMI}>
          <h1>BMI Calculator</h1>
          <label>
            Height
            <input id="height-feet"
            class="form-field"
            type="number"
            placeholder="Feet"
            name="heightFeet"
            value={values.heightFeet}
            onChange={handleHeightFeetInputChange}></input>
            <input id="height-inches"
            class="form-field"
            type="number"
            placeholder="Inches"
            name="heightInches"
            value={values.heightInches}
            onChange={handleHeightInchesInputChange}></input>
          </label>
          <label>
            Weight
            <input id="weight"
            class="form-field"
            type="number"
            placeholder="Weight (lbs)"
            name="weight"
            value={values.weight}
            onChange={handleWeightInputChange}></input>
          </label>
          <button type="submit" onSubmit={calculateBMI}>Calculate</button>
          <h3>{bmi}</h3>
        </form>
      </div>
    );
  }

  export default BmiCalculator;