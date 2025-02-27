import Image from 'next/image';
import {DeleteInvoice, UpdateInvoice} from '@/app/ui/invoices/buttons';
import {fetchFilteredCircles} from '@/app/lib/data';
import styles from '@/app/ui/cut.module.css'
import IsAdult from "@/app/ui/invoices/status";

export default async function InvoicesTable({
                                              query,
                                              currentPage,
                                            }: {
  query: string;
  currentPage: number;
}) {
  const circles = await fetchFilteredCircles(query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {circles?.map((circle) => (
              <div
                key={circle.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={`https://${process.env.SUPABASE_IMAGE_ID!}.supabase.co/storage/v1/object/public/RTS22_cut/${circle.cutid}.png`}
                        className={`mr-2 rounded-md ${styles.image}`}
                        fill
                        alt={`${circle.circlename}'s profile picture`}
                      />
                      <p className="text-xl">{circle.circlename}</p>
                    </div>
                    <p className="text-sm text-gray-500">{circle.penname}</p>
                  </div>
                  <IsAdult adult={circle.adult}/>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="font-medium">
                      {circle.mediacode}（{circle.media}）
                    </p>
                    <p>{circle.sakuhincode}（{circle.sakuhin}）</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={circle.id}/>
                    <DeleteInvoice id={circle.id}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                サークルカット
              </th>
              <th>
                サークル名
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                ペンネーム
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Amount
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Date
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Status
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
            </thead>
            <tbody className="bg-white">
            {circles?.map((circle) => (
              <tr
                key={circle.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`https://${process.env.SUPABASE_IMAGE_ID!}.supabase.co/storage/v1/object/public/RTS22_cut/${circle.cutid}.png`}
                      className={`rounded-md ${styles.image}`}
                      fill
                      alt={`${circle.circlename}'s profile picture`}
                    />

                  </div>
                </td>
                <td>
                  <p>{circle.circlename}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {circle.penname}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {circle.mediacode}<br/>({circle.media})
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {circle.sakuhincode}<br/>({circle.sakuhin})
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <IsAdult adult={circle.adult}/>
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <UpdateInvoice id={circle.id}/>
                    <DeleteInvoice id={circle.id}/>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
