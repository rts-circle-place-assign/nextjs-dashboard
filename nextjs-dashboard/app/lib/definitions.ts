// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CircleBaseInfo = {
  id: string
  circleid: number;
  circlename: string
  circlenamekana: string
  penname: string
  pennamekana: string
  cutid: number
  mediacode: number
  media: string
  sakuhincode: string
  sakuhin: string
  adult: boolean
}
export type Circle = {
  id: string
  circleid: number
  msnum?: string
  gattainum?: string
  isSecond: boolean
  friendCode?: string
  circlename: string
  circlenamekana: string
  penname: string
  pennamekana: string
  sakuhincode: string
  mediacode: number
  adult: boolean
  hosoku?: string
  web?: string
  webok: boolean
  pixiv?: string
  pixivok: boolean
  twitter?: string
  twitterok: boolean
  musicgenre?: string
  bookcharacter?: string
  bookgenre?: string
  bookseijingenre?: string
  goodsgenre?: string
  cutid: number
  spnum: number
  name: string
}

export type Hanpu = {
  circleid: number
  hanpuname: string
  hanpudate: Date
  hanpuprice: number
  hanpuamount: number
}

export type Media = {
  mediacode: number
  media: string
}

export type Sakuhin = {
  sakuhincode: string
  sakuhin: string
}
