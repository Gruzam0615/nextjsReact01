"use client";

import { server_name_atom } from "@/app/utils/atoms/atoms";
import { useEffect, useState } from "react";
import { test2b } from "@/app/api/route";

export default function Table() {
    const server_name_list = ["류트", "만돌린", "울프", "하프"];
    const [server_name, set_server_name] = useState("류트");
    const [result, setResult] = useState([]);

    function onSelectHandler(e: any) {
        console.log("Before onSelectHandler server_name:", server_name);
        set_server_name(e.target.value);
        console.log("After onSelectHandler server_name:", server_name);
    }
    // horn_bugle_world_history
    // const data = await test2b(server_name);
    // console.log(data.horn_bugle_world_history ? true : false);

    useEffect(() => {
        async function getData() {
            let res = await test2b(server_name);
            if (res.horn_bugle_world_history) {
                setResult(res.horn_bugle_world_history)
            }
        }
        getData();
    }, [server_name])

    return (
        <>
            <thead>
                <tr>
                    <th>작성자</th>
                    <th>내용</th>
                    <th>발신일</th>
                    <th>
                        <label htmlFor="server_name">서버: </label>
                        <select id="server_name" value={server_name} onChange={onSelectHandler}>
                            {
                                server_name_list?.map(item => {
                                    return <option key={item} value={item}>{item}</option>
                                })
                            }
                        </select>
                    </th>
                </tr>
            </thead>
            <tbody>
                {result.map((item: any, index: number) => {
                    return (
                        <tr>
                            <td>{item.character_name}</td>
                            <td>{item.message.replace(`${item.character_name} : `, "")}</td>
                            <td>{item.date_send}</td>
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
}