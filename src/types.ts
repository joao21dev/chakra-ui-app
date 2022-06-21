import { IconType } from "react-icons";

export interface PostI {
  userId: number;
  title: string;
  body: string;
  reactions: number;
  tags: Array<String>;
  id: number;
}
export interface CardI {
  height: number;
  weight: number;
  amount: number;
  percent: number;
  bgColor: string;
  icon: IconType;
  color: string;
  name: string;
}
export interface EmployeeI {
  title: string;
  icon: string;
  subTitle: string;
}
