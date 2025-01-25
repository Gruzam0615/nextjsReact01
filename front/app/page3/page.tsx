import "@/app/style/Page3.css";
import { createElement } from "react";

interface tempDataInterface {
    title: string;
    content: string;
    date: string;
}
type TempDataType = {
    title: string;
    content: string;
    date: string;
}

const MyGridColumn = ({myClassName, data}) => {
    return(
        <div className={myClassName}>
        {data.title}
        </div>
    );
}

const Test1 = ({text}) => {
    return(
        <p>{text}</p>
    );
}

export default function Page() {
    const tempData = [
        {
            title: "title01",
            content: "content01",
            date: "yyyy-MM-dd_HH:mm:ss"
        },
        {
            title: "title02",
            content: "content02",
            date: "yyyy-MM-dd_HH:mm:ss"
        },
        {
            title: "title0A",
            content: "content0A",
            date: "yyyy-MM-dd_HH:mm:ss"
        },
        {
            title: "title03",
            content: "content03",
            date: "yyyy-MM-dd_HH:mm:ss"
        },
    ];
    return (
        <div className="container">
            <div className="flex">
                <h2 className="text-5xl">Page3</h2>
            </div>

            <div className="grid grid-cols-4 gap-4 my-grid-row">
                {
                    tempData ? tempData.map((item: TempDataType, index: number) => {
                        // return <div className={"my-grid-column"}>{item.title}</div>
                        return <MyGridColumn myClassName={"my-grid-column"} data={item} />
                    }) :
                        <span>No Data</span>
                }
            </div>
        </div>
    );
}