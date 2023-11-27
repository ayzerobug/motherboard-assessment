export function ResponseMessage(message: string) {
    return function (target: unknown, context: any, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function <T>(...args: any[]): Promise<{ message: string, data: T }> {
            const data = await originalMethod.apply(this, args);
            return { message, data }
        };
    }
}