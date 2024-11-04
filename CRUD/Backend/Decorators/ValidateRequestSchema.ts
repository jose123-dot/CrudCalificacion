import { plainToClass, ClassConstructor } from "class-transformer";
import { validate } from "class-validator";

export function validateRequestSchema(
  bodySchema?: ClassConstructor<any>,
  paramsSchema?: ClassConstructor<any>
) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const [request, response] = args;

      if (paramsSchema) {
        const paramsDto = plainToClass(paramsSchema, request.query);
        const paramsErrors = await validate(paramsDto, {
          stopAtFirstError: true,
        });
        if (paramsErrors.length > 0) {
          const firstError = paramsErrors[0];
          const key = firstError.property;
          const constraints = firstError.constraints;
          const message = constraints ? Object.values(constraints)[0] : "";
          return response.status(400).json({ error: { field: key, message } });
        }
      }

      if (bodySchema) {
        const bodyDto = plainToClass(bodySchema, request.body);
        const bodyErrors = await validate(bodyDto, { stopAtFirstError: true });
        if (bodyErrors.length > 0) {
          const firstError = bodyErrors[0];
          const key = firstError.property;
          const constraints = firstError.constraints;
          const message = constraints ? Object.values(constraints)[0] : "";
          return response.status(400).json({ field: key, message });
        }
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
