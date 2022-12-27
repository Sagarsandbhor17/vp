import "../components/styles/styles.css";
import { useState } from "react";
import Papa from "papaparse";
import { Button, Heading,Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { downloadFile } from "./functions/downloadFile";

export const Page2=()=> {
  
  const [parsedData, setParsedData] = useState([]);

  
  const [tableRows, setTableRows] = useState([]);


  const [values, setValues] = useState([]);

  const changeHandler = (event) => {

    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];
 
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        setParsedData(results.data);

        setTableRows(rowsArray[0]);

        setValues(valuesArray);
      },
    });
  };

  const exportToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(parsedData),
      fileName: 'my.json',
      fileType: 'text/json',
    })
  }


  return (
    <div>
    
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <Heading color='red'>Show CSV file in table</Heading>
      <br/>
      <Button onClick={exportToJson}>Download Json File</Button>
      {/* Table */}
      <TableContainer mt='1rem'>
      <Table variant='striped' colorScheme='cyan' border='2px'>
        <Thead bg='green'>
          <Tr>
            {tableRows.map((rows, index) => {
              return <Th color='white' key={index}>{rows}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {values.map((value, index) => {
            return (
              <Tr key={index}>
                {value.map((val, i) => {
                  return <Td key={i}>{val}</Td>;
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      </TableContainer>
    </div>
  );
}
