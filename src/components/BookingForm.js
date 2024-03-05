import React, { useState } from "react";

const BookingForm  = (props) => {
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[adult, setAdult] = useState("");
    const[children, setChildren] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSubmit(e);
    };

    const handleChange = (e) => {
        // console.log(booking);
        setDate(e);
        props.dispatch(e);
        };
    
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* For Date selection */}
                        <div>
                            <label htmlFor="book-date"> Date</label>
                            <input id='book-date' value={date} onChange={(e)  => handleChange(e.target.value)} type="date" required/>
                        </div>

                        {/* For Time selection */}
                        <div>
                            <label htmlFor="book-time"> Time</label>
                            <select
                                name="time"
                                id="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            >
                                {props.availableTimes.availableTimes.map(availableTimes => (
                                    <option value={availableTimes.value} key={availableTimes.id}>
                                        {availableTimes}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* For Adult selection */}
                        <div>
                            <label htmlFor="book-adults"> Adults</label>
                            <input id="book-adults" type="number" min="1" value={adult}  
                             onChange={(e)=>{setAdult(Number(e.target.value))}}/>
                        </div>

                        {/* For Children selection */}
                        <div>
                            <label htmlFor="book-children"> Children</label>
                            <input id="book-children" type="number" min="1" value={children}  
                             onChange={(e)=>{setChildren(Number(e.target.value)) }}/>
                        </div>
                        
                        {/* For Submit button */}
                        <div className="buttonReceive">
                            <input aria-label="On Click" type="submit" value={"Make your reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
    }
export default BookingForm;