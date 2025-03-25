import React from "react";

interface IngredientListProps {
    ingredients: string[];
    ingredientList: React.JSX.Element[];
    toggleRecipeShown: () => void;
}


const IngredientList = ({ingredients, ingredientList, toggleRecipeShown}: IngredientListProps) => {

    return(
        <section>    
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list">
                {ingredientList}
            </ul>
            {ingredients.length >= 4 ? <div className="get-recipe-container">
                <div>
                    <h3>Ready for a Recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button className="recipe-btn" onClick={toggleRecipeShown}>Get a recipe</button>
            </div> : null} 
        </section>
    )
}

export default IngredientList