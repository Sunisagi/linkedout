import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { JobAnnouncement } from "../job/jobAnnouncement.entity";
import { JobApplication } from "../job/jobApplication.entity";
import { PaymentSlip } from "../payment/paymentSlip.entity";
import { User } from "../users/user.entity";

@Entity()
export class FileItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  path: string;

  @ManyToOne(() => User, user => user.files)
  owner: User;

  @OneToMany(() => JobAnnouncement, jobAnnouncements => jobAnnouncements.picture)
  jobAnnouncements: JobAnnouncement[];

  @OneToOne(() => User, user=>user.avatarFile)
  profileUser: User;

  @OneToOne(() => JobApplication)
  jobApplicationResume: JobApplication;

  @OneToOne(() => JobApplication)
  jobApplicationCoverLetter: JobApplication;

  @OneToOne(() => JobApplication)
  jobApplicationTranscript: JobApplication;

  @OneToMany(() => PaymentSlip, paymentSlip => paymentSlip.qrCodeFile)
  paymentSlips: PaymentSlip;
}
