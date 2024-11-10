import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class BookValidationPipe implements PipeTransform{
    transform(body: any, metadata: ArgumentMetadata) {
        if (!body.hasOwnProperty("title"))
            throw new Error('There is not property "title"');
        if (!body.hasOwnProperty("descroption"))
            throw new Error('There is not property "descroption"');
        if (!body.hasOwnProperty("author"))
            throw new Error('There is not property "author"');
        
        return body
    }
}