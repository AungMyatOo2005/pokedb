import React, { useState } from "react";
import { UseAppContext } from "../hooks";
import { NavLink, useNavigate } from "react-router-dom";

const Pagination = ({ currentPage }) => {
  const { state } = UseAppContext();
  if (!state) return;
  const totalPage = Math.floor(state.count / state.itemLimit) + 1;
  const startPage = currentPage - 2 < 1 ? 1 : currentPage - 2;
  const endPage = currentPage + 2 > totalPage ? totalPage : currentPage + 2;

  const page = (num = startPage) =>
    num > endPage ? [] : [num].concat(page(num + 1));
  const navigator = useNavigate();
  return (
    <div className="flex items-center justify-center py-10 gap-2">
      {currentPage > 1 && (
        <>
          <button
            className="border border-[#0496C7] w-[30px] h-[30px] flex items-center justify-center hover:bg-[#5353cc31] font-bold font-roboto text-[18px]"
            onClick={() => {
              navigator(`/page/${1}`);
              scrollTo(0, 0);
            }}
          >
            <span>&lt;</span>
            <span>&lt;</span>
          </button>
          <button
            className="border border-[#0496C7] w-[30px] h-[30px] flex items-center justify-center hover:bg-[#5353cc31] font-bold font-roboto text-[18px]"
            onClick={() => {
              navigator(`/page/${currentPage - 1}`);
              scrollTo(0, 0);
            }}
          >
            <span>&lt;</span>
          </button>
        </>
      )}
      {page().map((num) => {
        return num === currentPage ? (
          <p
            className="border border-[#0496C7] w-[30px] h-[30px] flex items-center justify-center bg-[#0496C7] font-roboto text-[18px]"
            key={num}
            onClick={() => scrollTo(0, 0)}
          >
            {num}
          </p>
        ) : (
          <NavLink
            to={`/page/${num}`}
            key={num}
            className="border border-[#0496C7] w-[30px] h-[30px] flex items-center justify-center hover:bg-[#5353cc31] font-roboto text-[18px]"
            onClick={() => scrollTo(0, 0)}
          >
            {num}
          </NavLink>
        );
      })}
      {currentPage !== totalPage && (
        <>
          <button
            className="border border-[#0496C7] w-[30px] h-[30px] flex items-center justify-center hover:bg-[#5353cc31] font-bold font-roboto text-[18px]"
            onClick={() => {
              navigator(`/page/${currentPage + 1}`);
              scrollTo(0, 0);
            }}
          >
            <span>&gt;</span>
          </button>
          <button
            className="border border-[#0496C7] w-[30px] h-[30px] flex items-center justify-center hover:bg-[#5353cc31] font-bold font-roboto text-[18px]"
            onClick={() => {
              navigator(`/page/${totalPage}`);
              scrollTo(0, 0);
            }}
          >
            <span>&gt;</span>
            <span>&gt;</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
