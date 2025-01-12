"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { content } from "flowbite-react/tailwind";
import { useState } from "react";

export default function WritePost() {
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ date, setDate ] = useState("");
    const [ content, setContent ] = useState("");

    const onChangeTitle = (e: any) => {
        setTitle(e.target.value);
    }

    const onChangeAuthor = (e: any) => {
        setAuthor(e.target.value);
    }

    const onChangeDate = (e: any) => {
        setDate(e.target.value);
    }

    const onChangeContent = (e: any) => {
        setContent(e.target.value);
    }

    const doPost = () => {
        console.log({
            "title": title,
            "author": author,
            "date": date,
            "content": content
        })
    }

    return (
        <div className="flex flex-col">
            <div className="text-center">
                <h5 className="text-2xl">신규 작성</h5>
            </div>
            <form>
            <div className="flex flex-col">
                <div className="flex flex-row h-12 text-end">
                    <div className="w-2/12 self-center">
                        <Label htmlFor="title" value="title: " />
                    </div>
                    <div className="w-9/12 self-center">
                        <TextInput id="title" type="text" sizing="sm" value={title} onChange={onChangeTitle} required />
                    </div>
                </div>
                <div className="flex flex-row h-12 text-end">
                    <div className="w-2/12 self-center">
                        <Label htmlFor="author" value="author: " />
                    </div>
                    <div className="w-9/12 self-center">
                        <TextInput id="author" type="text" sizing="sm" value={author} onChange={onChangeAuthor} required/>
                    </div>
                </div>
                <div className="flex flex-row h-12 text-end">
                    <div className="w-2/12 self-center">
                        <Label htmlFor="date" value="date: " />
                    </div>
                    <div className="w-9/12 self-center">
                        <TextInput id="date" type="datetime-local" value={date} onChange={onChangeDate} sizing="sm"/>
                    </div>
                </div>
                <div className="flex flex-row h-12 text-end">
                    <div className="w-2/12 self-center">
                        <Label htmlFor="content" value="content: " />
                    </div>
                    <div className="w-9/12 self-center">
                        <TextInput id="content" type="text" sizing="sm" value={content} onChange={onChangeContent}/>
                    </div>
                </div>
                <div className="flex flex-row justify-end">
                    <div className="w-9/12"></div>
                    <div className="w-2/12">
                        <Button color="gray" onClick={doPost}>작성</Button>
                    </div>                    
                </div>
            </div>
            </form>
        </div>
    );
}