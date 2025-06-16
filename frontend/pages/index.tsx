import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [tab, setTab] = useState("posts");

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      {/* 左カラム：テキスト */}
      <div className="w-1/2 flex flex-col justify-center items-start px-16 space-y-8">
        <div>
          <h1 className="text-5xl font-bold text-green-700 mb-2">○○サークル</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            私たちは毎週金曜に活動している大学の○○サークルです。
            <br />
            楽しく一緒に学び、成長しましょう！
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold bg-green-500 text-white px-4 py-2 inline-block rounded">
            学びは航海、○○サークルは羅針盤！
          </p>
        </div>
        <p className="text-sm text-gray-400 tracking-widest">
          Full support for your dreams!
        </p>
      </div>

      {/* 右カラム：ロゴ＋ナビゲーション */}
      <div className="w-1/2 relative bg-gray-100 flex items-center justify-center">
        {/* ロゴ */}
        <motion.img
          src="スクリーンショット 2025-06-13 13.36.07.png"
          alt="ロゴ"
          className="w-72 h-72 object-contain drop-shadow-2xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* ナビゲーション（右上） */}
        <nav className="absolute top-6 right-10 flex space-x-6 text-gray-700 font-medium">
          <button
            onClick={() => setTab("posts")}
            className={`hover:text-green-600 ${
              tab === "posts" ? "underline text-green-700 font-semibold" : ""
            }`}
          >
            投稿一覧
          </button>
          <button
            onClick={() => setTab("schedule")}
            className={`hover:text-green-600 ${
              tab === "schedule" ? "underline text-green-700 font-semibold" : ""
            }`}
          >
            活動日程
          </button>
          <button
            onClick={() => setTab("contact")}
            className={`hover:text-green-600 ${
              tab === "contact" ? "underline text-green-700 font-semibold" : ""
            }`}
          >
            お問い合わせ
          </button>
          <Link
            href="/login"
            className="text-red-600 hover:underline font-semibold"
          >
            管理者ログイン
          </Link>
        </nav>
      </div>

      {/* タブ内容 */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[80%] bg-white border rounded-lg shadow p-6 text-center">
        {tab === "posts" && <p>ここに投稿一覧を表示予定です。</p>}
        {tab === "schedule" && <p>活動日程：毎週金曜18:00〜＠A302</p>}
        {tab === "contact" && <p>お問い合わせは Instagram またはメールへ。</p>}
      </div>
    </div>
  );
}