import {IFacility} from '../model/facility';

export class FacilityDao {
  public static facilities: IFacility[] = [
    {
      id: 1,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg',
      name: 'PHÒNG SUITE HƯỚNG BIỂN',
      payment: 1000000
    },
    {
      id: 2,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg',
      name: 'PHÒNG DELUXE HƯỚNG BIỂN',
      payment: 1000000
    },
    {
      id: 3,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg',
      name: 'BIỆT THỰ HƯỚNG BIỂN CÓ HỒ BƠI RIÊNG',
      payment: 1000000
    },
    {
      id: 4,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-F-370x239.jpg',
      name: 'BIỆT THỰ HƯỚNG VƯỜN CÓ HỒ BƠI RIÊNG',
      payment: 1000000
    },
    {
      id: 5,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-370x239.jpg',
      name: 'PHÒNG PRESIDENT SUITE',
      payment: 1000000
    },
    {
      id: 6,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-F-370x239.jpg',
      name: 'PHÒNG DELUXE HƯỚNG VƯỜN',
      payment: 1000000
    }];
}
