
export interface PeriodicElement {
    id: number;
    maker: string;
    model: string;
    year: number;
    color: string;
    serialNumber: number;
    status: string;
    plateNumber: string;
    plateType: string;
    omr: number;
    price: number;
    createdAt: { date: string; time: string };
}
export const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: 1234,
        maker: 'Toyota',
        model: 'Yars',
        year: 2020,
        color: 'Fuchsia',
        serialNumber: 7747654,
        status: 'active',
        plateNumber: 'HGH 585',
        plateType: 'Private',
        omr: 54354354,
        price: 12300,
        createdAt: { time: '03:00pm', date: '04 Apr' },
    },
    {
        id: 1291,
        maker: 'Mazda',
        model: 'Corolla',
        year: 2000,
        color: 'Teal',
        serialNumber: 998638123,
        status: 'active',
        plateNumber: 'ABC 123',
        plateType: 'Private',
        omr: 54877785,
        price: 12300,
        createdAt: { time: '12:30am', date: '22 June' },
    },
    {
        id: 135,
        maker: 'Mitsubishi',
        model: 'Civik',
        year: 2010,
        color: 'Rose',
        serialNumber: 74662776,
        status: 'active',
        plateNumber: 'MJH 447',
        plateType: 'Private',
        omr: 5584684,
        price: 12300,
        createdAt: { time: '04:30pm', date: '20 July' },
    },
    {
        id: 1767,
        maker: 'Jaguar',
        model: 'Nissan',
        year: 2015,
        color: 'Indigo',
        serialNumber: 6355288,
        status: 'active',
        plateNumber: 'NJ 5857',
        plateType: 'Private',
        omr: 6648468,
        price: 12300,
        createdAt: { time: '03:00pm', date: '04 Apr' },
    },
    {
        id: 23423,
        maker: 'BMW',
        model: 'Yars',
        year: 2011,
        color: 'Cyan',
        serialNumber: 22795753,
        status: 'active',
        plateNumber: 'AI 893',
        plateType: 'Private',
        omr: 514545482,
        price: 12300,
        createdAt: { time: '12:30am', date: '22 June' },
    },
    {
        id: 23423,
        maker: 'Mercedes',
        model: 'Civik',
        year: 1999,
        color: 'Lime',
        serialNumber: 37649208,
        status: 'active',
        plateNumber: 'BH 788',
        plateType: 'Private',
        omr: 5564887,
        price: 12300,
        createdAt: { time: '06:30am', date: '13 Aug' },
    },
    {
        id: 1234,
        maker: 'Toyota',
        model: 'Yars',
        year: 2020,
        color: 'Fuchsia',
        serialNumber: 7747654,
        status: 'active',
        plateNumber: 'HGH 585',
        plateType: 'Private',
        omr: 54354354,
        price: 12300,
        createdAt: { time: '03:00pm', date: '04 Apr' },
    },
    {
        id: 1291,
        maker: 'Mazda',
        model: 'Corolla',
        year: 2000,
        color: 'Teal',
        serialNumber: 998638123,
        status: 'active',
        plateNumber: 'ABC 123',
        plateType: 'Private',
        omr: 54877785,
        price: 12300,
        createdAt: { time: '12:30am', date: '22 June' },
    },
    {
        id: 135,
        maker: 'Mitsubishi',
        model: 'Civik',
        year: 2010,
        color: 'Rose',
        serialNumber: 74662776,
        status: 'active',
        plateNumber: 'MJH 447',
        plateType: 'Private',
        omr: 5584684,
        price: 12300,
        createdAt: { time: '04:30pm', date: '20 July' },
    },
    {
        id: 1767,
        maker: 'Jaguar',
        model: 'Nissan',
        year: 2015,
        color: 'Indigo',
        serialNumber: 6355288,
        status: 'active',
        plateNumber: 'NJ 5857',
        plateType: 'Private',
        omr: 6648468,
        price: 12300,
        createdAt: { time: '03:00pm', date: '04 Apr' },
    },
    {
        id: 23423,
        maker: 'BMW',
        model: 'Yars',
        year: 2011,
        color: 'Cyan',
        serialNumber: 22795753,
        status: 'active',
        plateNumber: 'AI 893',
        plateType: 'Private',
        omr: 514545482,
        price: 12300,
        createdAt: { time: '12:30am', date: '22 June' },
    },
    {
        id: 23423,
        maker: 'Mercedes',
        model: 'Civik',
        year: 1999,
        color: 'Lime',
        serialNumber: 37649208,
        status: 'active',
        plateNumber: 'BH 788',
        plateType: 'Private',
        omr: 5564887,
        price: 12300,
        createdAt: { time: '06:30am', date: '13 Aug' },
    },
];
