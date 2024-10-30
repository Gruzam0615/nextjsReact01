"use client"

import { useState, useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder, queryname }: { placeholder: string, queryname: string }) {

    const searchInput = useRef<HTMLInputElement>(null);
    const [ searchInputValue, setSearchInputValue ] = useState("");
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string, queryname: string) {
        console.log(`term: ${term}`);
        setSearchInputValue(term);
        const params = new URLSearchParams(searchParams);
        if(term) {
            params.set(queryname, term);
        } 
        else {
            params.delete(queryname);
        }
        replace(`${pathname}?${params.toString()}`);
    }

    function inputEnter(key: string) {
        if(key === "Enter") {
            alert("Enter");
        }
        else if(key === "esc") {
            alert("ESC");
        }
    }

    function touchXMarkIcon() {
        alert("Clicked");
        setSearchInputValue("");
    }

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                ref={searchInput}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 bg-foreground hover:bg-[#383838] dark:bg-background dark:hover:bg-[#222]"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value, queryname);
                }}
                // defaultValue={searchParams.get(queryname)?.toString()}
                value={searchInputValue}
                onKeyDown={(e) => {
                    inputEnter(e.key);
                }}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            <XMarkIcon className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:peer-focus:text-white" 
                onClick={() => { touchXMarkIcon() }}
            />
        </div>
    );
}