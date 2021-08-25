import "./InvestmentBox.css";
import Table from "../Table";
import Title from "../Title/Title";
import {results} from "../../dataSource"

export default function InvestmentBox() {
    return (
        <div className="investment-box">
            
            <Title/>
            {
                results.map((result, index) => (
                    <Table key={index} tableData ={result}/>
                ))
            }
            

        </div>
    )
}
