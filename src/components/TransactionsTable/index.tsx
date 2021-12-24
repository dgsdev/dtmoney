import React from "react"
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {  
    useEffect(() => {
        api.get('transactions')       
        .then(response => console.log(response.data));
    }, []);
  return (
      <Container>
          <table>
              <thead>
                  <tr>
                      <th>Título</th>
                      <th>Valor</th>
                      <th>Categoria</th>
                      <th>Data</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Desenvolvimento de website</td>
                      <td className="deposit">R$ 12.000</td>                    
                      <td>Desenvolvimento Front-End</td>
                      <td>06/09/2021</td>
                  </tr>
                  <tr>
                      <td>Aluguel</td>
                      <td className="withdraw">- R$ 1.500</td>
                      <td>Casa</td>
                      <td>20/09/2021</td>
                  </tr>
                  <tr>
                      <td>Desenvolvimento de Api</td>
                      <td className="deposit">R$ 22.000</td>
                      <td>API Back-End</td>
                      <td>26/09/2021</td>
                  </tr>
              </tbody>                              
          </table>
      </Container>
  );
}
