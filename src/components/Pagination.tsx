import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

const Pagination = () => {
  return (
    <div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white pt-5">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
          <nav
            aria-label="Pagination"
            className="isolate inline-flex gap-1 -space-x-px rounded-md shadow-xs"
          >
            <a
              href="#"
              className="text-b relative inline-flex items-center rounded-md px-2 py-2 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">First Page</span>
              <ChevronsLeft aria-hidden="true" className="size-5" />
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-md px-2 py-2 text-black ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft aria-hidden="true" className="size-5" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="bg-primary focus-visible:outline-primary relative z-10 inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center rounded-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-md px-2 py-2 text-black ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRight aria-hidden="true" className="size-5" />
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-md px-2 py-2 text-black ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Last</span>
              <ChevronsRight aria-hidden="true" className="size-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
