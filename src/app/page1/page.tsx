import Test1 from "../api/test1";
import Test2 from "../api/test2";

export default async function Page1() {
    return(
        <div>
            <h1>PAGE1</h1>
            <Test1 />
            <hr />
            <Test2 server_name={"류트"} />
        </div>
    );
}