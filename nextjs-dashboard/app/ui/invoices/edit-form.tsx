'use client';

import {Circle, Media, Sakuhin} from '@/app/lib/definitions';
import {CheckIcon, ClockIcon, CurrencyDollarIcon, UserCircleIcon,} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {Button} from '@/app/ui/button';
import {State, updateInvoice} from '@/app/lib/actions';
import {useActionState} from "react";

export default function EditInvoiceForm({
                                          circle, mediacodes, sakuhincodes
                                        }: {
  circle: Circle;
  mediacodes: Media[]
  sakuhincodes: Sakuhin[]
}) {
  const initialState: State = {message: null, errors: {}}
  const updateInvoiceWithId = updateInvoice.bind(null, circle.id);
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);
  console.log(state)
  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="bg-emerald-200 p-4">
          <h2 className="mb-2">サークル基本情報</h2>
          <div className="flex gap-1">
            {/* サークル名 */}
            <div className="mb-4">
              <label htmlFor="circlename" className="mb-2 block text-sm font-medium">
                サークル名
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="circlename"
                    name="circlename"
                    type="text"
                    defaultValue={circle.circlename}
                    placeholder="サークル名を入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="circlename-error"
                  />
                  <CurrencyDollarIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
                <div id="circlename-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.circlename && state.errors.circlename.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                  ))}
                </div>
              </div>
            </div>
            {/* サークル名カナ */}
            <div className="mb-4">
              <label htmlFor="circlenamekana" className="mb-2 block text-sm font-medium">
                サークル名カナ
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="circlenamekana"
                    name="circlenamekana"
                    type="text"
                    defaultValue={circle.circlenamekana}
                    placeholder="サークル名カナを入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="circlenamekana-error"
                  />
                  <CurrencyDollarIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
                <div id="circlenamekana-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.circlenamekana && state.errors.circlenamekana.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            {/* ペンネーム */}
            <div className="mb-4">
              <label htmlFor="penname" className="mb-2 block text-sm font-medium">
                ペンネーム
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="penname"
                    name="penname"
                    type="text"
                    defaultValue={circle.penname}
                    placeholder="ペンネームを入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="penname-error"
                  />
                  <CurrencyDollarIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
                <div id="penname-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.penname && state.errors.penname.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                  ))}
                </div>
              </div>
            </div>
            {/* ペンネームカナ */}
            <div className="mb-4">
              <label htmlFor="pennamekana" className="mb-2 block text-sm font-medium">
                ペンネームカナ
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="pennamekana"
                    name="pennamekana"
                    type="text"
                    defaultValue={circle.pennamekana}
                    placeholder="ペンネームカナを入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="pennamekana-error"
                  />
                  <CurrencyDollarIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
                <div id="pennamekana-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.pennamekana && state.errors.pennamekana.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            成年向け頒布物
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="noAdult"
                  name="adult"
                  type="radio"
                  value="false"
                  defaultChecked={!circle.adult}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="adult-error"
                />
                <label
                  htmlFor="adult"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  なし <CheckIcon className="h-4 w-4"/>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="Adult"
                  name="adult"
                  type="radio"
                  value="true"
                  defaultChecked={circle.adult}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="adult-error"
                />
                <label
                  htmlFor="Adult"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  あり <ClockIcon className="h-4 w-4"/>
                </label>
              </div>
            </div>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.adult && state.errors.adult.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
            ))}
          </div>
        </fieldset>

        {/* メディアコード */}
        <div className="mb-4">
          <label htmlFor="mediacode" className="mb-2 block text-sm font-medium">
            メディアコード
          </label>
          <div className="relative">
            <select
              id="mediacode"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={circle.mediacode}
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                メディアコードを選んでください
              </option>
              {mediacodes.map((mediaSet) => (
                <option key={mediaSet.mediacode} value={mediaSet.mediacode}>
                  {mediaSet.mediacode}（{mediaSet.media}）
                </option>
              ))}
            </select>
            <UserCircleIcon
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.mediacode &&
              state.errors.mediacode.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* 作品コード */}
        <div className="mb-4">
          <label htmlFor="sakuhincode" className="mb-2 block text-sm font-medium">
            作品コード
          </label>
          <div className="relative">
            <select
              id="sakuhincode"
              name="sakuhincode"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={circle.sakuhincode}
              aria-describedby="sakuhin-error"
            >
              <option value="" disabled>
                作品コードを選んでください
              </option>
              {sakuhincodes.map((sakuhinSet) => (
                <option key={sakuhinSet.sakuhincode} value={sakuhinSet.sakuhincode}>
                  {sakuhinSet.sakuhincode}（{sakuhinSet.sakuhin}）
                </option>
              ))}
            </select>
            <UserCircleIcon
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
          </div>
          <div id="sakuhin-error" aria-live="polite" aria-atomic="true">
            {state.errors?.sakuhincode &&
              state.errors.sakuhincode.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
