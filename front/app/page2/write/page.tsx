"use client";

import React, { memo, useRef, useState } from "react";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import "@/app/style/Write.css";
import EditorComponent from "@/app/components/Editor";
import { WritePostApi } from "@/app/api/page2";
import { useRouter } from "next/navigation";

interface RequestParamInterface {
    "title": string,
    "author": string,
    "date": string,
    "content": string,
    "fileInput": string[],
}

export default function WritePost() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [fileInputNameList, setFileInputNameList] = useState<object[]>([]);
    const [fileInput, setFileInput] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

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

    const fileInputLabelClick = () => {
        fileInputRef?.current?.click();
    }

    const fileInputListDelete = (e: any) => {
        const index = Number(e.currentTarget.getAttribute("id"));
        let temp: object[] = [];
        fileInputNameList.map((f, idx) => {
            if(index !== idx) {
                temp.push(f);
            }
            setFileInputNameList(temp);
        })
    }

    const onChangeFileInput = (e: React.ChangeEvent) => {
        const targetFiles = (e.target as HTMLInputElement).files as FileList;
        const targetFilesArray = Array.from(targetFiles);
        const selectedFiles: string[] = targetFilesArray.map((file) => { return URL.createObjectURL(file); });
        const selectedFilesNameList: object[] = targetFilesArray.map((file) => { return file });
        setFileInput((prev) => prev.concat(selectedFiles));
        setFileInputNameList((prev) => prev.concat(selectedFilesNameList));
    }

    // const onChangeFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const files = e.target.files!
    //     if (!files[0]) return
    //     if ((fileInput.length + files.length) > 10) {
    //         return alert('최대 10개 사진만 첨부할 수 있습니다.')
    //     }
    //     const readAndPreview = (file: any) => {
    //         if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
    //             const reader = new FileReader()
    //             reader.onload = () => setFileInput(prev => [...prev, reader.result as string])
    //             reader.readAsDataURL(file)
    //         }
    //     }
    //     if (files) {
    //         [].forEach.call(files, readAndPreview)
    //     }
    //     console.log(fileInput);
    // }

    const doPost = async() => {
        const requestParam: RequestParamInterface = {
            "title": title,
            "author": author,
            "date": date,
            "content": content,
            "fileInput": fileInput,
        }
        const data = await WritePostApi(requestParam);
        if(data != null) {
            alert("개발 중");
        } else {
            alert("업로드 실패");
            router.refresh();
        }
    }

    const [ range, setRange ] = useState();
    const [ readOnly, setReadOnly ] = useState<boolean>(false);
    const quillRef = useRef(null);

    return (
        <div className="flex flex-col">
            <div className="text-center">
                <h5 className="text-2xl">신규 작성</h5>
            </div>
            <form>
                <div className="flex flex-col">
                    <div className="flex flex-row h-12 text-end">
                        <div className="w-2/12 self-center">
                            <Label htmlFor="title" value="제목: " />
                        </div>
                        <div className="w-9/12 self-center">
                            <TextInput id="title" type="text" sizing="sm" value={title} onChange={onChangeTitle} required />
                        </div>
                    </div>
                    <div className="flex flex-row h-12 text-end">
                        <div className="w-2/12 self-center">
                            <Label htmlFor="author" value="작성자: " />
                        </div>
                        <div className="w-9/12 self-center">
                            <TextInput id="author" type="text" sizing="sm" value={author} onChange={onChangeAuthor} required />
                        </div>
                    </div>
                    <div className="flex flex-row h-12 text-end">
                        <div className="w-2/12 self-center">
                            <Label htmlFor="date" value="작성일: " />
                        </div>
                        <div className="w-9/12 self-center">
                            <TextInput id="date" type="datetime-local" value={date} onChange={onChangeDate} sizing="sm" />
                        </div>
                    </div>
                    <div className="flex flex-row h-[900px]">
                        <div className="w-2/12 text-end">
                            <Label htmlFor="content" value="본문: " />
                        </div>
                        <div className="w-9/12">
                            {/* <TextInput id="content" type="text" sizing="sm" value={content} onChange={onChangeContent} /> */}
                            <EditorComponent
                                readOnly={readOnly}
                                defaultValue={content}
                                onChangeSelection={setRange}
                                onTextChange={setContent}
                                ref={quillRef}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row h-12">
                        <div className="w-2/12 text-end self-center">
                            <Label htmlFor="fileInput" value="첨부 파일: " />
                            <input id="fileInput" className="fileInput" type="file" accept="image/*" ref={fileInputRef} multiple onChange={onChangeFileInput}/>
                        </div>
                        <div className="w-2/12 self-center"  onClick={fileInputLabelClick}>
                            <Label value="파일 첨부" />
                        </div>
                        <div className="w-8/12"></div>
                    </div>
                    <div className="flex flex-row h-12 text-center">
                        <div className="w-9/12">파일명</div>
                        <div className="w-2/12">크기</div>
                    </div>
                    {
                        //  fileInput.map((file, index) => (
                        //     <img key={index} src={file} width="280" height="160" alt={`image_${index}`} />
                        // ))
                        fileInputNameList.map((file, index) => (
                            <div key={index} className="flex flex-row h-12 text-center" onClick={fileInputListDelete} id={String(index)}>
                                <div className="w-9/12"><Label value={file.name} /></div>
                                <div className="w-2/12"><Label value={`${file.size}`} /></div>
                            </div>
                        ))
                    }
                    <div className="flex flex-row h-12 justify-end">
                        <div className="w-9/12"></div>
                        <div className="w-2/12">
                            <Button color="gray" onClick={doPost}>작성</Button>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
}