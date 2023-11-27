import { BaseEntity as TypeOrmBaseEntity, CreateDateColumn, DeleteDateColumn, EntityManager, FindOneOptions, PrimaryGeneratedColumn, UpdateDateColumn, getRepository } from "typeorm";
import { NotFoundException } from "@nestjs/common";

// @Entity()
export abstract class AppBaseEntity extends TypeOrmBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt?: Date

    static async createAndSave<T extends AppBaseEntity>(
        this: new () => T,
        entityData: Partial<T>,
        manager?: EntityManager
    ): Promise<T> {
        const entity = new this();
        Object.assign(entity, entityData);
        return manager ? await manager.save(entity) : await entity.save()
    }

    /**
     * Asynchronous method to find the first entity that matches the specified criteria or create a new one if not found.
     * @param where - The partial entity object specifying the search criteria.
     * @param update - Optional partial entity object to create the enitty.
     * @returns A Promise that resolves to the found or newly created entity.
     */
    static async firstOrCreate<T extends AppBaseEntity>(
        this: new () => T,
        where: Partial<T>,
        update: Partial<T> = {}
    ): Promise<T> {
        // Map the 'where' object to handle nested structures with 'id' properties.
        const mappedWhere = {};
        Object.keys(where).forEach((key) => {
            const value = where[key];

            if (typeof value === 'object' && value.hasOwnProperty('id')) {
                mappedWhere[key] = { id: value.id };
            } else {
                mappedWhere[key] = value;
            }
        });

        // Set up options for the findOne method.
        const options: FindOneOptions<any> = { where: mappedWhere }

        // Attempt to find an entity that matches the specified criteria.
        const entity = await super.findOne(options);
        if (entity) return entity;

        const object = new this();
        Object.assign(object, { ...where, ...update });
        return await object.save();
    }


    async update<T>(updateData: Partial<T>, manager?: EntityManager) {
        this.copyProperties(updateData);
        return manager ? await manager.save(this) : await this.save();
    }

    private copyProperties(data: any): void {
        Object.assign(this, data);
    }

    static async findById<T extends AppBaseEntity>(this: {
        new(): T;
    } & typeof AppBaseEntity, id: string | number, relations: string[] = []): Promise<T | null> {
        const options: FindOneOptions<any> = { where: { id }, relations }
        return await super.findOne(options);
    };

    static async findByIdOrFail<T extends AppBaseEntity>(this: {
        new(): T;
    } & typeof AppBaseEntity, id: string | number, failureMessage?: string, relations: string[] = []): Promise<T> {
        const options: FindOneOptions<any> = { where: { id }, relations }
        const entity = await super.findOne(options);
        if (!entity) throw new NotFoundException(failureMessage ?? `Entity with id ${id} not found`);
        return entity
    };
}