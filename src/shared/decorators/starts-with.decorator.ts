import {
  registerDecorator,
  ValidationArguments,
  type ValidationOptions,
} from 'class-validator';

export function StartsWith(
  prefix: string,
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'StartsWith',
      target: object.constructor,
      propertyName,
      constraints: [prefix],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [prefix] = args!.constraints;
          return typeof value === 'string' && value.startsWith(prefix);
        },
        defaultMessage(args: ValidationArguments) {
          const [prefix] = args!.constraints;
          return `${args!.property} must start with "${prefix}"`;
        },
      },
    });
  };
}
