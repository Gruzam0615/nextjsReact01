import Page1 from "@/app/page1/page";
import Modal from "@/app/ui/modal";

export default function Page({ children }: { children: React.ReactNode }) {
    return(
        <>
            <Modal data={children}>
            </Modal>   
        </>
    );
}