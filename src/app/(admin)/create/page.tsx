import { NamePage, TabsSettings } from "@/components";

export default function CreatePage() {
  return (
    <div className="flex w-full">
      <div className="basis-3/5 px-28 py-10">
        <NamePage />
        <TabsSettings />
      </div>
      <div className="basis-2/5 bg-amber-700">
        d
      </div>
    </div>
  );
}