import { useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const EditorComponent = ({ readOnly, defaultValue, contentPhotos, setContentPhotos, onTextChange, onChangeSelection, ref }: any) => {
  /**
   * Backend가 없는 상태에서 Frontend 시연을 위한 Rich Editor 이미지 첨부 파일 처리기
   * @param fileURL 
   * @returns 
   */
  const LocalImageUrlHandler = (fileURL: string) => {
    // console.log(`fileURL: ${fileURL}`);
    const ImageBlot: any = Quill.import("formats/image");
    ImageBlot.sanitize = function (fileURL: string) {
      return fileURL
    }
    return ImageBlot.sanitize(fileURL);
  }

  const MyFileReader = (file: any, cb: any) => {
    const fr = new FileReader();
    fr.onloadend = () => cb(fr.result);
    fr.onerror = (err) => cb(err);
    fr.readAsDataURL(file);
  }

  const ImageHandler = () => {
    const maxFileCount = 10;
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*")
    input.setAttribute("multiple", "");
    input.click();

    input.addEventListener("change", async (e) => {
      const targetFiles = (e.target as HTMLInputElement).files as FileList;
      const targetFilesArray = Array.from(targetFiles);

      if (targetFilesArray.length > maxFileCount) {
        alert(`첨부 가능한 파일개수는 ${maxFileCount} 개 입니다.`)
        return;
      } else {
        const selectedFiles: string[] = targetFilesArray.map((file) => { return URL.createObjectURL(file); });      
        const editor = await ref.current.getEditor();
        const range = await editor.getSelection();

        selectedFiles.forEach((file: string, index: number) => {
          const name = LocalImageUrlHandler(file);
          editor.insertEmbed(range.index + index, "image", name);
        })
      }
    })
  }

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ "header": [1, 2, 3, 4, 5, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          ["link", "image"],
        ],
        handlers: {
          image: ImageHandler,
        },
      }
    }
  }, []);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list',
    'link', 'image'
  ];

  return (
    <>
      <ReactQuill
        theme="snow"
        readOnly={readOnly}
        value={defaultValue}
        onChange={onTextChange}
        onChangeSelection={onChangeSelection}
        modules={modules}
        formats={formats}
        ref={ref}
        style={{
          height: "850px",
        }}
      />
    </>
  );
}

export default EditorComponent;