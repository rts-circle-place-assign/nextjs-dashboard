'use client';

import Image from "next/image";
import {Circle, Media, Sakuhin} from '@/app/lib/definitions';
import {
  ChatBubbleBottomCenterTextIcon,
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  MusicalNoteIcon,
  UserCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {Button} from '@/app/ui/button';
import {State, updateInvoice} from '@/app/lib/actions';
import React, {useActionState} from "react";
import {Switch} from "@heroui/switch";
import {Radio, RadioGroup} from "@heroui/radio";
import styles from "@/app/ui/cut.module.css";

export default function EditInvoiceForm({
                                          circle, mediacodes, sakuhincodes
                                        }: {
  circle: Circle;
  mediacodes: Media[]
  sakuhincodes: Sakuhin[]
}) {
  const [isWebSelected, setIsWebSelected] = React.useState(circle.webok);
  const [isTwitterSelected, setIsTwitterSelected] = React.useState(circle.twitterok);
  const [isPixivSelected, setIsPixivSelected] = React.useState(circle.pixivok);
  const [selected, setSelected] = React.useState(circle.adult ? 'true' : 'false');
  const initialState: State = {message: null, errors: {}}
  console.log(circle.adult)
  const updateInvoiceWithId = updateInvoice.bind(null, circle.id);
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);
  console.log(state)
  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* サークル基本情報 */}
        <div className="bg-emerald-200 rounded-2xl p-4">
          <h2 className="mb-4">サークル基本情報</h2>
          {/* サークル名・ペンネーム・サクカ */}
          <div className="md:flex justify-between gap-2">
            {/* サークル名・ペンネーム */}
            <div className="md:flex flex-col">
              {/* サークル名・サークル名カナ */}
              <div className="flex gap-1">
                {/* サークル名 */}
                <div className="mb-2">
                  <label htmlFor="circlename" className="mb-1 block text-sm font-medium">
                    サークル名
                  </label>
                  <div className="relative mt-1 rounded-md">
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
                <div className="mb-2">
                  <label htmlFor="circlenamekana" className="mb-1 block text-sm font-medium">
                    サークル名カナ
                  </label>
                  <div className="relative mt-1 rounded-md">
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

              {/* ペンネーム・ペンネームカナ */}
              <div className="flex gap-1">
                {/* ペンネーム */}
                <div className="mb-2">
                  <label htmlFor="penname" className="mb-1 block text-sm font-medium">
                    ペンネーム
                  </label>
                  <div className="relative mt-1 rounded-md">
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
                      <UserCircleIcon
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
                <div className="mb-2">
                  <label htmlFor="pennamekana" className="mb-1 block text-sm font-medium">
                    ペンネームカナ
                  </label>
                  <div className="relative mt-1 rounded-md">
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
                      <UserCircleIcon
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

              {/*合体・連結情報*/}
              <div className="flex gap-1">
                {/*なかよしコード*/}
                <div className="mb-2">
                  <label htmlFor="friendCode" className="mb-1 block text-sm font-medium">
                    なかよしコード
                  </label>
                  <div className="relative mt-1 rounded-md">
                    <div className="relative">
                      <input
                        id="friendCode"
                        name="friendCode"
                        type="text"
                        defaultValue={circle.friendCode}
                        placeholder="なかよしコードを入力してください"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      />
                      <UserCircleIcon
                        className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                    </div>
                  </div>
                </div>
                {/*合体先サークル*/}
                <div className="mb-2">
                  <label htmlFor="gattainum" className="mb-1 block text-sm font-medium">
                    合体先サークル
                  </label>
                  <div className="relative mt-1 rounded-md">
                    <div className="relative">
                      <input
                        id="gattainum"
                        name="gattainum"
                        type="text"
                        defaultValue={circle.gattainum}
                        placeholder="なかよしコードを入力してください"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      />
                      <UserCircleIcon
                        className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*サクカ*/}
            <div>
              <Image
                src={`https://${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_ID!}.supabase.co/storage/v1/object/public/RTS22_cut/${circle.cutid}.png`}
                className={`mr-2 rounded-md ${styles.editCut}`}
                fill
                alt={`${circle.circlename}のサークルカット画像`}/>
            </div>
          </div>
        </div>

        {/*各種リンク*/}
        <div className="bg-blue-200 rounded-2xl p-4 mt-4">
          <h3 className="mb-2">各種リンク</h3>
          {/* web/webok */}
          <div className="flex gap-2 mb-4">
            {/* web */}
            <div>
              <label htmlFor="web" className="mb-2 block text-sm font-medium">
                WebURL
                <a href={circle.web} target="_blank" rel="noopener noreferrer"
                   className="ml-2 text-blue-500"
                >URLテスト</a>
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="web"
                    name="web"
                    type="text"
                    defaultValue={circle.web}
                    placeholder="WebURLを入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                  <a href={circle.web === 'http://' ? '' : circle.web} target="_blank" rel="noopener noreferrer">
                    <GlobeAltIcon
                      className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                  </a>
                </div>
              </div>
            </div>
            {/* webok */}
            <div>
              <label htmlFor="webok" className="mb-2 block text-sm font-medium">
                WebURL公開
              </label>
              <Switch isSelected={isWebSelected} onValueChange={setIsWebSelected} id="webok"
                      color={isWebSelected ? "success" : "danger"} size="lg"
                      startContent={<CheckIcon className="h-4 w-4"/>}
                      endContent={<XMarkIcon className="h-4 w-4"/>}>
                <input type="radio" value={String(isWebSelected)} name="webok" className="hidden"/>
                {isWebSelected ? "OK" : "NG"}
              </Switch>
            </div>
          </div>
          {/* twitter/twitterok */}
          <div className="flex gap-2 mb-4">
            {/* twitter */}
            <div>
              <label htmlFor="twitter" className="mb-2 block text-sm font-medium">
                TwitterID
                <a href={`https://twitter.com/${circle.twitter}`} target="_blank" rel="noopener noreferrer"
                   className="ml-2 text-blue-500"
                >URLテスト</a>
              </label>
              <div className="relative mt-2 rounded-md ">
                <div className="relative">
                  <input
                    id="twitter"
                    name="twitter"
                    type="text"
                    defaultValue={circle.twitter}
                    placeholder="TwitterのIdを入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                  <Image
                    src="/twitter-black.svg"
                    alt="Twitterロゴ"
                    width={10}
                    height={10}
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 block mr-2"/>
                </div>
              </div>
            </div>
            {/* twitterok */}
            <div>
              <label htmlFor="webok" className="mb-2 block text-sm font-medium">
                Twitter公開
              </label>
              <Switch isSelected={isTwitterSelected} onValueChange={setIsTwitterSelected} id="twitterok"
                      color={isTwitterSelected ? "success" : "danger"} size="lg"
                      startContent={<CheckIcon className="h-4 w-4"/>}
                      endContent={<XMarkIcon className="h-4 w-4"/>}>
                <input type="radio" value={String(isTwitterSelected)} name="twitterok" className="hidden"/>
                {isTwitterSelected ? "OK" : "NG"}
              </Switch>
            </div>
          </div>
          {/* pixiv/pixivok */}
          <div className="flex gap-2 mb-4">
            {/* pixiv */}
            <div>
              <label htmlFor="pixiv" className="mb-2 block text-sm font-medium">
                PixivID
                <a href={`https://www.pixiv.net/users/${circle.pixiv}`} target="_blank" rel="noopener noreferrer"
                   className="ml-2 text-blue-500"
                >URLテスト</a>
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="pixiv"
                    name="pixiv"
                    type="text"
                    defaultValue={circle.pixiv}
                    placeholder="PixivのIdを入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                  <Image
                    src="/pixiv.svg"
                    alt="Pixivロゴ"
                    width={10}
                    height={10}
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
              </div>
            </div>
            {/* pixivok */}
            <div>
              <label htmlFor="pixivok" className="mb-2 block text-sm font-medium">
                Pixiv公開
              </label>
              <Switch isSelected={isPixivSelected} onValueChange={setIsPixivSelected} id="pixivok"
                      color={isPixivSelected ? "success" : "danger"} size="lg"
                      startContent={<CheckIcon className="h-4 w-4"/>}
                      endContent={<XMarkIcon className="h-4 w-4"/>}>
                <input type="radio" value={String(isPixivSelected)} name="pixivok" className="hidden"/>
                {isPixivSelected ? "OK" : "NG"}
              </Switch>
            </div>
          </div>
        </div>

        {/*配置希望*/}
        <div className="bg-amber-200 rounded-2xl p-4 mt-4">
          <h2 className="mb-4">配置希望</h2>
          {/*成年向け有無・メディアコード・作品コード*/}
          <div className="md:flex gap-2 mb-4">
            {/* 成年向け頒布物有無 */}
            <fieldset className="mb-3">
              <legend className="mb-1 block text-sm font-medium">
                成年向け頒布物
              </legend>
              <div className="rounded-md border border-gray-200 bg-white px-[14px] py-2">
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <RadioGroup value={selected} onValueChange={setSelected} orientation="horizontal">
                      <Radio value="false" className="">
                        <label
                          htmlFor="noAdult"
                          className="flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white mr-2"
                        >
                          なし <CheckIcon className="h-4 w-4"/>
                        </label>
                      </Radio>
                      <Radio value="true">
                        <label
                          htmlFor="Adult"
                          className="flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                        >
                          あり <ClockIcon className="h-4 w-4"/>
                        </label>
                      </Radio>
                    </RadioGroup>
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
            <div className="mb-3">
              <label htmlFor="mediacode" className="mb-1 block text-sm font-medium">
                メディアコード
              </label>
              <div className="relative">
                <select
                  id="mediacode"
                  name="customerId"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-gray-500"
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
            <div className="mb-3">
              <label htmlFor="sakuhincode" className="mb-1 block text-sm font-medium">
                作品コード
              </label>
              <div className="relative">
                <select
                  id="sakuhincode"
                  name="sakuhincode"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-gray-500"
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
          {/*10番台*/}
          <div className="md:flex gap-2 mb-4">
            {/* キャラクター・CP */}
            <div className="mb-3">
              <label htmlFor="bookcharacter" className="mb-1 block text-sm font-medium">
                キャラクター・CP
              </label>
              <div className="relative mt-1 rounded-md">
                <div className="relative">
                  <input
                    id="bookcharacter"
                    name="bookcharacter"
                    type="text"
                    defaultValue={circle.bookcharacter}
                    placeholder="サークル名を入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                  <CurrencyDollarIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
              </div>
            </div>
            {/* 本ジャンル（成年向けなし）*/}
            <div className="mb-3">
              <label htmlFor="bookgenre" className="mb-1 block text-sm font-medium">
                本ジャンル（成年向けなし）
              </label>
              <div className="relative mt-1 rounded-md">
                <div className="relative">
                  <input
                    id="bookgenre"
                    name="bookgenre"
                    type="text"
                    defaultValue={circle.bookgenre}
                    placeholder="本ジャンル（成年向けなし）を入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                  <CurrencyDollarIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
              </div>
            </div>
            {/* 本ジャンル（成年向けあり）*/}
            <div className="mb-3">
              <label htmlFor="bookseijingenre" className="mb-1 block text-sm font-medium">
                本ジャンル（成年向けあり）
              </label>
              <div className="relative mt-1 rounded-md">
                <div className="relative">
                  <input
                    id="bookseijingenre"
                    name="bookseijingenre"
                    type="text"
                    defaultValue={circle.bookseijingenre}
                    placeholder="成年向け頒布物「あり」の場合は本ジャンル（成年向けあり）を入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                  <CurrencyDollarIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex gap-2 mb-4">
            {/* グッズジャンル*/}
            <div className="mb-3">
              <label htmlFor="goodsgenre" className="mb-1 block text-sm font-medium">
                グッズジャンル
              </label>
              <div className="relative mt-1 rounded-md">
                <div className="relative">
                  <input
                    id="goodsgenre"
                    name="goodsgenre"
                    type="text"
                    defaultValue={circle.goodsgenre}
                    placeholder="メディアコードが30番台の場合はグッズジャンルを入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                  <CurrencyDollarIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
              </div>
            </div>
            {/* 音楽ジャンル*/}
            <div className="mb-3">
              <label htmlFor="musicsgenre" className="mb-1 block text-sm font-medium">
                音楽ジャンル
              </label>
              <div className="relative mt-1 rounded-md">
                <div className="relative">
                  <input
                    id="musicgenre"
                    name="musicgenre"
                    type="text"
                    defaultValue={circle.musicgenre}
                    placeholder="メディアコードが20番の場合は音楽ジャンルを入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                  <MusicalNoteIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
              </div>
            </div>
          </div>
          {/* 配置希望の補足説明 */}
          <div className="mb-4">
            <label htmlFor="hosoku" className="mb-2 block text-sm font-medium">
              配置希望の補足説明
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                  <textarea
                    id="hosoku"
                    name="hosoku"
                    defaultValue={circle.hosoku}
                    placeholder="配置希望の補足説明を入力してください"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                <ChatBubbleBottomCenterTextIcon
                  className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
              </div>
            </div>
          </div>
        </div>

        {/*頒布物情報*/}
        <div className="bg-pink-200 rounded-2xl p-4 mt-4">
          <h2 className="mb-4">頒布物情報</h2>
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
