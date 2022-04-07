import {ICustomer} from '../model/customer';

export class CustomerDao{
  public static customers: ICustomer[] = [
    {
      id: 1,
      name: 'Hoàng Đặng Quốc Phú',
      phone: '0942250399',
      email: 'hdqphu1301@gmail.com',
      address: 'Quảng Trị'
    },
    {
      id: 2,
      name: 'Dương Công Minh Sơn',
      phone: '0942252259',
      email: 'dcmson@gmail.com',
      address: 'Quảng Bình'
    },
    {
      id: 3,
      name: 'Nguyễn Thanh Tâm',
      phone: '0912345734',
      email: 'nttam@gmail.com',
      address: 'Quảng Nam'
    },
    {
      id: 4,
      name: 'Nguyễn Anh Hoàng',
      phone: '0925321123',
      email: 'nahoang@gmail.com',
      address: 'Quảng Nam'
    },
    {
      id: 5,
      name: 'Nguyễn Anh Trọng',
      phone: '0989998877',
      email: 'natrong@gmail.com',
      address: 'Huế'
    },
  ];
}
