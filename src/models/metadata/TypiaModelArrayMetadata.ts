import {type IValidation} from "typia";
import type {TypiaModelMetadata} from "./TypiaModelMetadata";


export interface TypiaModelArrayMetadata<TYPE, ARRAY_TYPE = Array<TYPE>> extends TypiaModelMetadata<TYPE> {
    validateArrayParser: {
        (input: string): IValidation<ARRAY_TYPE>
    }
}
