import { Summary } from "../Summary";
import { Container } from "./styles";
import {TransactionsTable} from '../TransactionTable'

export function Dashboard(){
    return (
        <Container>
            <Summary/>
            <TransactionsTable />
        </Container>
    );
}