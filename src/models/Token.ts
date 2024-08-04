import type {TypiaModelArrayMetadata} from "./metadata/TypiaModelArrayMetadata";
import typia, {tags} from "typia";


export interface IToken {
    data: string;
    context: string;
    valid: boolean;
    expires_at?: string & tags.Format<"date-time">;
}

export const TokenMetadata: TypiaModelArrayMetadata<IToken> = {
    validateParser: typia.json.createValidateParse<IToken>(),
    validateArrayParser: typia.json.createValidateParse<Array<IToken>>(),
}
