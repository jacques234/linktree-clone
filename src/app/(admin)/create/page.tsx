import { NamePage, Preview, TabsSettings } from "@/components";

export default function CreatePage() {
  return (
    <div className="flex w-full flex-col sm:flex-col xl:flex-row">
      <div className="basis-3/5  px-1 py-1 sm:px-1 sm:py-1 xl:px-28 xl:py-10">
        <NamePage />
        <TabsSettings />
      </div>
      <div className="basis-2/5">
        <Preview />
      </div>
    </div>
  );
}