import ComicView from "@/components/comic-view/comic-view";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const queryId = router.query.id;

  return queryId && <ComicView id={Number(queryId)} />;
}
