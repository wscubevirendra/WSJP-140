function PageHeader({ title }) {
  return (
    <div className="mb-6 flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-5">

      {/* Page Title */}
      <h2 className="text-lg font-semibold text-gray-900">
        {title}
      </h2>

      {/* Breadcrumb */}
      <div className="flex items-center gap-3 text-sm">
        <span className="text-gray-600">Home</span>

        <span className="h-2 w-2 rounded-full bg-[#155e52]"></span>

        <span className="rounded-xl bg-[#155e52]/10 px-3 py-2 text-[#155e52]">
          {title}
        </span>
      </div>

    </div>
  );
}

export default PageHeader;