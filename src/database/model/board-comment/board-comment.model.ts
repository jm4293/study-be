import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserModel } from '../user';
import { BoardModel } from '../board';

@Entity({ name: 'board_comment', comment: '게시판 댓글 테이블' })
export class BoardCommentModel {
  @PrimaryGeneratedColumn({ type: 'bigint', comment: 'boardCommentSeq' })
  id: number;

  @Column({ name: 'user_id', type: 'bigint', comment: 'userSeq' })
  user_id: number; // 변수 이름을 user_id로 변경

  @Column({ name: 'board_id', type: 'bigint', comment: 'boardSeq' })
  board_id: number; // 변수 이름을 board_id로 변경

  @Column({ type: 'varchar', length: 500, comment: '댓글 내용' })
  comment: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', comment: '생성일' })
  createdAt: Date;

  @ManyToOne(() => UserModel, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: UserModel;

  @ManyToOne(() => BoardModel, (board) => board.comments)
  @JoinColumn({ name: 'board_id' })
  board: BoardModel;
}
