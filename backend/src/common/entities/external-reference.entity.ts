import { Entity, Column } from 'typeorm';
import { AppBaseEntity } from './base.entity';
import { ExternalServiceProvider } from '../enums';
@Entity('external_references')
export class ExternalReference extends AppBaseEntity {
    @Column()
    referenceableId: number;

    @Column()
    referenceableType: string;

    @Column()
    reference: string;

    @Column({ nullable: true })
    tag: string;

    @Column({
        type: 'enum',
        enum: ExternalServiceProvider,
    })
    provider: ExternalServiceProvider;
}

