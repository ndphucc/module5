import {BenhNhan} from './benh-nhan';

export interface BenhAn {
  id: string;
  tenBenhVien: string;
  ngayNhapVien: string;
  ngayRaVien: string;
  lyDo: string;
  phuongPhapDieuTri: string;
  bacSiDieuTri: string;
  benhNhan: BenhNhan;
}
