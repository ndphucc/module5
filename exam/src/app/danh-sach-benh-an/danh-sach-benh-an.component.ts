import {Component, OnInit} from '@angular/core';
import {BenhAn} from '../model/benh-an';
import {BenhAnService} from '../service/benh-an.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-danh-sach-benh-an',
  templateUrl: './danh-sach-benh-an.component.html',
  styleUrls: ['./danh-sach-benh-an.component.css']
})
export class DanhSachBenhAnComponent implements OnInit {
  dachSachBenhAn: BenhAn[];
  benhAnBiXoa: BenhAn;

  constructor(private benhAnService: BenhAnService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.benhAnService.findAll().subscribe(next => {
      this.dachSachBenhAn = next;
    });
  }

  showModal(item: BenhAn) {
    this.benhAnBiXoa = item;
  }

  xoaBenhAn() {
    this.benhAnService.delete(this.benhAnBiXoa.id).subscribe(item => {
      this.benhAnService.findAll().subscribe(next => {
        this.dachSachBenhAn = next;
        this.toastr.success('Xóa thành công');
      });
    });
  }
}
