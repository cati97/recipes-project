import React, {useContext, useEffect} from 'react';
import {Formik, Field} from 'formik';
import './App.css';
import {RecipeContext} from "./RecipeContext";

const RecipeAddForm = () => {

    const [recipes, setRecipes] = useContext(RecipeContext);

    useEffect(() => {
        console.log("After rendering");
        console.log(recipes);
    }, [])

    return (
        <div className="RecipeAddForm">
            <h1 className={"h1-add-recipe"}>Add your own recipe</h1>
            <Formik initialValues={{title: "", instructions: "", filters: [], maxReadyTime: "", healthScore: "", file: "", diet: ""}}
                    validate={values => {
                        const errors = {};
                        if (!values.title) {
                            errors.title = "Title is required";
                        }
                        if (values.instructions.length < 20) {
                            errors.instructions = "Too short instructions"
                        }
                        if(values.healthScore < 0 || values.healthScore > 200) {
                            errors.healthScore = "Number out of range!"
                        }
                        return errors;
                    }}
                    onSubmit={newRecipe =>  {
                        setRecipes(oldRecipes => [...oldRecipes, {
                            title: newRecipe.title,
                            instructions: newRecipe.instructions,
                            readyInMinutes: newRecipe.maxReadyTime,
                            healthScore: newRecipe.healthScore
                        }]);
                        console.log(newRecipe);
                        alert("Recipe successfully added!")
                    }}>
                {({values, handleSubmit, errors, touched, handleReset}) => (
                    <form className={"add-form"} onSubmit={handleSubmit}>
                        <div className={"input"}>
                        <label className={"label"}>Title </label>
                        <Field type="text" className="recipe-title" name={"title"}/>
                            {errors.title && touched.title && errors.title}
                        </div>
                        <div className={"input"}>
                        <label className={"label"}>Instructions </label>
                        <Field type="text" className="recipe-instructions" name={"instructions"}/>
                            {errors.instructions && touched.instructions && errors.instructions}
                        </div>
                        <div className={"input"}>
                        <label>healthy</label>
                        <Field className="checkbox" name={"filters"} type={"checkbox"} value={"veryHealthy"}/>
                        <label>gluten free</label>
                        <Field className="checkbox" name={"filters"} type={"checkbox"} value={"glutenFree"}/>
                        <label>dairy free</label>
                        <Field className="checkbox" name={"filters"} type={"checkbox"} value={"dairyFree"}/>
                        </div>
                        <div className={"input"}>
                        <label className="label">Max ready time [minutes]</label>
                        <Field className="max-ready-time" name={"maxReadyTime"}/>
                        </div>
                        <div className={"input"}>
                        <label className="label">Health Score [0-200]</label>
                        <Field className="health-score" name={"healthScore"}/>
                            {errors.healthScore && touched.healthScore && errors.healthScore}
                        </div>
                        <div className={"input"}>
                        <label className="label">Diet</label>
                        <Field as="select" name="diet">
                            <option value="normal">Normal</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                        </Field>
                        </div>
                        <div className={"input"}>
                        <label className={"label"} htmlFor="img">Select image</label>
                            <input id="file" name="file" type="file" />
                        </div>
                        <button className="add button" type={"submit"}>Add</button>
                        <button className="reset button" onClick={handleReset}>Reset</button>
                    </form>
                )}
            </Formik>
        </div>)
}

export default RecipeAddForm;
