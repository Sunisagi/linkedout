import { Column, Double, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp, Unique } from "typeorm";
import { IsDate, IsEmail } from 'class-validator';
import { JobAnnouncement } from "../job/jobAnnouncement.entity";
import { FileItem } from "../files/fileItem.entity";

@Entity()
@Unique(["username"])
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    @Column()
    hashedPassword: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    prefix: string;

    @Column()
    firstname: string;
    
    @Column()
    lastname: string;

    @Column("date")
    birthDate: Date;

    @Column()
    address: string;

    @Column("double")
    latitude: Double;

    @Column("double")
    longtitude: Double;

    @Column()
    telNumber: string;

    @Column("date",{default: null})
    vertifyAt: Date;

    @Column({default: false})
    isAdmin: boolean;

    @OneToOne(() => FileItem)
    @JoinColumn()
    avatarFile: FileItem;

    @OneToMany(() => JobAnnouncement, jobAnnouncement => jobAnnouncement.owner)
    jobAnnouncements: JobAnnouncement[];

    @OneToMany(() => FileItem, FileItem => FileItem.owner)
    files: FileItem[];

}
