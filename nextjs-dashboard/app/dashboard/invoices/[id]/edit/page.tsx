import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import {fetchInvoiceById, fetchMediaCodes, fetchSakuhinCodes} from '@/app/lib/data';
import {notFound} from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [circle, mediacodes, sakuhincodes] = await Promise.all([
    fetchInvoiceById(id),
    fetchMediaCodes(),
    fetchSakuhinCodes()
  ]);
  if (!circle) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {label: 'Invoices', href: '/dashboard/invoices'},
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form circle={circle} mediacodes={mediacodes} sakuhincodes={sakuhincodes}/>
    </main>
  );
}
