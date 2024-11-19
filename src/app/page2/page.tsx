"use client";
import { useEffect, useState } from "react";

import Test2 from "../api/test2";
import { test2b } from "../api/route";
import Table from "./table";
import { useAtom } from "jotai";
import { server_name_atom } from "../utils/atoms/atoms";

export default function Page2() {

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-md text-left">
                <Table />               
            </table>
        </div>
    );
}