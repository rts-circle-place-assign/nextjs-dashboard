'use server';

import {z} from 'zod';
import {revalidatePath} from 'next/cache';
import {redirect} from 'next/navigation';
import postgres from 'postgres';

export type State = {
  errors?: {
    circlename?: string[];
    circlenamekana?: string[];
    penname?: string[];
    pennamekana?: string[];
    mediacode?: string[];
    sakuhincode?: string[];
    adult?: string[];
  };
  message?: string | null;
};

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

// フォームに入力された情報をzodに認識させ、エラーを返したい項目についてはエラーメッセージを設定する。
const FormSchema = z.object({
  id: z.string(),
  gattainum: z.string(),
  friendCode: z.string(),
  circlename: z.string(),
  circlenamekana: z.string({
    invalid_type_error: 'サークル名の読み仮名を入力してください。',
  }),
  penname: z.string({
    invalid_type_error: 'ペンネームを入力してください。',
  }),
  pennamekana: z.string({
    invalid_type_error: 'ペンネームの読み仮名を入力してください。',
  }),
  mediacode: z.coerce.number().lte(10, {message: '10~12,20~24,30~36,90,99のいずれかを入力してください。'}),
  sakuhincode: z.string({
    invalid_type_error: 'A~Zのいずれかの作品コードを入力してください。'
  }),
  adult: z.enum(["true", "false"], {
      invalid_type_error: 'どちらかを選択してください。'
    }
  ),
  hosoku: z.string(),
  web: z.string(),
  webok: z.boolean(),
  pixiv: z.string(),
  pixivok: z.boolean(),
  twitter: z.string(),
  twitterok: z.boolean(),
  musicgenre: z.string(),
  bookcharacter: z.string(),
  bookgenre: z.string(),
  bookseijingenre: z.string(),
  goodsgenre: z.string(),
  date: z.string(),
});

// zodによりバリデーションしてエラーを返す項目をtrue、バリデーションしない項目をundefinedとする。
const ValidateItems = FormSchema.pick({
  gattainum: undefined,
  friendCode: undefined,
  circlename: undefined,
  circlenamekana: true,
  penname: true,
  pennamekana: true,
  mediacode: true,
  sakuhincode: true,
  adult: true,
  hosoku: undefined,
  web: undefined,
  webok: undefined,
  pixiv: undefined,
  pixivok: undefined,
  twitter: undefined,
  twitterok: undefined,
  musicgenre: undefined,
  bookcharacter: undefined,
  bookgenre: undefined,
  bookseijingenre: undefined,
  goodsgenre: undefined,
});

export async function updateInvoice(id: string, prevState: State, formData: FormData) {
  const validatedFields = ValidateItems.safeParse({
    gattainum: formData.get('gattainum'),
    friendCode: formData.get('friendCode'),
    circlename: formData.get('circlename'),
    circlenamekana: formData.get('circlenamekana'),
    penname: formData.get('penname'),
    pennamekana: formData.get('pennamekana'),
    mediacode: formData.get('mediacode'),
    sakuhincode: formData.get('sakuhincode'),
    adult: formData.get('adult'),
    hosoku: formData.get('hosoku'),
    web: formData.get('web'),
    webok: formData.get('webok'),
    pixiv: formData.get('pixiv'),
    pixivok: formData.get('pixivok'),
    twitter: formData.get('twitter'),
    twitterok: formData.get('twitterok'),
    musicgenre: formData.get('musicgenre'),
    bookcharacter: formData.get('bookcharacter'),
    bookgenre: formData.get('bookgenre'),
    bookseijingenre: formData.get('bookseijingenre'),
    goodsgenre: formData.get('goodsgenre'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '入力項目にエラーがあるため更新できません。',
    };
  }
  const validatedData = validatedFields.data;

  try {
    await sql`
      UPDATE circles
      SET gattainum       = ${validatedData.gattainum},
          "friendCode"    = ${validatedData.friendCode},
          circlename      = ${validatedData.circlename},
          circlenamekana  = ${validatedData.circlenamekana},
          penname         = ${validatedData.penname},
          pennamekana     = ${validatedData.pennamekana},
          sakuhincode     = ${validatedData.sakuhincode},
          mediacode       = ${validatedData.mediacode},
          adult           = ${(validatedData.adult === 'true')},
          hosoku          = ${validatedData.hosoku},
          web             = ${validatedData.web},
          webok           = ${validatedData.webok},
          pixiv           = ${validatedData.pixiv},
          pixivok         = ${validatedData.pixivok},
          twitter         = ${validatedData.twitter},
          twitterok       = ${validatedData.twitterok},
          musicgenre      = ${validatedData.musicgenre},
          bookcharacter   = ${validatedData.bookcharacter},
          bookgenre       = ${validatedData.bookgenre},
          bookseijingenre = ${validatedData.bookseijingenre},
          goodsgenre      = ${validatedData.goodsgenre}
      WHERE id = ${id}
    `;
  } catch (error) {
    return {message: 'データベース側でエラーが発生したため、データを更新できませんでした。'};
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

const CreateInvoice = FormSchema.omit({id: true, date: true});

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const {customerId, amount, status} = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  await sql`DELETE
            FROM invoices
            WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}
