import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

const AddMovie = (props: any) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const openingTextRef = useRef<HTMLTextAreaElement>(null);
    const releaseDateRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        debugger;
        // could add validation here...

        const movie = {
            title: titleRef.current!.value,
            openingText: openingTextRef.current!.value,
            releaseDate: releaseDateRef.current!.value,
        };

        props.onAddMovie(movie);
    }


    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='opening-text'>Opening Text</label>
                <textarea rows={5} id='opening-text' ref={openingTextRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor='date'>Release Date</label>
                <input type='text' id='date' ref={releaseDateRef} />
            </div>
            <button>Add Movie</button>
        </form>
    );
}

export default AddMovie;
