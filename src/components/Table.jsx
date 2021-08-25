import Title from "./Title/Title"
import"./Table.css"
export default function Table({tableData}) {
    return (
            <div className="fund-container card container fluid">
                <Title>{tableData.description}</Title>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th  scope="col">Mês</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Percentual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData?.monthlyReports.map((reports, index) => (
                            <tr key={index}>
                                <td>{reports.month}/{reports.year}</td> 
                                <td>{new Intl.NumberFormat("pt-BR", {style:"currency",currency:"BRL"}).format(reports.value)}</td>
                                
                                <td>{reports.result.percent}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="container-fluid">
                    <p className="fs-3 text-start">Rendimento total: {new Intl.NumberFormat("pt-BR", {style:"currency",currency:"BRL"}).format(tableData?.monthlyReports[11].value - tableData?.monthlyReports[0].value)}</p>
                </div>
            </div>
    )
}
