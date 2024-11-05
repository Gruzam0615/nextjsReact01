"use client";

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAtom } from 'jotai';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { searchKeywordAtom, searchResultAtom } from './primitiveAtoms';
import { SearchItemHistoryFromAuction, SearchItemListFromAuction } from '../api/routes';

export default function Search({ placeholder, queryname }: { placeholder: string, queryname: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [ search, setSearch ] = useAtom(searchKeywordAtom);
    const [ searchResult, setSearchResult ] = useAtom(searchResultAtom);

    function handleSearch(term: string, queryname: string) {
        console.log(`term: ${term}`);
        const params = new URLSearchParams(searchParams);
        if(term) {
            params.set(queryname, term);
        } 
        else {
            params.delete(queryname);
        }
        replace(`${pathname}?${params.toString()}`);
        setSearch(term);
    }

    async function inputEnter(key: string) {
        if (key === "Enter") {
            const data = await SearchItemListFromAuction(search, "").then(res => res.json())
            // const result = data.data.auction_history;
            console.log(data);
            if(data.data.auction_item) {
                setSearchResult(data.data.auction_item)
            }
            else if(data.data.error.name == "OPENAPI00004") {
                setSearchResult([]);
            }
            else {
                setSearchResult([]);
            }

            // setSearchResult(data);
        }
        // else if(key === "Escape") {
        // }
    }

    function touchXMarkIcon() {
    }

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 bg-foreground hover:bg-[#383838] dark:bg-background dark:hover:bg-[#222]"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value, queryname);
                }}
                defaultValue={searchParams.get(queryname)?.toString()}
                onKeyDown={(e) => {
                    inputEnter(e.code);
                }}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:peer-focus:text-white" />
            <XMarkIcon className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:peer-focus:text-white" 
                onClick={() => { touchXMarkIcon() }}
            />
        </div>
    );
}