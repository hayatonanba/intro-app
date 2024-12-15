import { db } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore/lite"

export async function blogPage() {
	//クライアントサイドでしか動かんけど、ここはservr compだからserver側でレンダリングされるから使えない。(supabaseはいらない)
	//server側とやりとりするための別のセットアップが必要。
	const querySnapShot = await getDocs(collection(db, 'blogs'))
	const blogs = querySnapShot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}))
  return (
	<div>
		<h1>ブログ一覧</h1>
		{blogs.map(( blog ) => (
			<div key={blog.id}>
				<h2>{blog.title}</h2>
				<p>{blog.content}</p>
			</div>
		))}
	</div>
  )
}

//クライアントサイドに仕様がよってるからサーバーサイドで詳細にコード書くんだったらもう使う必要はないし相性も悪い
//元来reactとかそういうクライアントのもの（がっつりフロント）と合わせて使う
//server comp標準のnextやorm等に片足突っ込んでapiがどうとかだったり詳細にデータベースを制御するなら非推奨
//↑そーゆーのやるんだったら独自記法が多くてロックされるからsupabaseの方がマシよね
