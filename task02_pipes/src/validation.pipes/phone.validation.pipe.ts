import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class PhoneValidationPipe implements PipeTransform {
    transform(number: any, metadata: ArgumentMetadata) {

        let pn = number.toString().trim()

        if (!pn.match(/^79\d{9}$/))
            throw new Error('Phone error!');

        // 79123456789 -> +79123456789
        pn = pn.replace(/^(79\d{9})$/,'+$1')
        
        return pn
    }
}
