export interface Recipe {
    name: string;
    mealType: string;
    ingredients: string[];
    image: string;
    cuisine: string;
    cookingTime: {
        cooktime: number;
        preparationTime: number;
        totalTime: number;
    };
    chef: string;
}