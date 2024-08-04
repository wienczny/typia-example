import {type IValidation} from "typia";


export interface TypiaModelMetadata<TYPE> {
    validateParser: {
        (input: string): IValidation<TYPE>
    }
}
