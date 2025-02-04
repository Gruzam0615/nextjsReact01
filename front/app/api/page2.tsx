import { redirect } from "next/dist/server/api-utils";
import { Post } from "../interface/post.interface";

export async function getLists() {
    const result = await fetch("https://api.vercel.app/blog")
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        return null;
    })
    return result;
}

export async function WritePostApi(param: any) {
    console.log("requested WritePostApi");
    // console.log(param);
    const filesList = Array.from(param.contentPhotos);
    // console.log(filesList)

    let formData = new FormData();
    formData.append("title", param.title);
    formData.append("author", param.author);
    formData.append("content", param.content);
    if(filesList.length > 0) {
        for(let i = 0; i < filesList.length; i++) {
            // console.log(i + "\n" + JSON.stringify(filesList[i]));
            formData.append(
                `contentPhotos`, 
                new Blob([JSON.stringify(filesList[i])])
            );
        }       
    }   
    formData.append("created", param.created);
    // console.log(formData.getAll("contentPhotos"));

    const options = {
        method: "POST",
        headers: {
            // "Content-Type": "multipart/form-data"
        },
        body: formData,
    }

    return await fetch("/post/upload", options)
    .then((res) => {
        console.log("WritePostApi Success");
        console.log(res);
        return res;
    })
    .catch((err) => {
        console.log("WritePostApi Failed...");
        console.log(err);
        return null;
    })
}