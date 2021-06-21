import {DanhMuc} from "./danh-muc";
import {VungMien} from "./vung-mien";
import {Huong} from "./huong";

export interface BatDongSan {
  id: number;
  danhMuc: DanhMuc;
  vungMien: VungMien;
  banLa: string;
  banDangTin: string;
  tinhTrang:string;
  diaChi: string;
  dienTich:number;
  huong: Huong;
  tuaDe:string;
  noiDung:string
  gia:number;
}
