import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export function ValidateRequestParams(schema: any) {
  return function (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
  ) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = async function (...args: any[]) {
      const [request, response] = args;
      const compareDtoWithRequest = plainToInstance(schema, request.params);
      const errors = await validate(compareDtoWithRequest); // Sin stopAtFirstError

      if (errors.length > 0) {
        const firstError = errors[0];
        const key = firstError.property;
        const constraints = firstError.constraints;
        const message = constraints ? Object.values(constraints)[0] : "";
        return response.status(400).json({ error: { field: key, message } });
      }
      return originalMethod.apply(this, args);
    };
    return propertyDescriptor;
  };
}
