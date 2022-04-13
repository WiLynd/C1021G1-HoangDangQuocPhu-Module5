import {IContract} from './contract';

export class ContractDao{
  public static contracts: IContract[] = [
    {
    id: 1,
    customerName: 'Hoàng Đặng Quốc Phú',
    facilityName: 'PHÒNG SUITE HƯỚNG BIỂN',
    startDay: '04/06/2021',
    endDay: '04/06/2022',
    prePayment: 30000000
    },
    {
      id: 2,
      customerName: 'Dương Công Minh Sơn',
      facilityName: 'PHÒNG DELUXE HƯỚNG BIỂN',
      startDay: '04/06/2021',
      endDay: '04/06/2022',
      prePayment: 10000000
    },
    {
      id: 3,
      customerName: 'Nguyễn Thanh Tâm',
      facilityName: 'BIỆT THỰ HƯỚNG BIỂN CÓ HỒ BƠI RIÊNG',
      startDay: '04/06/2021',
      endDay: '04/06/2022',
      prePayment: 12000000
    },
    {
      id: 4,
      customerName: 'Nguyễn Anh Hoàng',
      facilityName: 'BIỆT THỰ HƯỚNG VƯỜN CÓ HỒ BƠI RIÊNG',
      startDay: '04/06/2021',
      endDay: '04/06/2022',
      prePayment: 50000000
    },
    {
      id: 5,
      customerName: 'Nguyễn Anh Trọng',
      facilityName: 'PHÒNG PRESIDENT SUITE',
      startDay: '04/06/2021',
      endDay: '04/06/2022',
      prePayment: 20000000
    }
  ];
}
