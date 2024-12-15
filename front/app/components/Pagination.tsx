"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

export function PaginationComponent(props: any) {
  // console.log("PaginationComponent currentPages:", props.currentPage);
  // console.log("PaginationComponent totalPages:", props.totalPages);

  const [currentPage, setCurrentPage] = useState(props.currentPage);
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      {/* <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons /> */}
      <Pagination currentPage={currentPage} totalPages={props.totalPages} onPageChange={onPageChange} showIcons />
    </div>
  );
}