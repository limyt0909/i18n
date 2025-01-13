import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LanguageMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        console.log(req.headers)
        req.headers['accept-language'] = req.query.lang || 'en';
        next();
    }
}
