import { GetRecipeInformation200ResponseExtendedIngredientsInner } from './GetRecipeInformation200ResponseExtendedIngredientsInner';
import { GetRecipeInformation200ResponseWinePairing } from './GetRecipeInformation200ResponseWinePairing';
export declare class GetRecipeInformation200Response {
    'id': number;
    'title': string;
    'image': string;
    'imageType': string;
    'servings': number;
    'readyInMinutes': number;
    'license': string;
    'sourceName': string;
    'sourceUrl': string;
    'spoonacularSourceUrl': string;
    'aggregateLikes': number;
    'healthScore': number;
    'spoonacularScore': number;
    'pricePerServing': number;
    'analyzedInstructions': Array<any>;
    'cheap': boolean;
    'creditsText': string;
    'cuisines': Array<string>;
    'dairyFree': boolean;
    'diets': Array<string>;
    'gaps': string;
    'glutenFree': boolean;
    'instructions': string;
    'ketogenic': boolean;
    'lowFodmap': boolean;
    'occasions': Array<string>;
    'sustainable': boolean;
    'vegan': boolean;
    'vegetarian': boolean;
    'veryHealthy': boolean;
    'veryPopular': boolean;
    'whole30': boolean;
    'weightWatcherSmartPoints': number;
    'dishTypes': Array<string>;
    'extendedIngredients': Set<GetRecipeInformation200ResponseExtendedIngredientsInner>;
    'summary': string;
    'winePairing': GetRecipeInformation200ResponseWinePairing;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
