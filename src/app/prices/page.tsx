import type { Metadata } from "next";
import { fetchPriceServices, fetchPriceTree } from "@/lib/price-api";
import PricesViewer from "./PricesViewer";

export const metadata: Metadata = {
  title: "Прейскурант | Альтамед Голицыно",
  robots: { index: false, follow: false },
};

export default async function PricesPage() {
  const [treeResult, servicesResult] = await Promise.all([
    fetchPriceTree(),
    fetchPriceServices(),
  ]);

  const initialSource =
    treeResult.source === "memory"
      ? servicesResult.source
      : treeResult.source;

  return (
    <PricesViewer
      initialTree={treeResult.data}
      initialServices={servicesResult.data}
      initialSource={initialSource}
    />
  );
}
