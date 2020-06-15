import React from 'react';
import {Formik, Field, Form} from 'formik';
import './App.css';

const RecipeFilter = (props) => {
    const handleSubmit = (values) => {
        props.changeQueryHandler(values.query);
        props.filtersHandler(values.filters);
        props.maxReadyTimeHandler(values.maxReadyTime);
        props.sortByHandler(values.sortBy);
        props.setClicked(true);
    }

    return (
        <div className="RecipeFilter">
        <Formik initialValues={{query: "", filters: [], maxReadyTime: "", sortBy: "title"}} onSubmit={handleSubmit}
        >
            {({values, handleSubmit}) => (
                <Form className={"search-form"} onSubmit={handleSubmit}>
                    <Field className="search-bar" name={"query"} placeholder={"Find a recipe"}/>
                    <label>vegetarian</label>
                    <Field className="checkbox" name={"filters"} type={"checkbox"} value={"vegetarian"}/>
                    <label>healthy</label>
                    <Field className="checkbox" name={"filters"} type={"checkbox"} value={"veryHealthy"}/>
                    <label>gluten free</label>
                    <Field className="checkbox" name={"filters"} type={"checkbox"} value={"glutenFree"}/>
                    <label className="label">Max ready time [minutes]</label>
                    <Field className="max-ready-time" name={"maxReadyTime"}/>
                    <label className="sort-by-label">Sort by</label>
                    <Field as="select" name="sortBy">
                        <option value="title">Title</option>
                        <option value="healthScore">Health Score</option>
                    </Field>
                    <button className="search-button" type={"submit"}>Search</button>
                    {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
                </Form>
            )}
        </Formik>
        </div>
    );
}

export default RecipeFilter;
