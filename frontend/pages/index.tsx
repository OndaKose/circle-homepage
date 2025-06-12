import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-600">○○サークル</h1>
        <p className="text-lg">
          私たちは毎週金曜に活動している大学の○○サークルです。楽しく一緒に学びましょう！
        </p>

       <div className="flex justify-center space-x-6">
        <Link href="/schedule" className="text-blue-500 underline">
          活動日程
        </Link>
        <Link href="/posts" className="text-blue-500 underline">
          投稿一覧
        </Link>
        <Link href="/contact" className="text-blue-500 underline">
          お問い合わせ
        </Link>
        <Link href="/login" className="text-red-500 underline font-semibold">
          管理者ログイン
        </Link>
      </div>
      </div>
    </div>
  );
}