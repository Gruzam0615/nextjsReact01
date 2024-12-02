import Table from "./table";
import TableB from "./tableb";

export default function Page2() {

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-md text-left">
                {/* <Table /> */}
                <TableB />
            </table>
        </div>
    );
}