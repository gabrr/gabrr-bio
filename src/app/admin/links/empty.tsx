export default function EmptyLinks() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
      <svg
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="mb-4 text-gray-300"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 15.75h-2A2.25 2.25 0 0 1 4 13.5v-3A2.25 2.25 0 0 1 6.25 8.25h2m7.5 7.5h2A2.25 2.25 0 0 0 20 13.5v-3A2.25 2.25 0 0 0 17.75 8.25h-2m-7.5 0V6.75A2.25 2.25 0 0 1 8.25 4.5h7.5a2.25 2.25 0 0 1 2.25 2.25v1.5m-12 7.5v1.5A2.25 2.25 0 0 0 8.25 19.5h7.5a2.25 2.25 0 0 0 2.25-2.25v-1.5"
        />
      </svg>
      <h2 className="text-lg font-semibold mb-2">No links found</h2>
      <p className="text-sm">You haven't added any links yet. Click "Add Link" to get started.</p>
    </div>
  );
}
